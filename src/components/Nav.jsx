import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

      // Function to toggle cart
    const toggleCart = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div>
                <NavLink to="/"> <button> happy birthday babysola</button> </NavLink>
            </div>
            <div className="about">
                <NavLink to="/memories"> <button> memories </button> </NavLink>
                <NavLink to="/message"> <button className="special"> message </button> </NavLink>
            </div>
            <span className="toggle-menu"><ion-icon name="menu-outline" onClick={toggleCart} /></span>
            {isMenuOpen && (
        <div
          className={`overlay ${isMenuOpen ? "show" : ""}`}
          onClick={toggleCart}
        ></div>
      )}
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <span className="toggle-menu"> <ion-icon name="close-outline" onClick={toggleCart} /> </span>
        <ul>
            <NavLink onClick={toggleCart} to="/memories"> <li> memories </li> </NavLink> 
            <NavLink onClick={toggleCart} to="/message"> <li> message </li> </NavLink> 
        </ul>
      </div>
        </nav>
    )
}

export default NavBar;