import { Button, Heading, Text, VStack } from "native-base";
import Layout from "../../../components/layout";
import Success from "../../../components/success";

export default function OrderPaidScreen({ navigation }) {
  return (
    <Layout flex={1}>
      <Success>
        <VStack w={"full"} space={8}>
          <VStack space={4}>
            <Heading size={"xs"} textAlign={"center"}>
              Rental telah dibayar
            </Heading>
            <Text textAlign={"center"}>Silahkan gunakan kendaraan anda.</Text>
          </VStack>
          <Button w={"full"} onPress={() => navigation.navigate("Home")}>
            <Text color={"white"}>Kembali ke halaman utama</Text>
          </Button>
        </VStack>
      </Success>
    </Layout>
  );
}
