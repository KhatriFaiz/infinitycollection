"use client";

import Image from "next/image";
import product1 from "@/public/product1.jpg";
import product2 from "@/public/product2.jpg";
import product3 from "@/public/product3.jpg";
import product4 from "@/public/product4.jpg";
import { useState } from "react";
import { Box, Stack, Grid } from "@mui/material";

const ProductImages = () => {
  const images = [
    { imageSrc: product1, alt: "Product of ecommerce website" },
    { imageSrc: product2, alt: "Product of ecommerce website" },
    { imageSrc: product3, alt: "Product of ecommerce website" },
    { imageSrc: product4, alt: "Product of ecommerce website" },
    { imageSrc: product2, alt: "Product of ecommerce website" },
  ];
  const [activeImage, setactiveImage] = useState(images[0]);

  const handleImageChange = (index) => {
    setactiveImage(images[index]);
  };

  return (
    <Box>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Image
          src={activeImage.imageSrc}
          alt={activeImage.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        ></Image>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={1}>
          {images.map((item, index) => (
            <Grid
              item
              xs={3}
              sx={{ aspectRatio: 1 }}
              key={index}
              onClick={() => handleImageChange(index)}
            >
              <Image
                src={item.imageSrc}
                alt={item.alt}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductImages;
