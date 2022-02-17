import { initializeApp } from 'firebase/app';

interface lFire {
  [key: string]: string | undefined;
}

const firebaseConfig: lFire = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: 'AIzaSyAZ6GJ-uGkZW1Dm4XCBju1L9XNTGV9WvtQ',
  authDomain: 'reactmusic-8976e.firebaseapp.com',
  projectId: 'reactmusic-8976e',
  storageBucket: 'reactmusic-8976e.appspot.com',
  messagingSenderId: '563524552606',
  appId: '1:563524552606:web:460b4b8285e1d11304f88f',
};

const app = initializeApp(firebaseConfig);

export { app };
