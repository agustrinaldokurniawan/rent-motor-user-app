import { AlertDialog, Button, FormControl, HStack, Heading, Input, Stack, Text } from "native-base";
import Layout from "../../../components/layout";
import React, { useRef, useState } from "react";

export default function VerifyOtpScreen({ navigation }) {
  const [otp, setOtp] = useState()
  const [isOpen, setIsOpen] = useState(false)

  const handleCheckEmail = () => {
    setIsOpen(true)
    console.log({ otp })
  }

  const cancelRef = useRef(null)
  const onOk = () => {
    setIsOpen(false)
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
      <Heading color={"primary.500"}>Verifikasi OTP</Heading>
      <Text color={"muted.500"}>Kami telah mengirimkan kode OTP ke nomor telepon yang terdaftar.</Text>

      <Stack space={4} w="100%" mt={8}>
        <FormControl>
          <FormControl.Label>Kode OTP</FormControl.Label>
          <HStack space={4}>
            {[1, 2, 3, 4].map((_, key) => (
              <Input
                key={key}
                borderRadius={"full"}
                maxLength={1}
                minW={50}
                textAlign={'center'}
                fontSize={30}
                inputMode="numeric"
                onChangeText={(value) => {
                  setOtp(otp + value)
                }}
              />
            ))}
          </HStack>
        </FormControl>

        <Button py={4} borderRadius={"2xl"} mt={4} onPress={handleCheckEmail}>Verifikasi</Button>
      </Stack>
    </Layout>
  )
}