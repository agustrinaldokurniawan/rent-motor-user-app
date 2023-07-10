import { getDownloadURL, ref } from "firebase/storage";
import { storageFirebase } from "../firebase/storage";

export const fetchImageFromFirebase = async (name) => {
  try {
    const url = await getDownloadURL(ref(storageFirebase, name));
    return url;
  } catch (error) {
    return error;
  }
};
