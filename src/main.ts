import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const firebaseConfig = {
  apiKey: "AIzaSyCg86buQMaFTUMNI3Ka92RZdk6gARdUZ7o",
  authDomain: "webshop-e46e9.firebaseapp.com",
  projectId: "webshop-e46e9",
  storageBucket: "webshop-e46e9.appspot.com",
  messagingSenderId: "171018847446",
  appId: "1:171018847446:web:17fd27e9fdb08365acf577",
  measurementId: "G-ZS74Z9FVNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);