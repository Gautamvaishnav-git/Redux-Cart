import empty_cart from "../assets/empty_cart.svg";

const EmptyCart = () => {
  return (
    <>
      <div className="empty">
        <h2>Your Cart is empty</h2>
        <img src={empty_cart} alt="Empty Cart" />
      </div>
    </>
  );
};

export default EmptyCart;
