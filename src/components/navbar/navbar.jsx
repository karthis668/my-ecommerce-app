import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState('Home');
    return(
        <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg sticky-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Food <img src="/src/assets/tasty.png" alt="logo" width="20px" height="20px"/> Food</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item" onClick={()=>setMenu('Home')}>
              <span className={`nav-link ${menu == 'Home' ? 'active' : ''}`}><Link to='/'>Home</Link></span>
              </li>
              <li className="nav-item ms-4"  onClick={()=>setMenu('Recipes')}>
                <span className={`nav-link ${menu == 'Recipes' ? 'active' : ''}`}><Link to='recipes'>Recipes</Link></span>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    )
   
};

export default NavBar;