"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Divider, Link as MuiLink } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "home", href: "#" },
  { label: "Products", href: "#" },
  { label: "categories", href: "#" },
  { label: "login", href: "#" },
  { label: "signup", href: "#" },
];

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              sx={{
                paddingInline: 1,
                paddingBlock: 2,
                textDecoration: "none",
                color: "#000",
              }}
            >
              {link.label}
            </MuiLink>
            <Divider />
          </Box>
        ))}
      </Drawer>
    </Stack>
  );
};

export default NavDrawer;
