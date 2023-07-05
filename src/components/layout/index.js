import { Box, ScrollView } from "native-base";

export default function Layout(props) {
  return (
    <ScrollView bg={'white'} p={6} showsVerticalScrollIndicator={false} {...props}>
      {props.children}
    </ScrollView>
  )
}