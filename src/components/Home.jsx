import ProductCard from "./ProductCard";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import productList from "./ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productList);
  }, []);
  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    toast.success("Added to Cart");
    dispatch({
      type: "addToCart",
      payload: options,
    });
  };

  return (
    <>
      <div className="home">
        {products.map(({ name, id, imgSrc, price }) => (
          <ProductCard
            name={name}
            key={id}
            id={id}
            imgSrc={imgSrc}
            price={price}
            handler={addToCartHandler}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
