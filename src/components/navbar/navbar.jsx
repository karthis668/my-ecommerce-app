/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart";

const NavBar = () => {
  const [menu, setMenu] = useState("Home");
  const {cartCount} = useContext(CartContext);
  const cart = cartCount();
 
  return (
    <nav
      className="navbar bg-dark border-bottom border-body navbar-expand-lg sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">
          
        </a> */}
        <Link className="navbar-brand" to="/">
        Food{" "}
          <img
            src="/src/assets/tasty.png"
            alt="logo"
            width="20px"
            height="20px"
          />{" "}
          Food</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ms-3" onClick={() => setMenu("Home")}>
              <span className={`nav-link ${menu == "Home" ? "active" : ""}`}>
                <Link to="/">Home</Link>
              </span>
            </li>
            <li className="nav-item ms-3" onClick={() => setMenu("Recipes")}>
              <span className={`nav-link ${menu == "Recipes" ? "active" : ""}`}>
                <Link to="recipes">Menu</Link>
              </span>
            </li>
          </ul>
          <div>
          <Link to={"/cart"} className="">
          <i className="bi bi-bag me-5"></i>
          <span className="badge text-bg-primary rounded-pill">{cart}</span>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
