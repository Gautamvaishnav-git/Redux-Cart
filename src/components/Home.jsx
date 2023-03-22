import { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
const Home = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      let data = await fetch("https://fakestoreapi.com/products");
      data = await data.json();
      setList(data);
      setLoading(false);
    } catch (err) {
      setFetchError(true);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
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
