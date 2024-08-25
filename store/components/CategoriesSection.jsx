import CategoryCard from "./CategoryCard";

import cap from "@/public/cap.jpg";
import jeans from "@/public/jeans.jpg";
import shirt from "@/public/shirt.jpg";
import tshirt from "@/public/tshirt.jpg";
import shoes from "@/public/shoes.jpg";

const categories = [
  { title: "Cap", image: cap },
  { title: "Jeans", image: jeans },
  { title: "Shirt", image: shirt },
  { title: "T-Shirt", image: tshirt },
  { title: "Shoes", image: shoes },
];

const CategoriesSection = () => {
  return (
    <section>
      <div className="py-10 w-full max-w-screen-xl px-5 md:px-16 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category, index) => (
          <CategoryCard key={index} data={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
