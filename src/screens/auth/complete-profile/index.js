import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Image,
  Input,
  Pressable,
  Stack,
  Text,
  VStack,
} from "native-base";
import Layout from "../../../components/layout";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { saveProfile } from "../../../firebase/auth";
import { imageUriBlob } from "../../../utils/imageUriBlob";
import { uploadImageToFirebase } from "../../../utils/uploadImageToFirebase";

export default function CompleteProfileScreen({ navigation }) {
  const [name, setName] = useState();
  const [image, setImage] = useState(null);

  const handleSave = async () => {
    const blob = await imageUriBlob(image);
    const resp = await uploadImageToFirebase(blob, image);
    await saveProfile({ displayName: name, photoURL: resp });
    navigation.navigate("Home");
  };

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      console.log("didnt select any image");
    }
  };

  return (
    <Layout>
      <Heading color={"primary.500"}>Tinggal 1 langkah lagi</Heading>
      <Text color={"muted.500"}>Ayo selesaikan pendaftaran akun kamu</Text>

      <Stack space={4} w="100%" mt={8}>
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
            <Pressable onPress={pickImageAsync}>
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

        <Button
          py={4}
          mt={4}
          borderRadius={"2xl"}
          onPress={handleSave}
          isDisabled={!name || !image}
        >
          Simpan Profil
        </Button>
      </Stack>
    </Layout>
  );
}
