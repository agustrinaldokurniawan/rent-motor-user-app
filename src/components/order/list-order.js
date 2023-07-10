import { VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import OrderItem from "./order-item";

export default function ListOrder({ order }) {
  const navigation = useNavigation();
  console.log({ order });
  const onPressDetail = (item) => {
    navigation.navigate("DetailOrder", {
      order: item,
    });
  };

  return (
    <VStack space={8}>
      {order.map((item, key) => (
        <OrderItem
          key={key}
          order={item}
          onPress={() => {
            onPressDetail(item);
          }}
        />
      ))}
    </VStack>
  );
}
