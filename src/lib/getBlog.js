import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// Initialize Firebase for server-side use
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase if not already initialized
let app;
if (!getApps().length) {
	app = initializeApp(firebaseConfig);
} else {
	app = getApps()[0];
}
const db = getFirestore(app);

// Helper function to serialize Firestore data to plain objects
function serializeFirestoreData(data) {
	if (!data) return null;
	
	// Use JSON.parse(JSON.stringify()) to deeply serialize all Firestore objects
	// This converts Timestamps and other Firestore types to plain values
	let serialized;
	try {
		// First, convert any Firestore Timestamps manually
		const temp = { ...data };
		
		// Convert Firestore Timestamps to ISO strings
		if (temp.createdAt) {
			if (temp.createdAt.toDate && typeof temp.createdAt.toDate === 'function') {
				temp.createdAt = temp.createdAt.toDate().toISOString();
			} else if (temp.createdAt.seconds) {
				temp.createdAt = new Date(temp.createdAt.seconds * 1000).toISOString();
			}
		}
		
		if (temp.updatedAt) {
			if (temp.updatedAt.toDate && typeof temp.updatedAt.toDate === 'function') {
				temp.updatedAt = temp.updatedAt.toDate().toISOString();
			} else if (temp.updatedAt.seconds) {
				temp.updatedAt = new Date(temp.updatedAt.seconds * 1000).toISOString();
			}
		}
		
		if (temp.publishAt) {
			if (temp.publishAt.toDate && typeof temp.publishAt.toDate === 'function') {
				temp.publishAt = temp.publishAt.toDate().toISOString();
			} else if (temp.publishAt.seconds) {
				temp.publishAt = new Date(temp.publishAt.seconds * 1000).toISOString();
			}
		}
		
		// Deep clone using JSON to remove any remaining Firestore methods
		serialized = JSON.parse(JSON.stringify(temp));

		// Set date field
		serialized.date = serialized.publishAt || serialized.createdAt;

		// Ensure tags is an array
		if (!Array.isArray(serialized.tags)) {
			serialized.tags = serialized.tags ? [serialized.tags] : [];
		}
		
	} catch (error) {
		// Fallback: manual serialization
		serialized = { ...data };
		
		// Convert Timestamps
		if (serialized.createdAt && serialized.createdAt.seconds) {
			serialized.createdAt = new Date(serialized.createdAt.seconds * 1000).toISOString();
		}
		if (serialized.updatedAt && serialized.updatedAt.seconds) {
			serialized.updatedAt = new Date(serialized.updatedAt.seconds * 1000).toISOString();
		}
		if (serialized.publishAt && serialized.publishAt.seconds) {
			serialized.publishAt = new Date(serialized.publishAt.seconds * 1000).toISOString();
		}
		
		// Ensure tags is an array
		if (!Array.isArray(serialized.tags)) {
			serialized.tags = serialized.tags ? [serialized.tags] : [];
		}
	}
	
	return serialized;
}

export async function getBlog(slug) {
	// Query Firestore for a blog with the given slug
	const q = query(collection(db, "blogs"), where("slug", "==", slug));
	const snap = await getDocs(q);

	if (snap.empty) return null;
	
	const data = snap.docs[0].data();
	
	// Check if the blog is published (handle scheduled posts)
	const publishAt = data.publishAt;
	let publishTime = null;
	
	if (publishAt) {
		if (publishAt.toDate) {
			publishTime = publishAt.toDate().getTime();
		} else if (publishAt.seconds) {
			publishTime = publishAt.seconds * 1000;
		}
	}
	
	const isPublished = !publishAt || (publishTime && publishTime <= Date.now());
	
	if (!isPublished) return null;
	
	// Serialize Firestore data to plain object before returning
	return serializeFirestoreData(data);
}
