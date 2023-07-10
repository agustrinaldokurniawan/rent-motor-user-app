import {
  Box,
  Button,
  FormControl,
  Heading,
  Icon,
  Input,
  Pressable,
  Stack,
  Text,
} from "native-base";
import Layout from "../../../components/layout";
import React, { useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Keyboard } from "react-native";
import useAuthApi from "../../../api/auth";
import { addMessage } from "@ouroboros/react-native-snackbar";

export default function SignupScreen({ navigation }) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { mutationSignup } = useAuthApi();

  useEffect(() => {
    Keyboard.dismiss();
    if (!mutationSignup.isSuccess) {
      console.log(mutationSignup.error);
    } else {
      if (mutationSignup.data.message) {
        addMessage({
          text: mutationSignup.data.message,
          duration: 2000,
        });
      } else {
        navigation.navigate("CompleteProfile");
        console.log(mutationSignup.data);
      }
    }
  }, [mutationSignup.isSuccess]);

  const handleSignup = () => {
    mutationSignup.mutate({ email, password });
  };

  return (
    <Layout>
      <Heading color={"primary.500"}>Hai!</Heading>
      <Text color={"muted.500"}>Mulai daftar sekarang</Text>

      <Stack space={4} w="100%" mt={8}>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            borderRadius={"full"}
            placeholder="Email kamu"
            onChangeText={setEmail}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Kata Sandi</FormControl.Label>
          <Input
            borderRadius={"full"}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="3"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Kata sandi kamu"
            onChangeText={setPassword}
          />
        </FormControl>

        <Button py={4} mt={4} borderRadius={"2xl"} onPress={handleSignup}>
          Daftar
        </Button>

        <Box
          alignItems={"center"}
          flexDirection={"row"}
          j
          justifyContent={"center"}
        >
          <Text color={"muted.500"}>Sudah punya akun?</Text>
          <Pressable ml={2} onPress={() => navigation.navigate("Login")}>
            <Text color={"primary.600"}>Masuk sekarang!</Text>
          </Pressable>
        </Box>
      </Stack>
    </Layout>
  );
}
