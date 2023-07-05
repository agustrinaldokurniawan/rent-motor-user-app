import { VStack } from "native-base";
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import HorizontalMotorList from "../../components/list-motor/horizontal";
import TopBarHome from "./components/topBar";
import { listMotorApi } from "../../api/motor";

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

  const { listMotor } = listMotorApi()

  return (
    <Layout>
      <VStack space={4}>
        <TopBarHome />
        <Banner data={dataBanner} />
        <HorizontalMotorList data={listMotor} />
      </VStack>
    </Layout>
  )
}