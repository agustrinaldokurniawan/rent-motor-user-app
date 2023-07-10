import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
export default function useAuth() {
  const getUser = async () => {
    const user = await AsyncStorage.getItem("user");
    return user;
  };

  const setUser = async (value) => {
    await AsyncStorage.setItem("user", value);
  };

  return { getUser, setUser };
}
