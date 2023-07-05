import { Image } from "native-base";
import { useState } from "react";
import { Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

export default function SlideImages({ images }) {
  const [state, setState] = useState({ activeSlide: 0 })

  const ImageItem = ({ item, index }) => {
    return (
      <Image
        source={{ uri: item }}
        alt="Motor"
        w={'100%'}
        h={'100%'}
        resizeMode="contain"
        bg={'white'}
      />
    )
  }
  return (
    <>
      <Carousel
        ref={(c) => this._carousel = c}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width}
        renderItem={ImageItem}
        data={images}
        onSnapToItem={(index) => setState({ activeSlide: index })}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={state.activeSlide}
        dotStyle={{
          width: 30,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#FF5F00'
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        containerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 0,
          paddingHorizontal: 0,
          backgroundColor: 'white'
        }}
      />
    </>
  )
}