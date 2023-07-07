import { signinFirebase, signupFirebase } from "../../firebase/auth";
import { useMutation } from "react-query";

export default function useAuthApi() {
  const submitSignup = async (payload) => {
    return await signupFirebase(payload)
      .then((res) => {
        if (res.message) throw Error(res.message);
        return res;
      })
      .catch((error) => {
        return error;
      });
  };

  const mutationSignup = useMutation({
    mutationFn: (payload) => submitSignup(payload),
  });

  const submitSignin = async (payload) => {
    return await signinFirebase(payload)
      .then((res) => {
        if (res.message) throw Error(res.message);
        return res;
      })
      .catch((error) => {
        return error;
      });
  };

  const mutationSignin = useMutation({
    mutationFn: (payload) => submitSignin(payload),
  });

  return { mutationSignup, mutationSignin };
}