import {
  Button,
  CheckIcon,
  Divider,
  HStack,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "native-base";
import Layout from "../../../components/layout";
import { useEffect, useState } from "react";
import MotorCard from "../../../components/card/motor";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import useOrderApi from "../../../api/order";
import { addMessage } from "@ouroboros/react-native-snackbar";
import { useSelector } from "react-redux";

export default function CreateOrderScreen({ navigation, route }) {
  const { mutationSubmit } = useOrderApi();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const user = useSelector((state) => state.user.value);
  const parsedUser = user && JSON.parse(user);

  const { motor } = route.params;
  const onPressDetail = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (mutationSubmit.isSuccess) {
      navigation.navigate("OrderSuccess");
    }
  }, [mutationSubmit.isSuccess]);

  const [selectedDuration, setSelectedDuration] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState();

  const durationOption = [1, 2, 3, 4, 5];

  const onPressConfirm = () => {
    if (!address) {
      return addMessage({
        text: "Silahkan isi alamat kamu",
        duration: 1000,
      });
    }
    if (!phoneNumber) {
      return addMessage({
        text: "Silahkan isi nomor HP kamu",
        duration: 1000,
      });
    }
    if (!selectedDuration) {
      return addMessage({
        text: "Silahkan pilih durasi peminjaman",
        duration: 1000,
      });
    }
    if (!selectedDate) {
      return addMessage({
        text: "Silahkan pilih tanggal pengambilan",
        duration: 1000,
      });
    }
    const payload = {
      motorName: motor.name,
      duration: selectedDuration,
      pickupDate: selectedDate,
      userEmail: parsedUser.email,
      userName: parsedUser.displayName,
      phoneNumber: phoneNumber,
      address,
      orderNumber: String(Date.now()),
      status: "booked",
    };
    mutationSubmit.mutate(payload);
  };

  const isDisabled =
    !address || !phoneNumber || !selectedDuration || !selectedDate;

  const handleSelectDate = (value) => {
    setSelectedDate(value);
  };

  return (
    <Layout>
      <VStack space={8} pb={12}>
        <Heading>Checkout</Heading>
        <VStack space={2}>
          <Heading size={"sm"}>Detail Motor:</Heading>
          <MotorCard motor={motor} onPress={onPressDetail} />
        </VStack>

        <VStack space={2}>
          <Heading size={"sm"}>Informasi Pelanggan:</Heading>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Nama</Heading>
            <Text>{parsedUser.displayName}</Text>
          </HStack>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Email</Heading>
            <Text>{parsedUser.email}</Text>
          </HStack>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Alamat</Heading>
            <Input
              placeholder="Jalan, Kota"
              maxW={200}
              isRequired
              onChangeText={setAddress}
            />
          </HStack>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"xs"}>Nomor Hp</Heading>
            <Input
              placeholder="Nomor Hp kamu"
              maxW={200}
              isRequired
              onChangeText={setPhoneNumber}
            />
          </HStack>
        </VStack>

        <Divider />

        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Heading size={"xs"}>Durasi</Heading>
          <Select
            selectedValue={selectedDuration}
            minWidth="200"
            accessibilityLabel="Pilih Durasi"
            placeholder="Pilih Durasi"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setSelectedDuration(itemValue)}
          >
            {durationOption.map((item, key) => (
              <Select.Item key={key} label={`${item} hari`} value={item} />
            ))}
          </Select>
        </HStack>

        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <VStack>
            <Heading size={"xs"}>Tanggal Pengambilan</Heading>
            <Text>{moment(selectedDate).format("LLL")}</Text>
          </VStack>
          <Button onPress={() => setShowDatePicker(true)}>Ganti Hari</Button>
        </HStack>

        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="datetime"
          onConfirm={handleSelectDate}
          onCancel={() => setShowDatePicker(false)}
        />

        <Divider />

        <VStack space={2}>
          {selectedDuration || selectedDate ? (
            <Heading size={"sm"}>Ringkasan Order:</Heading>
          ) : (
            ""
          )}

          {selectedDate ? (
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Heading size={"xs"}>Tanggal Pengambilan</Heading>
              <Text>{moment(selectedDate).format("MM/D/YYYY")}</Text>
            </HStack>
          ) : (
            ""
          )}

          {selectedDuration ? (
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Heading size={"xs"}>Jam Pengambilan</Heading>
              <Text>
                {moment(selectedDate).hour()}:{moment(selectedDate).minute()}
              </Text>
            </HStack>
          ) : (
            ""
          )}

          {selectedDuration ? (
            <>
              <HStack justifyContent={"space-between"} alignItems={"center"}>
                <Heading size={"xs"}>Durasi</Heading>
                <Text>{selectedDuration || 0} hari</Text>
              </HStack>
              <HStack justifyContent={"space-between"} alignItems={"center"}>
                <Heading size={"xs"}>Harga harian</Heading>
                <Text>
                  {Number(motor.price)
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "Idr",
                    })
                    .replace(/(,\w).*/g, "")}{" "}
                  / {motor.duration}
                </Text>
              </HStack>
              <HStack justifyContent={"space-between"} alignItems={"center"}>
                <Heading size={"xs"}>Total</Heading>
                <Text>
                  {Number(Number(motor.price) * Number(selectedDuration))
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "Idr",
                    })
                    .replace(/(,\w).*/g, "")}
                </Text>
              </HStack>
            </>
          ) : (
            ""
          )}
        </VStack>

        <Button
          isDisabled={isDisabled}
          borderRadius={"lg"}
          onPress={onPressConfirm}
        >
          Konfirmasi
        </Button>
      </VStack>
    </Layout>
  );
}
