import { Icon, Input, Pressable, Text, VStack } from "native-base";
import Layout from "../../components/layout";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useEffect, useState } from "react";
import CTALogin from "../../components/cta-login";
import CTAOrder from "../../components/cta-order";
import { useSelector } from "react-redux";
import { listOrder } from "../../api/order";
import ListOrder from "../../components/order/list-order";
import Empty from "../../components/empty";

export default function OrderScreen({ navigation }) {
  const [keyword, setKeyword] = useState("");
  const user = useSelector(
    (state) => state.user.value && JSON.parse(state.user.value)
  );

  const { mutationGetListOrder } = listOrder();

  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFIlteredOrders] = useState([]);

  useEffect(() => {
    if (user) {
      mutationGetListOrder.mutate(user.email);
    }
  }, []);

  useEffect(() => {
    if (mutationGetListOrder.data) {
      setOrders(mutationGetListOrder.data);
    }
  }, [mutationGetListOrder.isSuccess]);

  useEffect(() => {
    const filtered = orders.filter((item) =>
      JSON.stringify(orders)
        .toLocaleLowerCase()
        .includes(keyword.toLocaleLowerCase())
    );
    setFIlteredOrders(filtered);
  }, [keyword]);

  if (!user) {
    return (
      <Layout>
        <CTALogin />
      </Layout>
    );
  }
  if (mutationGetListOrder.isLoading) {
    return (
      <Layout>
        <Text>Loading...</Text>
      </Layout>
    );
  }

  if (!orders?.length) {
    return (
      <Layout>
        <CTAOrder />
      </Layout>
    );
  }
  return (
    <Layout>
      <VStack space={8} pb={12}>
        <Input
          InputLeftElement={
            <Icon
              as={<EvilIcons name="search" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Nomor Order"
          borderRadius={"xl"}
          onChangeText={setKeyword}
          value={keyword}
          InputRightElement={
            <Pressable
              onPress={() => {
                setKeyword("");
              }}
            >
              <Icon
                as={<EvilIcons name="close" />}
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
        <ListOrder order={keyword ? filteredOrders : orders} />
        {keyword && !filteredOrders.length ? (
          <Empty>
            <Text color={"muted.400"}>Tidak ada order yang sesuai.</Text>
            <Text color={"muted.400"}>
              Silahkan masukkan kata kunci yang lain.
            </Text>
          </Empty>
        ) : (
          ""
        )}
      </VStack>
    </Layout>
  );
}
