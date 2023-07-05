import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Heading, Image, Pressable, Text, VStack } from "native-base";
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default function HorizontalMotorListItem({ item }) {
  const navigation = useNavigation()
  const onPressDetail = () => {
    navigation.navigate('DetailMotor', {
      motor: item
    })
  }
  return (
    <Pressable onPress={onPressDetail}>
      <VStack mr={4} borderRadius={"lg"} space={2}>
        <Box bg={"muted.300"} h={'125px'} borderRadius={"lg"} mb={2}>
          <Image
            source={{ uri: item.image[0] }}
            alt={item.name}
            width={'100%'}
            height={'100%'}
            resizeMode="contain"
            bg={"white"}
          />
        </Box>
        <Heading numberOfLines={1} size={"sm"} textTransform={'capitalize'}>{item.name}</Heading>
        <HStack space={2} alignItems={'center'}>
          <EvilIcons name="star" size={24} color={'#FFD700'} />
          <Text textTransform={'capitalize'}>{item.rating}</Text>
        </HStack>
        <Text textTransform={'capitalize'}>
          {Number(item.price).toLocaleString('id-ID', {
            style: 'currency',
            currency: 'Idr',
          }).replace(/(,\w).*/g, '')}
        </Text>
      </VStack>
    </Pressable>
  )
}