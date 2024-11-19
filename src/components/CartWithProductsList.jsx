import CartWithProduct from "./CartWithProducts";

const CartWithProductsList = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}) => {
  return (
    <section className="flex flex-col py-3 w-full bg-gray-50 mt-[124px]">
      {cart.length !== 0
        ? cart.map((cartData) => (
            <CartWithProduct
              key={cartData.id}
              imageSrc={cartData.item.photo}
              name={cartData.item.name}
              price={cartData.item.price}
              quantity={cartData.quantity}
              special_request={cartData.special_request}
              id={cartData.id}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              deleteItem={deleteItem}
            />
          ))
        : ""}
    </section>
  );
};

export default CartWithProductsList;
