import { Button, CheckIcon, Divider, HStack, Heading, Select, Text, VStack } from "native-base";
import Layout from "../../../components/layout";
import { useState } from "react";
import MotorCard from "../../../components/card/motor";
import UserInformation from "../components/user-information";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import moment from 'moment'

export default function CreateOrderScreen({ navigation, route }) {
  const { motor } = route.params
  const onPressDetail = () => {
    navigation.goBack()
  }

  const [selectedDuration, setSelectedDuration] = useState()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedHour, setSelectedHour] = useState(new Date())

  const durationOption = [1, 2, 3, 4, 5]

  const onPressConfirm = () => {
    navigation.navigate('OrderSuccess')
  }

  const onPressSelectDate = () => {
    DateTimePickerAndroid.open({
      value: selectedDate,
      minimumDate: new Date(),
      onChange: setSelectedDate,
      mode: 'date'
    })
  }

  const onPressSelectHour = () => {
    DateTimePickerAndroid.open({
      value: selectedHour,
      minimumDate: new Date(),
      onChange: setSelectedHour,
      mode: 'time'
    })
  }

  return (
    <Layout>
      <VStack space={8} pb={12}>
        <Heading>Checkout</Heading>
        <VStack space={2}>
          <Heading size={"sm"}>
            Detail Motor:
          </Heading>
          <MotorCard motor={motor} onPress={onPressDetail} />
        </VStack>

        <UserInformation />

        <Divider />

        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Heading size={"xs"}>Durasi</Heading>
          <Select
            selectedValue={selectedDuration}
            minWidth="200" accessibilityLabel="Pilih Durasi" placeholder="Pilih Durasi"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setSelectedDuration(itemValue)}>
            {
              durationOption.map((item, key) => (
                <Select.Item key={key} label={`${item} hari`} value={item} />
              ))
            }
          </Select>
        </HStack>


        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Heading size={"xs"}>Tanggal Pengambilan</Heading>
          <Button onPress={onPressSelectDate}>Ganti Hari</Button>
        </HStack>


        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Heading size={"xs"}>Jam Pengambilan</Heading>
          <Button onPress={onPressSelectHour}>Ganti Jam</Button>
        </HStack>

        <Divider />


        <VStack space={2}>
          {
            (selectedDuration || selectedDate || selectedHour)
              ?
              <Heading size={"sm"}>
                Ringkasan Order:
              </Heading>
              : ""
          }

          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <Heading size={"xs"}>Tanggal Pengambilan</Heading>
            <Text>{moment(selectedDate).format('MM/D/YYYY')}</Text>
          </HStack>

          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <Heading size={"xs"}>Jam Pengambilan</Heading>
            <Text>{moment(selectedHour).hour()}:{moment(selectedHour).minute()}</Text>
          </HStack>

          {
            selectedDuration
              ?
              <>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                  <Heading size={"xs"}>Durasi</Heading>
                  <Text>{selectedDuration || 0} hari</Text>
                </HStack>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                  <Heading size={"xs"}>Harga harian</Heading>
                  <Text>
                    {Number(motor.price).toLocaleString('id-ID', {
                      style: 'currency',
                      currency: 'Idr',
                    }).replace(/(,\w).*/g, '')} / {motor.duration}
                  </Text>
                </HStack>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                  <Heading size={"xs"}>Total</Heading>
                  <Text>
                    {Number(Number(motor.price) * Number(selectedDuration)).toLocaleString('id-ID', {
                      style: 'currency',
                      currency: 'Idr',
                    }).replace(/(,\w).*/g, '')}
                  </Text>
                </HStack>
              </>
              : ''
          }
        </VStack>

        <Button isDisabled={!selectedDuration} borderRadius={"lg"} onPress={onPressConfirm}>Konfirmasi</Button>
      </VStack>
    </Layout>
  )
}