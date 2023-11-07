"use client";

import { auth } from "@/firebase/config";
import { Box, Button, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginFrom = () => {
  const [data, setData] = useState({});
  const router = useRouter();

  const handleSubmit = async () => {
    const res = signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    ).then((res) => {
      if (res.user.uid) {
        router.push("/");
      }
    });
  };

  return (
    <Box sx={{ width: "450px", display: "grid", gap: "16px" }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        variant="standard"
        onChange={(e) =>
          setData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <TextField
        label="password"
        type="password"
        variant="standard"
        onChange={(e) =>
          setData((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <Button
        variant="contained"
        sx={{ marginTop: "24px" }}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
};

// export default LoginFrom;
