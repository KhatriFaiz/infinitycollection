import ProductGrid from "@/components/ProductGrid";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import product1 from "@/public/product1.jpg";
import product2 from "@/public/product2.jpg";
import product3 from "@/public/product3.jpg";
import product4 from "@/public/product4.jpg";
import ProductImages from "@/components/ProductImages";

const products = [
  {
    title: "Van Heusen Men's Regular Fit Polo Shirt",
    image: product1,
    price: "₹" + 1099,
    discountPrice: "₹" + 589,
  },
  {
    title:
      "Lux Cozi Men's Regular Fit Polo Neck Half Sleeve Soild Casual T-Shirt | Polo T-Shirt for Men",
    image: product2,
    price: "₹" + 380,
    discountPrice: "₹" + 375,
  },
  {
    title: "Max Men's Solid Slim Fit Polo T-Shirt",
    image: product3,
    price: "₹" + 499,
    discountPrice: "₹" + 469,
  },
  {
    title: "Lymio Men T-Shirt, Plain T Shirt",
    image: product4,
    price: "₹" + 499,
    discountPrice: "₹" + 349,
  },
];

const Page = () => {
  return (
    <main>
      <Container sx={{ paddingBlock: 5 }}>
        <Grid container spacing={5} marginBottom={8}>
          <Grid item lg={6}>
            <ProductImages />
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Sparx Mens Sm-675 Running Shoe
            </Typography>
            <Typography variant="h5" paragraph gutterBottom>
              ₹999
            </Typography>
            <Stack direction="row" spacing={2} paddingY={3}>
              <Button fullWidth variant="contained">
                Buy Now
              </Button>
              <Button fullWidth variant="outlined">
                Add to Cart
              </Button>
            </Stack>
            <Typography variant="h6" component="h3" gutterBottom>
              Descripiton
            </Typography>
            <Typography paragraph gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              blanditiis impedit cumque harum fugit debitis quam voluptatem
              excepturi. Possimus, unde.
            </Typography>
          </Grid>
        </Grid>
        <Box component="section" paddingY={5}>
          <Typography variant="h4" component="h3" gutterBottom>
            More from the brand
          </Typography>
          <ProductGrid products={products} />
        </Box>
      </Container>
    </main>
  );
};

export default Page;
