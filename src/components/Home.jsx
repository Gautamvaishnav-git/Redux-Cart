import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { addToCart } from "../redux/cartReducer";
import Loader from "./Loader";
const Home = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const fetchData = async () => {
    try {
      let data = await fetch("https://fakestoreapi.com/products");
      data = await data.json();
      setList(data);
      setLoading(false);
    } catch (err) {
      setFetchError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  if (fetchError) return <p>Fetch Error!</p>;

  return (
    <>
      {loading && <Loader />}
      <div className="home">
        {list &&
          list.map((item) => {
            return <ProductCard {...item} key={item.id} />;
          })}
      </div>
    </>
  );
};

export default Home;
