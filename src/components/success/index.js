import { VStack } from "native-base";
import Lottie from 'lottie-react-native'

export default function Success(props) {
  return (
    <VStack {...props} alignItems={'center'}>
      <Lottie
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../../assets/lotties/96295-success-popup.json')}
      />
      {props.children}
    </VStack>
  )
}