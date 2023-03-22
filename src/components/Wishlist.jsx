import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/wishlist";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.wishlist);
  return (
    <>
      <main className="wishlistContainer">
        {list.length > 0 ? (
          list.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <img src={item.image} alt="image" />
                <article>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </article>
                <div className="removeFromWishlist">
                  <button
                    title="remove"
                    onClick={() => {
                      dispatch(removeFromWishlist(item.id));
                    }}
                  >
                    <AiFillHeart />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Items in your wishlist...</h1>
        )}
      </main>
    </>
  );
};

export default Wishlist;
