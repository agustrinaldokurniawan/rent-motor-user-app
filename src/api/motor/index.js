import { useQuery } from "react-query";
import {
  getDocs,
  collection,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { dbFirestore } from "../../firebase/firestore";

export default function useMotorApi() {
  const listMotor = () => {
    const { isLoading, error, data, refetch } = useQuery("motorsData", () => {
      return fetchMotors();
    });

    const fetchMotors = async () => {
      try {
        const querySnapshot = await getDocs(collection(dbFirestore, "motors"));
        const data = querySnapshot?.docs?.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        return data;
      } catch (error) {
        console.log({ error });
      }
    };

    return { isLoading, error, data, refetch };
  };

  return { listMotor };
}

export const listMotor = () => {
  const { isLoading, error, data, refetch } = useQuery("motorsData", () => {
    return fetchMotors();
  });

  const fetchMotors = async () => {
    try {
      const querySnapshot = await getDocs(collection(dbFirestore, "motors"));
      const data = querySnapshot?.docs?.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  return { isLoading, error, data, refetch };
};

export const getMotor = (motorName) => {
  const { isLoading, error, data, refetch } = useQuery("orders", () => {
    return fetchMotor();
  });

  const fetchMotor = async () => {
    try {
      const ref = collection(dbFirestore, "motors");
      const q = query(ref, where("name", "==", motorName));
      const querySnapshot = await getDocs(q);
      const motor = querySnapshot?.docs?.map((doc) => {
        return {
          id: doc,
          ...doc.data(),
        };
      });
      return motor;
    } catch (error) {
      console.log({ error });
    }
  };

  return { isLoading, error, data, refetch };
};
