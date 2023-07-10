import { ref, uploadBytes } from "firebase/storage";
import { storageFirebase } from "../firebase/storage";

export const uploadImageToFirebase = async (blob, image) => {
  const imageUri =
    Platform.OS !== "android" ? image : image.replace("file://", "");
  const imageName = imageUri.split("/").pop();
  const imageRef = ref(storageFirebase, imageName);

  return uploadBytes(imageRef, blob).then((snapshopt) => {
    return snapshopt.metadata.name;
  });
};
