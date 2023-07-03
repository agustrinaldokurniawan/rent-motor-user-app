import { Box, Button, FormControl, Heading, Icon, Input, Pressable, Stack, Text } from "native-base";
import Layout from "../../../components/layout";
import React, { useState } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function LoginScreen({ navigation }) {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleLogin = () => {
    console.log({ email, password })
  }

  return (
    <Layout>
      <Heading color={"primary.500"}>Selamat Datang kembali!</Heading>
      <Text color={"muted.500"}>Silakan masuk ke akun Anda untuk melanjutkan</Text>

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
                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="3" color="muted.400" />
              </Pressable>}
            placeholder="Kata sandi kamu"
            onChangeText={setPassword}
          />
          <FormControl.Label>
            <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
              <Text color={"muted.400"}>Lupa kata sandi</Text>
            </Pressable>
          </FormControl.Label>
        </FormControl>

        <Button py={4} mt={4} borderRadius={"2xl"} onPress={handleLogin}>Masuk</Button>

        <Box
          alignItems={'center'}
          flexDirection={"row"} j
          justifyContent={'center'}>
          <Text color={"muted.500"}>
            Tidak punya akun?
          </Text>
          <Pressable ml={2} onPress={() => navigation.navigate('Signup')}>
            <Text color={"primary.600"}>Daftar sekarang!</Text>
          </Pressable>
        </Box>
      </Stack>
    </Layout>
  )
}