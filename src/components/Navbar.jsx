import React, { useState, useEffect, useRef, useContext } from "react";
import "./Navbar.css";
import { assets } from "../assets/assets";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { useAuth } from "../context/authcontext";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";

const Navbar = () => {
  const { search, setShowSearch, getCartCounter, cartItem } = useContext(ShopContext);
  const { setCurrentUser } = useAuth();
  const [cartCount, setCartCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileIconRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  // Fetch cart count from Firestore
  const fetchCartCount = async () => {
    try {
      const userId = auth.currentUser?.uid;
      if (userId) {
        const cartDoc = doc(db, "carts", userId);
        const cartData = await getDoc(cartDoc);
        if (cartData.exists()) {
          setCartCount(cartData.data().count || 0);
        } else {
          console.warn("No cart document found for user:", userId);
          await setDoc(cartDoc, { count: 0 });
          setCartCount(0);
        }
      } else {
        console.warn("No authenticated user found.");
      }
    } catch (error) {
      console.error("Error fetching cart count:", error.message);
    }
  };

  // Updates the cart count in Firestore
  const updateCartCount = async (newCount) => {
    try {
      const userId = auth.currentUser?.uid;
      if (userId) {
        const cartDoc = doc(db, "carts", userId);
        await updateDoc(cartDoc, { count: newCount });
        setCartCount(newCount);
      }
    } catch (error) {
      console.error("Error updating cart count:", error.message);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  // Handle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setVisible(!visible);
  };

  // Fetch cart count on component mount
  useEffect(() => {
    fetchCartCount();
  }, [cartItem]); // Re-fetch when `cartItem` updates

  return (
    <div className="nav">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="Logo" />
      </Link>
      <ul className="nav-element">
        <NavLink to="/" className="navlinks">HOME</NavLink>
        <NavLink to="/collection" className="navlinks">COLLECTION</NavLink>
        <NavLink to="/about" className="navlinks">DECOR</NavLink>
        <NavLink to="/orders" className="navlinks">ORDER</NavLink>
      </ul>
      <div className="search flex items-center gap-6">
        <Link to="/search-result">
          <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search Icon" />
        </Link>
        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="Profile Icon"
              ref={profileIconRef}
              onClick={toggleDropdown}
            />
          </Link>
          {isDropdownOpen && (
            <div className="dropdown" ref={dropdownRef}>
              <p className="dropdown-item" onClick={handleLogout}>Logout</p>
            </div>
          )}
        </div>
        <Link to="/cart">
          <img className="w-5 min-w-5 cursor-pointer" src={assets.cart_icon} alt="Cart Icon" />
          <p className="order">{getCartCounter()}</p> {/* Use the context's getCartCounter function here */}
        </Link>
        <img
          onClick={toggleMobileMenu}
          className="mobile-menu"
          src={assets.menu_icon}
          alt="Mobile Menu"
        />
      </div>
      {visible && (
        <div className="mobile-menu-overlay" ref={mobileMenuRef}>
          <button className="close-btn" onClick={() => setVisible(false)}>
            <img src={assets.cross_icon} alt="Close" />
          </button>
          <div className="mobile-menu-list">
            <NavLink to="/" onClick={() => setVisible(false)}>Home</NavLink>
            <NavLink to="/collection" onClick={() => setVisible(false)}>Collection</NavLink>
            <NavLink to="/about" onClick={() => setVisible(false)}>Decor</NavLink>
            <NavLink to="/orders" onClick={() => setVisible(false)}>Order</NavLink>
            <Link to="/cart" onClick={() => setVisible(false)}>
              Cart <p className="order">{getCartCounter() > 0 ? getCartCounter() : ''}</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
