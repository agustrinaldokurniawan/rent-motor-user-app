import AsyncStorage from "@react-native-async-storage/async-storage";

export const keepLogin = async (user) => {
  await AsyncStorage.setItem("user", user);
};
export const clearLogin = async () => {
  await AsyncStorage.removeItem("user");
};
export const getUser = async () => {
  await AsyncStorage.getItem("user");
};
