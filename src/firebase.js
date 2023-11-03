import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAxZVSgvNhUlD_vMgLqXU6cphZFC1cLQ8Q',
  authDomain: 'blog-49223.firebaseapp.com',
  projectId: 'blog-49223',
  storageBucket: 'blog-49223.appspot.com',
  messagingSenderId: '863535510568',
  appId: '1:863535510568:web:7728ac87c2ffa6032cf11d',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
export { app, provider, auth, db, storage };
