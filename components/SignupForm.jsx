"use client";

import { auth, db } from "@/firebase/config";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupForm = () => {
  const [data, setData] = useState({});
  const router = useRouter();

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (res) => {
        const docRef = await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
        }).then(() => router.push("/"));
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box sx={{ width: "450px", display: "grid", gap: "16px" }}>
      <Typography variant="h4" gutterBottom>
        Signup
      </Typography>
      <TextField
        label="Name"
        variant="standard"
        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
      />
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
        Signup
      </Button>
    </Box>
  );
};

// export default SignupForm;
