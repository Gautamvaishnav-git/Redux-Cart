import { addToCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import { toast, Toaster } from "react-hot-toast";

const ProductCard = ({ title, id, image, price }) => {
  const dispatch = useDispatch();
  const handler = ({ title, image, price, id }) => {
    dispatch(addToCart({ title, image, price, id, quantity: 1 }));
    toast.success("added");
  };
  return (
    <>
      <Toaster position="top-left" />
      <div className="product">
        <img src={image} alt={title} />
        <p>{title}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({ title, id, image, price })}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
