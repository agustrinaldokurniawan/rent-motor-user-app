import { Box, Button, Center, FormControl, Heading, Input, Pressable, Text, VStack } from "native-base";
import Layout from "../../components/layout";
import { useEffect, useState } from "react";
import CTALogin from "../../components/cta-login";
import useAuth from "../../auth";

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()
  const [phoneNumber, setPhoneNumber] = useState()

  const { getUser } = useAuth()

  useEffect(() => {
    if (getUser()) {
      setUser()
    }
  }, [getUser()])

  const setUser = async () => {
    const user = await getUser()
    setEmail(user.email)
  }

  const isDisabled = () => {
    return true
  }

  if (!getUser()) {
    return (
      <Layout>
        <CTALogin />
      </Layout>
    )
  }

  return (
    <Layout>
      <VStack space={8} mb={12}>
        <Heading>Profil Akun</Heading>
        <Center>
          <VStack space={4}>
            <Box w={100} alignItems={'center'} justifyContent={'center'} h={100} bg={"muted.300"} borderRadius={"lg"}>
              <Text color={"white"}>No Image</Text>
            </Box>
            <Pressable>
              <Text textAlign={'center'} color={"primary.600"}>Ganti Foto</Text>
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
          <Input
            value={email}
            borderRadius={"full"}
            isDisabled={true}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Nomor Hp</FormControl.Label>
          <Input
            value={phoneNumber}
            borderRadius={"full"}
            placeholder="Nomor Hp kamu"
            onChangeText={setPhoneNumber}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Alamat</FormControl.Label>
          <Input
            value={address}
            borderRadius={"full"}
            placeholder="Jalan, kota, nomor pos"
            onChangeText={setAddress}
          />
        </FormControl>

        <Button borderRadius={"lg"} isDisabled={isDisabled}>Simpan perubahan</Button>
      </VStack>
    </Layout>
  )
}