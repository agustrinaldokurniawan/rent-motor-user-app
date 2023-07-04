import { AlertDialog, Button, FormControl, Heading, Icon, Input, Pressable, Stack, Text } from "native-base";
import Layout from "../../../components/layout";
import React, { useRef, useState } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function NewPasswordScreen({ navigation }) {
  const [password, setPassword] = useState()
  const [show, setShow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSetPassword = () => {
    setIsOpen(true)
  }

  const cancelRef = useRef(null)
  const onOk = () => {
    setIsOpen(false)
    navigation.navigate('Login')
  }

  const CheckEmailDialog = () => {
    return (
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Atur Kata Sandi</AlertDialog.Header>
          <AlertDialog.Body>
            Kata sandi kamu telar berhasil diperbaharui, silahkan login kembali!
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onOk} ref={cancelRef}>
                Login
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    )
  }
  return (
    <Layout>
      <CheckEmailDialog />
      <Heading color={"primary.500"}>Buat kata sandi baru</Heading>
      <Text color={"muted.500"}>Masukkan kata sandi baru untuk akun Anda.</Text>

      <Stack space={4} w="100%" mt={8}>
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
        </FormControl>

        <Button py={4} borderRadius={"2xl"} mt={4} onPress={handleSetPassword}>Atur kata sandi</Button>
      </Stack>
    </Layout>
  )
}