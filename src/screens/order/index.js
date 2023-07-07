import { Box, Icon, Input, Pressable, Text, VStack } from "native-base";
import Layout from "../../components/layout";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { listMotorApi } from "../../api/motor";
import VerticalMotorList from "../../components/list-motor/vertical";
import { useState } from "react";
import Empty from "../../components/empty";
import useAuth from "../../auth";
import CTALogin from "../../components/cta-login";
import CTAOrder from "../../components/cta-order";

export default function OrderScreen({ navigation }) {
  const [keyword, setKeyword] = useState('')
  const { listMotor } = listMotorApi({ keyword })
  const [order, setOrder] = useState([])

  const { getUser } = useAuth()

  if (!getUser()) {
    return (
      <Layout>
        <CTALogin />
      </Layout>
    )
  }

  if (!order.length) {
    return (
      <Layout>
        <CTAOrder />
      </Layout>
    )
  }

  return (
    <Layout>
      <VStack space={8} pb={12}>
        <Input
          InputLeftElement={<Icon as={<EvilIcons name="search" />} size={5} ml="2" color="muted.400" />}
          placeholder="Nomor Order"
          borderRadius={'xl'}
          onChangeText={setKeyword}
          value={keyword}
          InputRightElement={
            <Pressable onPress={() => {
              setKeyword('')
            }}>
              <Icon as={<EvilIcons name="close" />} size={5} mr="2" color="muted.400" />
            </Pressable>
          }
        />
        {
          listMotor.length
            ? <VerticalMotorList motor={listMotor} />
            : <Empty>
              <Text color={"muted.400"}>Tidak ada motor yang tersedia.</Text>
              <Text color={"muted.400"}>Silahkan masukkan kata kunci yang lain.</Text>
            </Empty>
        }
      </VStack>
    </Layout>
  )
}