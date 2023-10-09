import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

//Product Images
import product1 from "@/public/product1.jpg";
import product2 from "@/public/product2.jpg";
import product3 from "@/public/product3.jpg";
import product4 from "@/public/product4.jpg";
import shoes1 from "@/public/shoes1.jpg";
import shoes2 from "@/public/shoes2.jpg";
import shoes3 from "@/public/shoes3.jpg";
import shoes4 from "@/public/shoes4.jpg";
import shoes5 from "@/public/shoes5.jpg";
import ProductGrid from "./ProductGrid";

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
  {
    title: "Sparx Mens Sm-675 Running Shoe",
    image: shoes1,
    price: "₹" + 999,
    discountPrice: "₹" + 720,
  },
  {
    title: "ASIAN Men's Wonder-13 Sports Running Shoes",
    image: shoes2,
    price: "₹" + 699,
    discountPrice: "₹" + 599,
  },
  {
    title: "Campus Mens Shuttle Walking Shoe",
    image: shoes3,
    price: "₹" + 1099,
    discountPrice: "₹" + 660,
  },
  {
    title:
      "ASIAN Men's Tarzan-11 White Casual Sneaker High-Neck Shoes with Lightweight Extra Cushion Lace-Up Shoes for Men's & Boy's",
    image: shoes4,
    price: "₹" + 999,
    discountPrice: "₹" + 599,
  },
  {
    title: "Adidas Men's Drogo M Running Shoes",
    image: shoes5,
    price: "₹" + 2999,
    discountPrice: "₹" + 1399,
  },
];

const ProductsSection = () => {
  return (
    <Box component="section">
      <Container sx={{ paddingBlock: 8 }}>
        <Typography
          component="h2"
          variant="h4"
          textAlign={"center"}
          sx={{ marginBottom: 4 }}
          gutterBottom
        >
          Latest Products
        </Typography>
        <ProductGrid products={products} />
      </Container>
    </Box>
  );
};

export default ProductsSection;
