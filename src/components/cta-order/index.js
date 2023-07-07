import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import { Button, Center, Text, VStack } from "native-base";

export default function CTAOrder() {
  const navigation = useNavigation()
  return (
    <Center>
      <VStack space={4}>
        <AnimatedLottieView
          source={require('../../assets/lotties/93134-not-found.json')}
          style={{
            width: 200,
            height: 200
          }}
        />
        <Text textAlign={'center'}>Kamu belum rental motor</Text>
        <Button onPress={() => navigation.navigate('Motor')}>
          Mulai rental motor
        </Button>
      </VStack>
    </Center>
  )
}