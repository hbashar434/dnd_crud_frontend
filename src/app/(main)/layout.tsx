import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";

const MainPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <Navbar />
      <Box mt={10} px={5}>
        {children}
      </Box>
    </Box>
  );
};

export default MainPage;
