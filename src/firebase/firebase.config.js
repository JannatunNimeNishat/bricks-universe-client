// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID, */

  apiKey: "AIzaSyDXqwfGMV_QGpkZDg13urcn-D_ZjHbQxGI",
  authDomain: "bricks-universe.firebaseapp.com",
  projectId: "bricks-universe",
  storageBucket: "bricks-universe.appspot.com",
  messagingSenderId: "898176883338",
  appId: "1:898176883338:web:4c7a5765a84c0f3c6cab73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;