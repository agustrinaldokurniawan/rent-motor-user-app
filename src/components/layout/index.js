import { Box } from "native-base";

export default function Layout({ children }) {
  return (
    <Box bg={'white'} flex={1} px={6}>
      {children}
    </Box>
  )
}