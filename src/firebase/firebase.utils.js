import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ-kCagFQbr0y5uLj-RFuLF1cxW25n67w",
  authDomain: "simply-db.firebaseapp.com",
  databaseURL: "https://simply-db.firebaseio.com",
  projectId: "simply-db",
  storageBucket: "simply-db.appspot.com",
  messagingSenderId: "245158110013",
  appId: "1:245158110013:web:5d71065b7dd79588791b54"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;

}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
