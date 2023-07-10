import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { appFirebase } from "./config";

const auth = getAuth(appFirebase);

export const signupFirebase = async ({ email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    return user;
  } catch (error) {
    return error;
  }
};

export const signinFirebase = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    return user;
  } catch (error) {
    return error;
  }
};
export const saveProfile = async ({ displayName, photoURL }) => {
  try {
    updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  } catch (error) {
    return error;
  }
};
