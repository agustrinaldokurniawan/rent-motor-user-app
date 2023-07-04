import { Box, ScrollView } from "native-base";

export default function Layout({ children }) {
  return (
    <ScrollView bg={'white'} flex={1} p={6} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  )
}