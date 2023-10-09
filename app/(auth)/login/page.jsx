import LoginFrom from "@/components/LoginFrom";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginFrom />
    </Box>
  );
};

export default Page;
