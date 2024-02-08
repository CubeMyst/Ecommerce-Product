import { useStore } from "../utils/CartContext";

export default function CartModal(
  { checkoutClick }: { checkoutClick: () => void }
) {
  const { items, discount, removeFromCart } = useStore()

  return (
    <div className="w-80 h-48 flex flex-col justify-between right-0 top-20 absolute bg-white p-4 rounded-lg shadow-2xl z-10">
      <div className="text-start">
        <h2 className="text-sm font-bold mb-4">Cart</h2>
        <div className="w-full absolute border-black border-t opacity-10 m-0 p-0 right-0 left-0"></div>
      </div>
      <section className="w-full px-2">
        {items.map((item) => (
          <section
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            {item ? (
              <div className="flex flex-col gap-4 justify-between items-center w-full">
                <section className="flex gap-2 items-center justify-between w-full">
                  <img
                    src={item.img}
                    className="w-10 h-10 rounded"
                    alt={item.name}
                  />
                  <article className="flex flex-col text-DarkBlue-800">
                    <h1 className="text-sm font-medium">{item.name}</h1>
                    <p className="text-sm">
                      ${item.nowPrice * discount}.00 x {item.count} <span className="font-bold text-DarkBlue-900">${item.price}.00</span>
                    </p>
                  </article>
                  <button onClick={() => removeFromCart(item.id)}>
                    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" /></defs><use fill="#C3CAD9" fill-rule="nonzero" xlinkHref="#a" /></svg>
                  </button>
                </section>
                <button className="bg-Orange text-white font-semibold w-full h-12 rounded-lg" onClick={() => checkoutClick()}>
                  Checkout
                </button>
              </div>
            ) : (
              <p>Your cart is empty</p>
            )}
          </section>
        ))}
      </section>
    </div>
  );
}
