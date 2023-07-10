import { HStack, Heading, Icon, IconButton, VStack } from "native-base";

import EvilIcons from "react-native-vector-icons/EvilIcons";
export default function TopBarHome(props) {
  const { city } = props;

  return (
    <HStack justifyContent={"space-between"} {...props}>
      <VStack>
        <HStack alignItems={"center"} space={4}>
          <Heading size={"xs"}>Lokasi kamu</Heading>
          <EvilIcons name="chevron-down" size={32} />
        </HStack>
        <Heading size={"sm"}>{city}</Heading>
      </VStack>
      <HStack>
        <IconButton
          icon={<Icon as={EvilIcons} name="bell" size={8} color={"black"} />}
        />
      </HStack>
    </HStack>
  );
}
