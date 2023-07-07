import AsyncStorage from "@react-native-async-storage/async-storage";
export default function useAuth() {
  const getUser = async () => {
    const data = await AsyncStorage.getItem('user')
    return JSON.parse(data)
  }
  const setUser = async (value) => {
    await AsyncStorage.setItem('user', value)
  }

  return { getUser, setUser }
}