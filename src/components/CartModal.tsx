import { useStore } from "../utils/CartContext";

export default function CartModal() {
  const { items } = useStore()

  return (
    <div className="w-72 h-48 flex flex-col justify-between items-center right-0 top-20 absolute bg-white p-4 rounded-lg shadow-2xl z-10">
      <div className="text-start">
        <h2 className="text-sm font-bold mb-4">Cart</h2>
        <div className="w-full absolute border-black border-t opacity-10 m-0 p-0 right-0 left-0"></div>
      </div>
      <section className="w-full">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            {item.count > 0 ? (
              <div className="flex justify-between items-center w-full">
                <img
                  src={item.img}
                  className="w-10 h-10 rounded-sm"
                  alt={item.name}
                />
                <div className="flex flex-col">
                  <h1 className="text-sm">{item.name}</h1>
                  <p>
                    ${item.price} x {item.count} = $
                    {item.nowPrice}
                  </p>
                </div>
                <button className="bg-Orange text-white w-full h-12 rounded-lg">
                  Checkout
                </button>
              </div>
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
