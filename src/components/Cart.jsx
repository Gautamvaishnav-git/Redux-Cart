import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import EmptyCart from "./EmptyCart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cartItems, subtotal, shipping, tax, total } = useSelector(
    (state) => state.cartReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "getTotal",
    });
  }, [cartItems]);

  const increment = (id) => {
    dispatch({
      type: "increment",
      payload: id,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
  };

  const deleteHandler = (id) => {
    dispatch({
      type: "deleteHandler",
      payload: id,
    });
  };

  return (
    <>
      <div className="cart">
        <main>
          {cartItems.length > 0 ? (
            cartItems.map(({ name, price, id, imgSrc, quantity }) => (
              <CartItem
                name={name}
                price={price}
                id={id}
                imgSrc={imgSrc}
                key={id}
                quantity={quantity}
                increment={increment}
                decrement={decrement}
                deleteHandler={deleteHandler}
              />
            ))
          ) : (
            <EmptyCart />
          )}
        </main>
        <aside>
          <h2>subtotal ${subtotal} </h2>
          <h2>Shipping ${shipping}</h2>
          <h2>tax ${tax} </h2>
          <h2>total ${total} </h2>
        </aside>
      </div>
    </>
  );
};

export default Cart;

const CartItem = ({
  name,
  price,
  id,
  imgSrc,
  increment,
  decrement,
  deleteHandler,
  quantity,
}) => {
  return (
    <>
      <div className="cartItem">
        <img src={imgSrc} alt={name} />
        <article>
          <h3>{name}</h3>
          <p>{price}</p>
        </article>

        <div className="buttonGroup">
          <button
            onClick={() => {
              decrement(id);
            }}
          >
            <AiOutlineMinus />
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              increment(id);
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <button className="deleteBtn" onClick={() => deleteHandler(id)}>
          <AiFillDelete />
        </button>
      </div>
    </>
  );
};
