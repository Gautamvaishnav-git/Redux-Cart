import { useDispatch, useSelector } from "react-redux";
import empty_cart from "../assets/empty_cart.svg";
import { AiOutlineDelete } from "react-icons/ai";
import { decrement, deleteProduct, increament } from "../redux/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);
  return (
    <>
      <div className="cart">
        <main>
          {items.length > 0 ? (
            items.map((item) => {
              return (
                <div className="cartItem" key={item.id}>
                  <img src={item.image} alt="image" />
                  <article>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                  </article>
                  <div className="buttonGroup">
                    <button onClick={() => dispatch(decrement(item.id))}>
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => dispatch(increament(item.id))}>
                      +
                    </button>
                    <button
                      className="deleteBtn"
                      onClick={() => dispatch(deleteProduct(item.id))}
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="empty">
              <img src={empty_cart} />
            </div>
          )}
        </main>
        {total !== 0 && (
          <aside>
            <h2>
              <span>Total:</span> ${total}
            </h2>
          </aside>
        )}
      </div>
    </>
  );
};

export default Cart;
