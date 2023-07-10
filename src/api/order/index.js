import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { useMutation, useQuery } from "react-query";
import { dbFirestore } from "../../firebase/firestore";
import { useSelector } from "react-redux";

export default function useOrderApi() {
  const postData = async (payload) => {
    const docRef = await addDoc(collection(dbFirestore, "orders"), {
      ...payload,
    });
  };

  const mutationSubmit = useMutation({
    mutationFn: (payload) => postData(payload),
  });

  return { mutationSubmit };
}

export const listOrder = () => {
  const fetchOrders = async (email) => {
    try {
      const ref = collection(dbFirestore, "orders");
      const q = query(ref, where("userEmail", "==", email));
      const querySnapshot = await getDocs(q);
      const order = querySnapshot?.docs?.map((doc) => {
        return {
          id: doc,
          ...doc.data(),
        };
      });
      return order;
    } catch (error) {
      console.log({ error });
    }
  };

  const mutationGetListOrder = useMutation({
    mutationFn: (email) => fetchOrders(email),
  });
  return { mutationGetListOrder };

  // const { isLoading, error, data, refetch } = useQuery("orders", () => {
  //   return fetchOrders();
  // });

  // const fetchOrders = async () => {
  //   try {
  //     const ref = collection(dbFirestore, "orders");
  //     const q = query(ref, where("userEmail", "==", user.email));
  //     const querySnapshot = await getDocs(q);
  //     const order = querySnapshot?.docs?.map((doc) => {
  //       return {
  //         id: doc,
  //         ...doc.data(),
  //       };
  //     });
  //     return order;
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };

  // return { isLoading, error, data, refetch };
};
