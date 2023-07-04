import Carousel from 'react-native-reanimated-carousel'
import { Dimensions } from 'react-native';
import { Box, HStack, Heading, Pressable, Text, VStack } from 'native-base';
import { useState } from 'react';
import HorizontalMotorListItem from './horizontal-item';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HorizontalMotorList({ data }) {
  return (
    <Box my={8}>
      <HStack justifyContent={'space-between'} mb={4}>
        <Heading size={'sm'}>Motor pilihan</Heading>
        <Pressable>
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