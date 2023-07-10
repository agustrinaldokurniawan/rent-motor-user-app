import { Box, Icon, Input, Pressable, Text, VStack } from "native-base";
import Layout from "../../components/layout";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { listMotor } from "../../api/motor";
import VerticalMotorList from "../../components/list-motor/vertical";
import { useEffect, useState } from "react";
import Empty from "../../components/empty";

export default function MotorScreen({ navigation }) {
  const [keyword, setKeyword] = useState("");
  const [motors, setMotors] = useState([]);
  const [filteredMotor, setFilteredMotor] = useState([]);
  const { data, error, isLoading } = listMotor();

  useEffect(() => {
    if (data) {
      setMotors(data);
    }
  }, [data]);

  useEffect(() => {
    const filtered = motors.filter((item) =>
      JSON.stringify(motors)
        .toLocaleLowerCase()
        .includes(keyword.toLocaleLowerCase())
    );
    setFilteredMotor(filtered);
  }, [keyword]);

  return (
    <Layout>
      <VStack space={8} pb={12}>
        <Input
          InputLeftElement={
            <Icon
              as={<EvilIcons name="search" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Yamaha Mio"
          borderRadius={"xl"}
          onChangeText={setKeyword}
          value={keyword}
          InputRightElement={
            <Pressable
              onPress={() => {
                setKeyword("");
              }}
            >
              <Icon
                as={<EvilIcons name="close" />}
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
        <VerticalMotorList motor={keyword ? filteredMotor : motors} />
        {keyword && !filteredMotor.length ? (
          <Empty>
            <Text color={"muted.400"}>Tidak ada motor yang tersedia.</Text>
            <Text color={"muted.400"}>
              Silahkan masukkan kata kunci yang lain.
            </Text>
          </Empty>
        ) : (
          ""
        )}
      </VStack>
    </Layout>
  );
}
