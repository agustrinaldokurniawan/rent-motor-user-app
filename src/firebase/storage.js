import { getStorage } from "firebase/storage";
import { appFirebase } from "./config";

// Initialize Cloud Storage and get a reference to the service
export const storageFirebase = getStorage(appFirebase);
