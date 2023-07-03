import { AlertDialog, Button, FormControl, Heading, Input, Stack, Text } from "native-base";
import Layout from "../../../components/layout";
import React, { useRef, useState } from "react";

export default function ForgetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState()
  const [isOpen, setIsOpen] = useState(false)

  const handleCheckEmail = () => {
    setIsOpen(true)
    console.log({ email })
  }

  const cancelRef = useRef(null)
  const onOk = () => {
    setIsOpen(false)
    navigation.navigate('VerifyOtp')
  }

  const CheckEmailDialog = () => {
    return (
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Periksa Email</AlertDialog.Header>
          <AlertDialog.Body>
            Check kode otp yang dikirimkan ke email kamu!
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onOk} ref={cancelRef}>
                Ok
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
      <Heading color={"primary.500"}>Lupa Kata Sandi?</Heading>
      <Text color={"muted.500"}>Jangan khawatir, kami akan membantu Anda mengatur ulang kata sandi Anda.</Text>

      <Stack space={4} w="100%" mt={8}>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            borderRadius={"full"}
            placeholder="Email kamu"
            onChangeText={setEmail}
          />
        </FormControl>

        <Button py={4} borderRadius={"2xl"} mt={4} onPress={handleCheckEmail}>Periksa email</Button>
      </Stack>
    </Layout>
  )
}