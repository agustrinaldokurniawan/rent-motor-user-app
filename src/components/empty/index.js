import { VStack } from "native-base";
import Lottie from 'lottie-react-native'

export default function Empty(props) {
  return (
    <VStack {...props} alignItems={'center'}>
      <Lottie
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../../assets/lotties/93134-not-found.json')}
      />
      {props.children}
    </VStack>
  )
}