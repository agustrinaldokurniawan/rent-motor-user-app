import { Box, Button, Center, Heading, Image, Text, ZStack } from "native-base";

export default function OnboardingScreen({ navigation }) {
  const onPressStart = () => {
    navigation.navigate("Login");
  };
  return (
    <Center flex={1}>
      <ZStack h={"100%"} w={"100%"}>
        <Box h={"100%"} w={"100%"}>
          <Image
            source={require("../../assets/images/pexels-gijs-coolen-2549941.jpg")}
            alt="Motor"
            w={"100%"}
            h={"100%"}
            resizeMode="cover"
          />
        </Box>
        <Box h={"100%"} w={"100%"} bg={"muted.900"} opacity={0.3} />
        <Box h={"100%"} w={"100%"} p={4} justifyContent={"space-between"}>
          <Heading color={"white"}>Swift Ride</Heading>
          <Box>
            <Heading size={"3xl"} color={"white"}>
              Siap melaju ke petualangan?
            </Heading>
            <Text color={"white"}>Mulai sewa motor dan jelajahi dunia!</Text>
            <Button onPress={onPressStart} mt={4} py={4} borderRadius={"2xl"}>
              <Heading color={"white"} size={"sm"}>
                Mulai Sekarang
              </Heading>
            </Button>
          </Box>
        </Box>
      </ZStack>
    </Center>
  );
}
