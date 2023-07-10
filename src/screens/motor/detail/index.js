import { Box, Button, HStack, Heading, Text, VStack } from "native-base";
import Layout from "../../../components/layout";
import SlideImages from "../components/slide-images";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchImageFromFirebase } from "../../../utils/fetchImageFromFirebase";

export default function DetailMotorScreen({ navigation, route }) {
  const user = useSelector((state) => state.user.value);
  const [image, setImage] = useState();

  const { motor } = route.params;
  const onPressCreateOrder = () => {
    if (!user) {
      navigation.navigate("Login");
    } else {
      navigation.navigate("CreateOrder", {
        motor,
      });
    }
  };
  useEffect(() => {
    const fetchImage = async () => {
      const imageUri = await fetchImageFromFirebase(motor.image);
      setImage(imageUri);
    };
    fetchImage();
  }, []);
  return (
    <VStack space={8} bg={"white"} h={"100%"}>
      <Box h={"250px"}>
        <SlideImages images={[image]} />
      </Box>
      <Layout>
        <VStack space={4}>
          <Heading>{motor.name}</Heading>
          <Heading size={"sm"}>Deskripsi:</Heading>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Merk</Heading>
            <Text>{motor.production}</Text>
          </HStack>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Transmisi</Heading>
            <Text>{motor.type}</Text>
          </HStack>
        </VStack>
      </Layout>
      <Box bottom={0} borderTopRadius={"3xl"} bg={"white"} shadow={9}>
        <HStack m={6} justifyContent={"space-between"} alignItems={"center"}>
          <VStack>
            <Heading size={"xs"}>{motor.name}</Heading>
            <Heading size={"xs"}>
              {Number(motor.price)
                .toLocaleString("id-ID", {
                  style: "currency",
                  currency: "Idr",
                })
                .replace(/(,\w).*/g, "")}{" "}
              / {motor.duration}
            </Heading>
          </VStack>
          <Button p={4} borderRadius={"lg"} onPress={onPressCreateOrder}>
            Rental Sekarang
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
