import { Box } from "@chakra-ui/react"
import { FC } from "react"
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box height="100vh" width="100%">
      <Navbar />
      {children}
    </Box>
  )
}

export default Layout
