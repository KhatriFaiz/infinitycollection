import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Image from "next/image";
import product from "@/public/product.jpg";
import Link from "next/link";
import { Typography } from "@mui/material";

const ProductCard = ({ discountPrice = null, title, image, price }) => {
  return (
    <Card sx={{ boxShadow: "none", border: "1px solid #eee" }}>
      <CardActionArea component={Link} href="#">
        <CardMedia sx={{ height: "300px", width: "100%" }}>
          <Image
            src={image}
            style={{
              width: "100%",
              objectFit: "contain",
              objectPosition: "center",
              height: "100%",
            }}
            alt="products of this website"
          />
        </CardMedia>
        <CardContent sx={{ marginTop: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          {discountPrice ? (
            <>
              <Typography
                variant="subtitle1"
                component="span"
                color="text.secondary"
                paddingRight={2}
                sx={{
                  textDecoration: "line-through",
                }}
              >
                {price}
              </Typography>
              <Typography
                variant="subtitle1"
                component="span"
                color="text.secondary"
                sx={{ marginTop: "auto", display: "inline-block" }}
              >
                {discountPrice}
              </Typography>
            </>
          ) : (
            <Typography
              variant="subtitle1"
              component="span"
              color="text.secondary"
              sx={{ marginTop: "auto", display: "inline-block" }}
            >
              {price}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
