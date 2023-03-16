import { addToCart } from "../redux/cartReducer";
import { addToWishlist } from "../redux/wishlist";
import { useDispatch } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ title, id, image, price }) => {
  const dispatch = useDispatch();
  const handler = ({ title, image, price, id }) => {
    dispatch(addToCart({ title, image, price, id, quantity: 1 }));
    toast.success("added");
  };

  const handleAddToWishlist = ({ title, image, price, id }) => {
    dispatch(addToWishlist({ title, image, price, id }));
  };

  return (
    <>
      <Toaster position="top-left" />
      <div className="product">
        <img src={image} alt={title} />
        <p>{title}</p>
        <h4>${price}</h4>
        <div className="buttons">
          <button
            onClick={() => handleAddToWishlist({ title, id, image, price })}
          >
            <AiOutlineHeart />
          </button>
          <button onClick={() => handler({ title, id, image, price })}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
