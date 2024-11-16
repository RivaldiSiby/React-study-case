import { useEffect, useState } from "react";
import useLoading from "./useLoading";

const datadumy = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    stock: 120,
    rating: 4.5,
    description:
      "High-quality wireless headphones with noise-canceling feature.",
    image: "https://example.com/images/headphones.jpg",
  },
  {
    id: 2,
    name: "Smartphone Stand",
    category: "Accessories",
    price: 12.99,
    stock: 200,
    rating: 4.8,
    description: "Adjustable smartphone stand, perfect for desk use.",
    image: "https://example.com/images/stand.jpg",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    price: 89.99,
    stock: 50,
    rating: 4.2,
    description: "Comfortable running shoes for men and women.",
    image: "https://example.com/images/shoes.jpg",
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 24.99,
    stock: 150,
    rating: 4.7,
    description: "Durable and eco-friendly water bottle with 1L capacity.",
    image: "https://example.com/images/bottle.jpg",
  },
  {
    id: 5,
    name: "Gaming Keyboard",
    category: "Electronics",
    price: 49.99,
    stock: 80,
    rating: 4.3,
    description: "RGB backlit mechanical keyboard for gamers.",
    image: "https://example.com/images/keyboard.jpg",
  },
];

export default function useFetchProduct(idProduct = null) {
  const [data, setData] = useState([]);
  const { isLoading, setLoading } = useLoading();

  // fetch
  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      console.log("Fetch Data");
      // check id
      const payload = idProduct
        ? datadumy.find((f) => f.id === idProduct)
        : datadumy;
      setData(payload);
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return { data, isLoading };
}
