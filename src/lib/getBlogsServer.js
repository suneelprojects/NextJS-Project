import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

// Helper to serialize Firestore timestamps
function serializeBlog(doc) {
  const data = doc.data();

  const convert = (field) => {
    if (!data[field]) return null;
    if (data[field].toDate) return data[field].toDate().toISOString();
    if (data[field].seconds) return new Date(data[field].seconds * 1000).toISOString();
    return data[field];
  };

  return {
    id: doc.id,
    ...data,
    createdAt: convert("createdAt"),
    updatedAt: convert("updatedAt"),
    publishAt: convert("publishAt"),
    date: convert("publishAt") || convert("createdAt"),
    tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
  };
}

export async function getAllBlogs() {
  const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => serializeBlog(doc));
}
