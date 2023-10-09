import SignupForm from "@/components/SignupForm";
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
      <SignupForm />
    </Box>
  );
};

export default Page;
