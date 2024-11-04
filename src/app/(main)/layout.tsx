import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";

const MainPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box component="section">
      <Navbar />
      <Box mt={10}>{children}</Box>
    </Box>
  );
};

export default MainPage;
