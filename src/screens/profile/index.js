import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import Layout from "../../components/layout";
import { useEffect, useState } from "react";
import CTALogin from "../../components/cta-login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducer/user";
import { fetchImageFromFirebase } from "../../utils/fetchImageFromFirebase";

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if (user) {
      setUser();
      fetchImage();
    }
  }, [user]);

  const fetchImage = async () => {
    const data = await JSON.parse(user);
    const resp = await fetchImageFromFirebase(data.photoURL);
    if (typeof resp === "string") {
      setImage(resp);
    }
  };

  const setUser = async () => {
    const data = await JSON.parse(user);
    setEmail(data.email);
    setName(data.displayName);
    setImage(data.photoUrl);
  };

  const isDisabled = () => {
    if (!name) {
      return true;
    }
  };

  const onPressLogout = () => {
    dispatch(logout());
    navigation.navigate("Home");
  };

  if (!user) {
    return (
      <Layout>
        <CTALogin />
      </Layout>
    );
  }

  return (
    <Layout>
      <VStack space={8} mb={12}>
        <Heading>Profil Akun</Heading>
        <Center>
          <VStack space={4}>
            <Box
              w={100}
              alignItems={"center"}
              justifyContent={"center"}
              h={100}
              bg={"muted.300"}
              borderRadius={"lg"}
            >
              {!image ? (
                <Text color={"white"}>No Image</Text>
              ) : (
                <Image
                  source={{ uri: image }}
                  alt="Profile"
                  width={"100%"}
                  height={"100%"}
                  borderRadius={"lg"}
                />
              )}
            </Box>
            <Pressable>
              <Text textAlign={"center"} color={"primary.600"}>
                Ganti Foto
              </Text>
            </Pressable>
          </VStack>
        </Center>

        <FormControl>
          <FormControl.Label>Nama</FormControl.Label>
          <Input
            value={name}
            borderRadius={"full"}
            placeholder="Nama kamu"
            onChangeText={setName}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input value={email} borderRadius={"full"} isDisabled={true} />
        </FormControl>

        <Button borderRadius={"lg"} isDisabled={isDisabled()}>
          Simpan perubahan
        </Button>

        <Button
          borderRadius={"lg"}
          colorScheme={"danger"}
          onPress={onPressLogout}
        >
          Keluar
        </Button>
      </VStack>
    </Layout>
  );
}
