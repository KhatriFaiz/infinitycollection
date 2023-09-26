import {
  Button,
  Container,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import SearchBox from "./SearchBox";
import NavDrawer from "./NavDrawer";

const Header = () => {
  return (
    <header>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          alignItems="center"
          display="flex"
        >
          Infinity Collection
        </Typography>
        <SearchBox
          BoxSx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        />
        <Stack
          direction="row"
          gap={3}
          alignItems="center"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <MuiLink
            component={Link}
            href="#"
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
            href="#"
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

          <Button
            variant="outlined"
            size="small"
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
            Cart
          </Button>
        </Stack>
        <NavDrawer />
      </Container>
      <Container
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          paddingBlock: 1,
        }}
      >
        <SearchBox fullWidth />
      </Container>
    </header>
  );
};

export default Header;
