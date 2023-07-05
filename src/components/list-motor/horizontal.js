import Carousel from 'react-native-reanimated-carousel'
import { Dimensions } from 'react-native';
import { Box, HStack, Heading, Pressable, Text } from 'native-base';
import HorizontalMotorListItem from './horizontal-item';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

export default function HorizontalMotorList({ data }) {
  const navigation = useNavigation()

  return (
    <Box my={4}>
      <HStack justifyContent={'space-between'} mb={4}>
        <Heading size={'sm'}>Motor pilihan</Heading>
        <Pressable onPress={() => navigation.navigate('Motor')}>
          <Text>Lihat semua</Text>
        </Pressable>
      </HStack>
      <GestureHandlerRootView>
        <Carousel
          vertical={false}
          width={Dimensions.get('window').width * 0.50}
          height={250}
          style={{ width: '100%' }}
          data={data}
          renderItem={({ item }) => <HorizontalMotorListItem item={item} />}
        />
      </GestureHandlerRootView>
    </Box>
  )
}