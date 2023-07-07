import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import { Button, Center, VStack } from "native-base";

export default function CTALogin() {
  const navigation = useNavigation()
  return (
    <Center>
      <VStack>
        <AnimatedLottieView
          source={require('../../assets/lotties/129750-login-orange.json')}
          style={{
            width: 200,
            height: 200
          }}
        />
        <Button onPress={() => navigation.navigate('Login')}>
          Login untuk melanjutkan
        </Button>
      </VStack>
    </Center>
  )
}