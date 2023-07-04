import { AlertDialog, Box, Button, FormControl, HStack, Heading, Input, Pressable, Stack, Text } from "native-base";
import Layout from "../../../components/layout";
import React, { useEffect, useRef, useState } from "react";

export default function VerifyEmailScreen({ navigation, route }) {
  const [otp, setOtp] = useState({ 1: null, 2: null, 3: null, 4: null })
  const [isOpen, setIsOpen] = useState(false)
  const { state } = route.params

  const handleVerifyOtp = () => {
    if (state === 'FORGET_PASSWORD') {
      navigation.navigate('NewPassword')
    }
  }

  const cancelRef = useRef(null)
  const onOk = () => {
    setIsOpen(false)
  }

  const inputRef = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
  }

  useEffect(() => {
    if (!otp[1]) {
      inputRef[1].current.focus()
    }
    if (otp[2]) {
      inputRef[2].current.blur()
    }
    if (otp[3]) {
      inputRef[3].current.blur()
    }
    if (otp[4]) {
      inputRef[4].current.blur()
    }
  }, [otp])

  const onChangeOtp = (value, index) => {
    setOtp({ ...otp, [index]: value })
    changeFocus(value, index)
  }

  const changeFocus = (value, index) => {
    if (/[a-zA-Z0-9]/.test(value) && index < 4) {
      inputRef[index + 1].current.focus()
    }
  }

  const handleOnPress = (value) => {
    setOtp({ ...otp, [value]: null })
  }

  const handleGetNewOtp = () => {
    setIsOpen(true)
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
      <Heading color={"primary.500"}>Verifikasi Email</Heading>
      <Text color={"muted.500"}>Kami telah mengirimkan kode OTP ke email kamu.</Text>

      <Stack space={4} w="100%" mt={8}>
        <FormControl>
          <FormControl.Label>Kode OTP</FormControl.Label>
          <HStack space={4}>
            {[1, 2, 3, 4].map((item) => (
              <Input
                key={item}
                ref={inputRef[item]}
                value={otp[item]}
                borderRadius={"full"}
                maxLength={1}
                minW={50}
                textAlign={'center'}
                fontSize={30}
                inputMode="numeric"
                onChangeText={(value) => {
                  onChangeOtp(value, item)
                }}
                onPressIn={() => {
                  handleOnPress(item)
                }}
              />
            ))}
          </HStack>
        </FormControl>

        <Button py={4} borderRadius={"2xl"} mt={4} onPress={handleVerifyOtp}>Verifikasi</Button>
        <Box
          alignItems={'center'}
          flexDirection={"row"} j
          justifyContent={'center'}>
          <Text color={"muted.500"}>
            Tidak menerima otp?
          </Text>
          <Pressable ml={2} onPress={handleGetNewOtp}>
            <Text color={"primary.600"}>Kirim ulang!</Text>
          </Pressable>
        </Box>
      </Stack>
    </Layout>
  )
}