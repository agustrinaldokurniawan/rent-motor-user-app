import { HStack, Heading, Icon, IconButton, VStack } from "native-base";

import EvilIcons from 'react-native-vector-icons/EvilIcons'
import useLocationApi from "../../../api/location";
import { useEffect, useState } from "react";

export default function TopBarHome(props) {
  const [city, setCity] = useState('Gps bermasalah')

  const { location } = props

  const { data } = useLocationApi(location?.coords)

  useEffect(() => {
    if (data?.features) {
      setCity(data.features[0].properties.city)
    }
  }, [location])

  return (
    <HStack justifyContent={'space-between'} {...props}>
      <VStack>
        <HStack alignItems={'center'} space={4}>
          <Heading size={"xs"}>Lokasi kamu</Heading>
          <EvilIcons name="chevron-down" size={32} />
        </HStack>
        <Heading size={"sm"}>{city}</Heading>
      </VStack>
      <HStack>
        <IconButton icon={<Icon as={EvilIcons} name='bell' size={8} color={"black"} />} />
      </HStack>
    </HStack>
  )
}