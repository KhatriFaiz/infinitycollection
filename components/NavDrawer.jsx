"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { ButtonBase, Divider } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "./AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

const navLinks = [
  { label: "home", href: "#" },
  { label: "Products", href: "#" },
  { label: "categories", href: "#" },
];

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useContext(UserContext);
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Stack
      alignItems="center"
      direction="row"
      sx={{
        display: {
          xs: "flex",
          md: "none",
        },
      }}
    >
      <Button
        variant="outlined"
        size="small"
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          border: "1px solid #000",
          background: "#fff",
          color: "#000",
          "&:hover": {
            color: "#fff",
            background: "#000",
            border: "1px solid #000",
          },
        }}
      >
        Menu
      </Button>
      <Drawer
        anchor="left"
        sx={{ minWidth: "300px" }}
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        PaperProps={{
          sx: { minWidth: "230px" },
        }}
        disableScrollLock
      >
        {navLinks.map((link) => (
          <Box key={link.label}>
            <MuiLink
              component={Link}
              href={link.href}
              underline="none"
              sx={{
                paddingInline: 1,
                paddingBlock: 2,
                display: "inline-block",
                color: "#000",
              }}
            >
              {link.label}
            </MuiLink>
            <Divider />
          </Box>
        ))}
        <Box
          sx={{
            paddingInline: 1,
            paddingBlock: 2,
            display: "inline-block",
          }}
        >
          {user ? (
            <ButtonBase
              sx={{ padding: "8px 16px", border: "1px solid black" }}
              onClick={handleLogout}
            >
              Logout
            </ButtonBase>
          ) : (
            <>
              <ButtonBase
                component={Link}
                href="/login"
                sx={{
                  padding: "8px 16px",
                  border: "1px solid black",
                  marginRight: 2,
                }}
              >
                Login
              </ButtonBase>
              <ButtonBase
                component={Link}
                href="/signup"
                sx={{ padding: "8px 16px", border: "1px solid black" }}
              >
                Signup
              </ButtonBase>
            </>
          )}
        </Box>
      </Drawer>
    </Stack>
  );
};

export default NavDrawer;
