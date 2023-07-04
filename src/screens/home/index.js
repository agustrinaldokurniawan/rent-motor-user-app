import { VStack } from "native-base";
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import HorizontalMotorList from "../../components/list-motor/horizontal";
import TopBarHome from "./components/topBar";

export default function HomeScreen({ navigation }) {
  const dataBanner = [
    {
      title: 'text1'
    },
    {
      title: 'text2'
    },
    {
      title: 'text3'
    }
  ]

  const dataMotor = [
    {
      name: 'Nama Motor',
      rating: '4.5',
      price: 120000,
      duration: 'day'
    },
    {
      name: 'Nama Motor',
      rating: '4.5',
      price: 120000,
      duration: 'day'
    },
    {
      name: 'Nama Motor',
      rating: '4.5',
      price: 120000,
      duration: 'day'
    },
  ]

  return (
    <Layout>
      <VStack space={4}>
        <TopBarHome />
        <Banner data={dataBanner} />
        <HorizontalMotorList data={dataMotor} />
      </VStack>
    </Layout>
  )
}