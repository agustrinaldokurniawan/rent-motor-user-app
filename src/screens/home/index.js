import { Text, VStack } from "native-base";
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import HorizontalMotorList from "../../components/list-motor/horizontal";
import TopBarHome from "./components/topBar";
import { listMotorApi } from "../../api/motor";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const dataBanner = [
    {
      title: 'Selamat Datang',
      image: require('../../assets/images/banner1.png')
    },
    {
      title: 'Online Payment',
      image: require('../../assets/images/banner2.png')
    },
  ]

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log({ status })
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const { listMotor } = listMotorApi()

  return (
    <Layout>
      <VStack space={4}>
        <TopBarHome location={location} />
        <Banner data={dataBanner} />
        <HorizontalMotorList data={listMotor} />
      </VStack>
    </Layout>
  )
}