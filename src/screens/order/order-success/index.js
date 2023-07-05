import { Button, Heading, Text, VStack } from "native-base";
import Layout from "../../../components/layout";
import Success from '../../../components/success'

export default function OrderSuccessScreen({ navigation }) {
  return (
    <Layout flex={1}>
      <Success>
        <VStack w={'full'} space={8}>
          <VStack space={4}>
            <Heading size={'xs'} textAlign={'center'}>Rental telah dikonfirmasi</Heading>
            <Text textAlign={'center'}>Silahkan jemput kendaraan sesuai dengan tanggal kedatangan.</Text>
            <Text textAlign={'center'} color={"warning.500"}>Pembayaran akan dilakukan ditempat</Text>
            <Text textAlign={'center'} color={"muted.400"}>Jika terlambat order akan hangus dan akun anda akan ditangguhkan hingga dilakukan recovery.</Text>
          </VStack>
          <Button w={"full"} onPress={() => navigation.navigate('Home')}>
            <Text color={"white"}>
              Kembali ke halaman utama
            </Text>
          </Button>
        </VStack>
      </Success>
    </Layout>
  )
}