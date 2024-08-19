import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import "../app/styles/tailwind.css";

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ discountPrice = null, title, image, price, slug }) => {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <CardActionArea component={Link} href={`/product/${slug}`}>
        <CardMedia
          sx={{
            height: "300px",
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={image}
            style={{
              width: "100%",
              objectFit: "contain",
              objectPosition: "center",
              height: "100%",
            }}
            fill
            alt="products of this website"
          />
        </CardMedia>
        <CardContent sx={{ marginTop: 1 }}>
          <Typography
            gutterBottom
            variant="body"
            fontWeight={700}
            component="div"
          >
            {title}
          </Typography>
          {discountPrice ? (
            <>
              <div className="flex items-end gap-1">
                <span className="inline-block text-lg font-semibold bg-pink-600 rounded-lg px-1 text-white">
                  ₹{discountPrice}
                </span>
                <span className="inline-block text-base line-through opacity-60">
                  ₹{price}
                </span>
              </div>
            </>
          ) : (
            <span className="inline-block text-lg font-semibold bg-pink-600 rounded-lg px-1 text-white">
              ₹{price}
            </span>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
