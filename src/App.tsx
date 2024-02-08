import { useState } from "react";
import Gallery from "./components/Gallery";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import useSeo from "./hooks/useSeo";
import { useStore } from "./utils/CartContext";
import { type CartItem } from './types/CartContextTypes.d';

const mainImageDefault = "/img/image-product-1.jpg";
const PRICE = 250;

export default function App() {
  const { price, discount, setPrice, setCount, items, count, addToCart, removeFromCart } = useStore();
  const [mainImage, setMainImage] = useState(mainImageDefault);

  useSeo({
    title: `Sneaker Company - ${items.length} items in your cart`,
    description: "Sneaker Company - Fall Limited Edition Sneakers",
  })

  const handleThumbnailClick = (newImage: string) => {
    setMainImage(newImage);
  };

  const checkoutClick = () => {
    removeFromCart(0);
  };

  const updateCart = (newItem: CartItem) => {
    removeFromCart(0);
    addToCart(newItem);
  };

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: 0,
      name: "Fall Limited Edition Sneakers",
      img: "/img/image-product-1-thumbnail.jpg",
      nowPrice: PRICE,
      price: price,
      count: count,
    };

    items.length < 1 ? addToCart(newItem) : updateCart(newItem);
  };


  const handleIncrease = () => {
    let newCount = count + 1;
    let newPrice = price + (PRICE * discount);
    setCount(newCount)
    setPrice(newPrice);
  };

  const handleDecrease = () => {
    let newCount = count - 1;
    let newPrice = price - (PRICE * discount);
    (count > 1) && (setCount(newCount));
    (count > 1) && (setPrice(newPrice));
  };

  return (
    <main className="h-screen md:pb-0 w-screen pb-4">
      <Navbar checkout={checkoutClick} />
      <article className="lg:mx-40 flex justify-center items-center lg:flex-row flex-col mt-10 gap-28 px-10">
        <section className="h-full">
          <Gallery
            handleThumbnailClick={handleThumbnailClick}
            mainImage={mainImage}
          />
        </section>
        <InfoSection
          price={price}
          count={count}
          discount={discount}
          handleAddToCart={handleAddToCart}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
      </article>
    </main>
  );
}
