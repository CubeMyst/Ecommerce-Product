import { useState } from "react";
import { Logo } from "../../public/icons/Icons";
import NavItem from "./NavItem";
import CartModal from "./CartModal";
import { useStore } from "../utils/CartContext";
import { FaBars } from "react-icons/fa6";

export default function Navbar({checkout}: {checkout: () => void}) {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { items } = useStore();

  const handleCartButtonClick = () => {
    setIsCartModalOpen((prev) => !prev);
  };

  return (
    <header className="lg:mx-40">
      <nav className="flex w-full flex-col relative max-md:px-5">
        <main className="flex w-full h-full justify-between items-center pt-6 pb-10">
          <section className="flex gap-12">
            {/* TODO: crear el menu responsive */}
            <button className="">
              <FaBars className="max-md:block hidden" />
            </button>
            <Logo />
            <ul className="flex ml-2 max-md:hidden gap-9 h-full">
              <NavItem href="#" text="Collections" />
              <NavItem href="#" text="Men" />
              <NavItem href="#" text="Women" />
              <NavItem href="#" text="About" />
              <NavItem href="#" text="Contact" />
            </ul>
          </section>
          <section className="flex relative gap-12">
            {items.length > 0 && (
              <div className="flex justify-center items-center bg-Orange text-white absolute py-0 px-2 text-[10px] rounded-full z-10 bottom-7 font-bold left-3">
                {items.map((item) => item.count)}
              </div>
            )}
            {/* cart button */}
            <button
              className="hover:opacity-100 transition-opacity duration-200 opacity-60"
              onClick={handleCartButtonClick}
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill=""
                  fillRule="nonzero"
                />
              </svg>
            </button>
            {/* user avatar */}
            <button className="border-2 rounded-full transition-all duration-200 hover:border-Orange">
              <img
                src="/img/image-avatar.png"
                className="w-12"
                alt="User Avatar"
              />
            </button>
          </section>
        </main>
        {isCartModalOpen && <CartModal checkoutClick={() => checkout()} />}
        <div className="relative bg-DarkBlue-900 inset-0 border-t -top-7"></div>
      </nav>
    </header>
  );
}
