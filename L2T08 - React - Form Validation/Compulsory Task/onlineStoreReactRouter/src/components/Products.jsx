import { useState } from "react";
import ProductCard from "./ProductCard";
import TotalPrice from "./TotalPrice";

// Our products
const products = [
  {
    name: "Spoon",
    description: "Wooden Spoon made from the finest oak",
    price: 1,
    img: "https://m.media-amazon.com/images/I/61moD4yrLOL.jpg",
  },
  {
    name: "Fork",
    description: "Metal Fork 100% stainless steel",
    price: 1,
    img: "https://m.media-amazon.com/images/I/61z0LVrrowL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Knife",
    description: "Plastic Knife 100% germ free",
    price: 1,
    img: "https://www.beaucare.com/storage/uploads/images/1291/product-hero_plastic_knife_-_white_-_pack_of_1000.jpg",
  },
  {
    name: "Spork",
    description: "Metal Spork made from titanium",
    price: 1,
    img: "https://m.media-amazon.com/images/I/81H7YgQZjiL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Plate",
    description: "Plastic Plate, totally unbreakable",
    price: 2,
    img: "https://raven.contrado.app/resources/images/2017-12/75876/melamine-plastic-plate-design-reverse-side-208618_l.jpg",
  },
  {
    name: "Cup",
    description: "Clay Cup made by hand",
    price: 2,
    img: "https://www.minimax.com.au/cdn/shop/products/dwell-340ml-clay-mug-985663.jpg?v=1631892087",
  },
  {
    name: "Bowl",
    description: "Wooden Bowl made from pine",
    price: 2,
    img: "https://www.ikea.com/gb/en/images/products/blanda-matt-serving-bowl-bamboo__0711988_pe728640_s5.jpg",
  },
  {
    name: "Mug",
    description: "Metal Mug with 5 year guarantee",
    price: 3,
    img: "https://m.media-amazon.com/images/I/61SJPoBcisL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Ladle",
    description: "Metal Ladle, can handle any heat",
    price: 4,
    img: "https://m.media-amazon.com/images/I/61nM4lieuzL.jpg",
  },
  {
    name: "Glass",
    description: "Crystal Glass that's dishwasher safe",
    price: 5,
    img: "https://api-prod.royaldesign.se/api/products/image/6/koziol-crystal-glass-l-0",
  },
];

export default function Products() {
  const [totalPrice, setTotalPrice] = useState(
    Number(localStorage.getItem("localPrice"))
  );

  // Use localStorage
  const [localPrice, setLocalPrice] = useState(
    Number(localStorage.getItem("localPrice"))
  );

  // Update total price
  const updateTotalPrice = (price) => {
    setTotalPrice(totalPrice + price);
    setLocalPrice(localPrice + price);
    localStorage.setItem("localPrice", localPrice + price);
  };

  return (
    <>
      <h1>Products</h1>
      <hr />
      <TotalPrice />
      <div className="card-container mb-5">
        {/* Loop through all products and put them inside cards 
          names are all unique so used as keys
          */}
        {products.map((product) => (
          <ProductCard
            totalPrice={totalPrice}
            // Create unique id for keys
            key={crypto.randomUUID()}
            product={product}
            updateTotalPrice={updateTotalPrice}
          />
        ))}
      </div>
    </>
  );
}
