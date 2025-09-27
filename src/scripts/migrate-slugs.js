require('dotenv').config();

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, query, where, updateDoc, doc } = require('firebase/firestore');
const { slugify } = require('../utils/slugify');

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function generateUniqueSlug(baseSlug, excludeId = null) {
  let candidateSlug = baseSlug;
  let counter = 1;
  while (true) {
    const q = query(collection(db, 'blogs'), where('slug', '==', candidateSlug));
    const querySnapshot = await getDocs(q);
    const hasConflict = querySnapshot.docs.some(doc => doc.id !== excludeId);
    if (!hasConflict) {
      return candidateSlug;
    }
    candidateSlug = `${baseSlug}-${counter}`;
    counter++;
  }
}

async function migrateSlugs() {
  try {
    console.log('Starting slug migration...');
    const blogsRef = collection(db, 'blogs');
    const querySnapshot = await getDocs(blogsRef);

    let updatedCount = 0;
    let skippedCount = 0;

    for (const docSnap of querySnapshot.docs) {
      const data = docSnap.data();
      const docId = docSnap.id;

      if (data.slug) {
        console.log(`Skipping ${docId}: already has slug '${data.slug}'`);
        skippedCount++;
        continue;
      }

      if (!data.title) {
        console.log(`Skipping ${docId}: no title found`);
        skippedCount++;
        continue;
      }

      const baseSlug = slugify(data.title);
      const uniqueSlug = await generateUniqueSlug(baseSlug);

      await updateDoc(doc(db, 'blogs', docId), { slug: uniqueSlug });
      console.log(`Updated ${docId}: '${data.title}' -> '${uniqueSlug}'`);
      updatedCount++;
    }

    console.log(`Migration complete. Updated: ${updatedCount}, Skipped: ${skippedCount}`);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrateSlugs();
