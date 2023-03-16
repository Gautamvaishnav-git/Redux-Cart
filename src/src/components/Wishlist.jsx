import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  return (
    <>
      <main className="wishlistContainer">
        {wishlistItems &&
          wishlistItems.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <img src={item.image} alt="image" />
                <article>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </article>
                <div className="removeFromWishlist">
                  <i title="remove">
                    <AiFillHeart />
                  </i>
                </div>
              </div>
            );
          })}
      </main>
    </>
  );
};

export default Wishlist;
