import { HStack, Heading, Text, VStack } from "native-base"

export default function UserInformation(props) {
  const user = {
    name: 'Adam Heinz',
    address: 'Jalan Adam 1, Jakarta Barat',
    email: 'adam.heinz@email.com',
    phoneNumber: '081234567890'
  }

  return (
    <VStack space={2}>
      <Heading size={"sm"}>
        Informasi Pelanggan:
      </Heading>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Heading size={"xs"}>Nama</Heading>
        <Text>{user.name}</Text>
      </HStack>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Heading size={"xs"}>Alamat</Heading>
        <Text>{user.address}</Text>
      </HStack>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Heading size={"xs"}>Email</Heading>
        <Text>{user.email}</Text>
      </HStack>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Heading size={"xs"}>Nomor Hp</Heading>
        <Text>{user.phoneNumber}</Text>
      </HStack>
    </VStack>
  )
}