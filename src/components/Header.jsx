import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../assets/Logo.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <>
      <header>
        <h2 className="Logo">
          <img src={Logo} alt="Logo" />
          <span>Made by Gautam Vaishnav</span>
        </h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="cart">
            <AiOutlineShoppingCart />
            <p>{cartItems.length > 0 ? cartItems.length : 0}</p>
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
