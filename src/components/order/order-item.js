import moment from "moment";
import { HStack, Heading, Pressable, Text, VStack } from "native-base";

export default function OrderItem({ order, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      shadow={9}
      bg={"white"}
      m={1}
      p={2}
      borderRadius={"lg"}
    >
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"sm"}>{order.orderNumber}</Heading>
        <VStack>
          <Text>{moment.unix(order.pickupDate).format("LLL")}</Text>
          <Text>{order.duration} hari</Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}
