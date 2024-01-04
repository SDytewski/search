import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFPIAfSEm6dCNHPVJggC_f6Nl-QFJLm6Q",
  authDomain: "movie-favorites-d8693.firebaseapp.com",
  projectId: "movie-favorites-d8693",
  storageBucket: "movie-favorites-d8693.appspot.com",
  messagingSenderId: "127968692010",
  appId: "1:127968692010:web:a878f53b6613f870ec4053",
  measurementId: "G-3NWKWDDSNC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)