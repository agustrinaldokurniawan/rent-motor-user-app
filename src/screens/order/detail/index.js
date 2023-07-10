import {
  Button,
  CheckIcon,
  Divider,
  HStack,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "native-base";
import Layout from "../../../components/layout";
import MotorCard from "../../../components/card/motor";
import moment from "moment";
import { useSelector } from "react-redux";
import { getMotor } from "../../../api/motor";

export default function DetailOrderScreen({ navigation, route }) {
  const user = useSelector((state) => state.user.value);
  const parsedUser = user && JSON.parse(user);

  const { order } = route.params;
  const { data: dataMotor, error, isLoading } = getMotor(order.motorName);

  const onPressConfirm = () => {
    navigation.navigate("ScanOrder", {
      data: {
        order,
        dataMotor,
      },
    });
  };

  return (
    <Layout>
      <VStack space={8} pb={12}>
        <VStack>
          <Heading>Order</Heading>
          <Text>#{order.orderNumber}</Text>
          {dataMotor && dataMotor.length ? (
            <VStack space={2}>
              <Heading size={"sm"}>Detail Motor:</Heading>
              <MotorCard motor={dataMotor[0]} />
            </VStack>
          ) : (
            ""
          )}
        </VStack>
        <VStack space={2}>
          <Heading size={"sm"}>Informasi Pelanggan:</Heading>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Nama</Heading>
            <Text>{user && parsedUser?.displayName}</Text>
          </HStack>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Email</Heading>
            <Text>{user && parsedUser?.email}</Text>
          </HStack>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Alamat</Heading>
            <Text>{order.address}</Text>
          </HStack>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Nomor Hp</Heading>
            <Text>{order.phoneNumber}</Text>
          </HStack>
        </VStack>
        <VStack space={2}>
          <Heading size={"sm"}>Ringkasan Order:</Heading>

          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Tanggal Pengambilan</Heading>
            <Text>{moment.unix(order.pickupDate).format("LLL")}</Text>
          </HStack>
          {dataMotor && dataMotor.length ? (
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Heading size={"xs"}>Durasi</Heading>
              <Text>
                {order.duration || 0} {dataMotor[0].duration}
              </Text>
            </HStack>
          ) : (
            ""
          )}
          {dataMotor && dataMotor.length ? (
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Heading size={"xs"}>Harga harian</Heading>
              <Text>
                {Number(dataMotor[0].price)
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "Idr",
                  })
                  .replace(/(,\w).*/g, "")}
                / {dataMotor[0].duration}
              </Text>
            </HStack>
          ) : (
            ""
          )}
          {dataMotor && dataMotor.length ? (
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Heading size={"xs"}>Total</Heading>
              <Text>
                {Number(Number(dataMotor[0].price) * Number(order.duration))
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "Idr",
                  })
                  .replace(/(,\w).*/g, "")}
              </Text>
            </HStack>
          ) : (
            ""
          )}
        </VStack>
        <Button borderRadius={"lg"} onPress={onPressConfirm}>
          Scan untuk menyelesaikan
        </Button>
      </VStack>
    </Layout>
  );
}
