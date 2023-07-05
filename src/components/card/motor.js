import { Box, HStack, Heading, Image, Pressable, Text, VStack } from "native-base"

export default function MotorCard(props) {
  const { motor, onPress } = props

  return (
    <Pressable onPress={onPress} {...props}>
      <HStack m={1} p={4} borderRadius={"lg"} shadow={2} bg={'white'} justifyContent={'space-between'} alignItems={'center'}>
        <VStack space={2}>
          <Heading size={"xs"}>{motor.name}</Heading>
          <Text>
            {Number(motor.price).toLocaleString('id-ID', {
              style: 'currency',
              currency: 'Idr',
            }).replace(/(,\w).*/g, '')} / {motor.duration}
          </Text>
        </VStack>
        <Box w={'100px'} h={'100px'}>
          <Image
            source={{ uri: motor.image[0] }}
            alt={motor.name}
            height={'100%'}
            width={'100%'}
          />
        </Box>
      </HStack>
    </Pressable>
  )
}