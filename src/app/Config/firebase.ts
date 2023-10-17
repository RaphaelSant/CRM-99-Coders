import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export function InicializarServico() {
  const firebaseConfig = {
    apiKey: "AIzaSyC8sRPoiRQqZMBYb4sKizPWRTybdesO-Pk",
    authDomain: "crm-a8a6a.firebaseapp.com",
    projectId: "crm-a8a6a",
    storageBucket: "crm-a8a6a.appspot.com",
    messagingSenderId: "712673328398",
    appId: "1:712673328398:web:12bdb71d57f83a678b2b5f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  return auth;
}
