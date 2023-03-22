import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import Logo from "../assets/Logo.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const { items } = useSelector((state) => state.cart);
  const { list } = useSelector((state) => state.wishlist);
  return (
    <>
      <header>
        <h2 className="Logo">
          <img src={Logo} alt="Logo" />
          <span>Made by Gautam Vaishnav</span>
        </h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/wishlist">
            <AiOutlineHeart />
            <p>{list.length}</p>
          </NavLink>
          <NavLink to="cart">
            <AiOutlineShoppingCart />
            <p>{items.length}</p>
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
