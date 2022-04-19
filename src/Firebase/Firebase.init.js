import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoJ0i0Jqb0Bt_HPNk_CEtHxvlPsl6uY0w",
  authDomain: "freedom-bird-tour-guide.firebaseapp.com",
  projectId: "freedom-bird-tour-guide",
  storageBucket: "freedom-bird-tour-guide.appspot.com",
  messagingSenderId: "821491809661",
  appId: "1:821491809661:web:d50197bb6839101bd06014"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;