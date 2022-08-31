import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL_fckUR8qKreJ3iuAsnymXQ5Mu-uem3I",
  authDomain: "book-viewer-78e8e.firebaseapp.com",
  projectId: "book-viewer-78e8e",
  storageBucket: "book-viewer-78e8e.appspot.com",
  messagingSenderId: "878383702563",
  appId: "1:878383702563:web:9a56e23a7ccfcc7bb24796",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "books");

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    console.log(books);
  })
  .catch((err) => {
    console.log(err.message);
  });
