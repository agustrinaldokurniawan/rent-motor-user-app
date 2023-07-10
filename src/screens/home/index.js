import { VStack } from "native-base";
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import HorizontalMotorList from "../../components/list-motor/horizontal";
import TopBarHome from "./components/topBar";
import { listMotor } from "../../api/motor";
import { useEffect, useState } from "react";
import useLocationApi from "../../api/location";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const [city, setCity] = useState();
  const location = useSelector((state) => state.location.value);

  const dataBanner = [
    {
      title: "Selamat Datang",
      image: require("../../assets/images/banner1.png"),
    },
    {
      title: "Online Payment",
      image: require("../../assets/images/banner2.png"),
    },
  ];

  const { data: locationDetail, isLoading: locationLoading } = useLocationApi({
    longitude: location?.coords?.longitude,
    latitude: location?.coords?.latitude,
  });

  useEffect(() => {
    if (locationDetail) {
      setCity(locationDetail.features[0].properties.city);
    }
  }, [locationDetail]);

  const { data: motors, error, isLoading } = listMotor();

  return (
    <Layout>
      <VStack space={4}>
        <TopBarHome city={city} />
        <Banner data={dataBanner} />
        <HorizontalMotorList data={motors} />
      </VStack>
    </Layout>
  );
}
