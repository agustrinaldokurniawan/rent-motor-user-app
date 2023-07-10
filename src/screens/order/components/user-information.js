import { HStack, Heading, Input, Text, VStack } from "native-base";
import { useState } from "react";

export default function UserInformation(props) {
  return (
    <VStack space={2}>
      <Heading size={"sm"}>Informasi Pelanggan:</Heading>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"xs"}>Nama</Heading>
        <Text>{user.name}</Text>
      </HStack>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"xs"}>Email</Heading>
        <Text>{user.email}</Text>
      </HStack>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"xs"}>Alamat</Heading>
        <Input
          placeholder="Alamat kamu"
          maxW={200}
          isRequired
          onChangeText={setAddress}
        />
      </HStack>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"xs"}>Nomor Hp</Heading>
        <Input
          placeholder="Nomor Hp kamu"
          maxW={200}
          isRequired
          onChangeText={setPhoneNumber}
        />
      </HStack>
    </VStack>
  );
}
