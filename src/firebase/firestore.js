import { getFirestore } from "firebase/firestore";
import { appFirebase } from "./config";

export const dbFirestore = getFirestore(appFirebase);
