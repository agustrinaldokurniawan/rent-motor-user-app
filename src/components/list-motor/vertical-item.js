import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { fetchImageFromFirebase } from "../../utils/fetchImageFromFirebase";
import { useEffect, useState } from "react";

export default function VerticalMotorListItem({ motor, onPress }) {
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl = await fetchImageFromFirebase(motor.image);
      setImage(imageUrl);
    };
    fetchImage();
  }, []);

  return (
    <Pressable onPress={onPress}>
      <VStack space={4}>
        <Box bg={"muted.300"} h={"200px"} borderRadius={"xl"}>
          <Image
            source={{ uri: image }}
            resizeMode="contain"
            bg={"white"}
            width={"100%"}
            height={"100%"}
            alt={motor.name}
          />
          {/* <HStack
            py={2}
            px={4}
            m={2}
            borderRadius={"full"}
            justifyContent={"center"}
            alignItems={"center"}
            alignSelf={"flex-end"}
            position={"absolute"}
            bg={"muted.100"}
          >
            <EvilIcons name="star" size={24} color={"#FFD700"} />
            <Heading size={"xs"}>{motor.rating}</Heading>
          </HStack> */}
        </Box>
        <VStack space={4}>
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <Heading size={"xs"}>{motor.name}</Heading>
            <Text>
              {Number(motor.price)
                .toLocaleString("id-ID", {
                  style: "currency",
                  currency: "Idr",
                })
                .replace(/(,\w).*/g, "")}{" "}
              / {motor.duration}
            </Text>
          </HStack>
          <HStack space={6} alignItems={"center"}>
            <HStack alignItems={"center"} space={2}>
              <Icon
                as={<MaterialCommunityIcons name="speedometer" />}
                color={"muted.400"}
                size={6}
              />
              <Text color={"muted.400"}>{motor.production}</Text>
            </HStack>
            <HStack alignItems={"center"} space={2}>
              <Icon
                as={<MaterialCommunityIcons name="engine-outline" />}
                color={"muted.400"}
                size={6}
              />
              <Text color={"muted.400"}>{motor.type}</Text>
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </Pressable>
  );
}
