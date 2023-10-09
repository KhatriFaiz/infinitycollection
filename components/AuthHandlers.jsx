"use client";

import { useContext } from "react";
import { UserContext } from "./AuthProvider";
import { Button } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import Link from "next/link";

const AuthHandlers = () => {
  const user = useContext(UserContext);

  const handleLogout = () => {
    signOut(auth);
  };

  return user ? (
    <Button
      size="small"
      sx={{ border: "1px solid black", cursor: "pointer", color: "black" }}
      onClick={handleLogout}
    >
      Logout
    </Button>
  ) : (
    <>
      <MuiLink
        component={Link}
        href="/signup"
        sx={{
          color: "#000",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Signup
      </MuiLink>
      <MuiLink
        component={Link}
        href="/login"
        sx={{
          color: "#000",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Login
      </MuiLink>
    </>
  );
};

export default AuthHandlers;
