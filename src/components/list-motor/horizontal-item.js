import { Box, HStack, Heading, Text, VStack } from "native-base";
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default function HorizontalMotorListItem({ item }) {
  return (
    <VStack mr={4} borderRadius={"lg"} space={2}>
      <Box bg={"muted.300"} h={'125px'} borderRadius={"lg"} mb={2}>
      </Box>
      <Heading size={"sm"} textTransform={'capitalize'}>{item.name}</Heading>
      <HStack space={2} alignItems={'center'}>
        <EvilIcons name="star" size={24} color={'#FFD700'} />
        <Heading size={"xs"} textTransform={'capitalize'}>{item.rating}</Heading>
      </HStack>
      <Heading size={'xs'} textTransform={'capitalize'}>
        {item.price.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'Idr',
        }).replace(/(,\w).*/g, '')}
      </Heading>
    </VStack>
  )
}