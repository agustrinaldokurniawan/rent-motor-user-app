import Carousel, { Pagination } from 'react-native-snap-carousel'
// import BannerItem from './item'
import { Dimensions } from 'react-native';
import { Box, Heading, VStack } from 'native-base';
import { useState } from 'react';

export default function Banner({ data }) {
  const [state, setState] = useState({ activeSlide: 0 })

  const BannerItem = ({ item, index }) => {
    return (
      <VStack bg={'white'} borderRadius={"lg"} space={4}>
        <Box bg={'muted.300'} h={'200px'} borderRadius={"lg"}>
        </Box>
        <Heading size={"xs"} color={'black'} textTransform={'capitalize'}>{item.title}</Heading>
      </VStack>
    )
  }

  return (
    <VStack space={4}>
      <Carousel
        ref={(c) => this._carousel = c}
        sliderWidth={Dimensions.get('window').width * 0.87}
        itemWidth={Dimensions.get('window').width * 0.87}
        renderItem={BannerItem}
        data={data}
        onSnapToItem={(index) => setState({ activeSlide: index })}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={state.activeSlide}
        dotStyle={{
          width: 30,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        containerStyle={{
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingVertical: 0,
          paddingHorizontal: 0
        }}
      />
    </VStack>
  )
}