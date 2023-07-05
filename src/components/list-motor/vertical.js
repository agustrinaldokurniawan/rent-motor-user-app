import { VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import VerticalMotorListItem from "./vertical-item";

export default function VerticalMotorList({ motor }) {
  const navigation = useNavigation()
  const onPressDetail = (item) => {
    navigation.navigate('DetailMotor', {
      motor: item
    })
  }

  return (
    <VStack space={8}>
      {
        motor.map((item, key) => (
          <VerticalMotorListItem key={key} motor={item} onPress={() => {
            onPressDetail(item)
          }} />
        ))
      }
    </VStack>
  )
}