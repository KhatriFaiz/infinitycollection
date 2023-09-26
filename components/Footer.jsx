import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import Link from "next/link";

const links = [
  {
    label: "Popular Categories",
    links: [
      { label: "Men", href: "#" },
      { label: "Women", href: "#" },
      { label: "Kids", href: "#" },
      { label: "Family", href: "#" },
    ],
  },
  {
    label: "Help",
    links: [
      { label: "Delivery", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Secure Payments", href: "#" },
      { label: "Track an order", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
  {
    label: "About",
    links: [
      { label: "Careers", href: "#" },
      { label: "Terms & conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Responsibility", href: "#" },
    ],
  },
  {
    label: "Feedback",
    links: [{ label: "Leave Feedback", href: "#" }],
  },
];

const Footer = () => {
  return (
    <Box component="footer">
      <Container sx={{ paddingBlock: 8 }}>
        <Grid container spacing={3}>
          {links.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.label}>
              <Stack direction="column">
                <Typography variant="h6" gutterBottom>
                  {item.label}
                </Typography>
                {item.links.map((link) => (
                  <MuiLink
                    component={Link}
                    href={link.href}
                    sx={{
                      textDecoration: "none",
                      paddingBottom: 2,
                      color: "gray",
                    }}
                    key={link.label}
                  >
                    {link.label}
                  </MuiLink>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
