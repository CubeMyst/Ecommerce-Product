import { CartProvider } from "./utils/cartContext";
import MainContainer from "./components/MainContainer";

// const thumbnailImages = [
//   "src/assets/img/image-product-1-thumbnail.jpg",
//   "src/assets/img/image-product-2-thumbnail.jpg",
//   "src/assets/img/image-product-3-thumbnail.jpg",
//   "src/assets/img/image-product-4-thumbnail.jpg",
// ];

export default function App() {


  return (
    <CartProvider>
      <MainContainer />
    </CartProvider>
  );
}
