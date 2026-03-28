import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/authcontext';
import { CartProvider } from './context/CartContext'; 
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Pay from './pages/Pay';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Register from './pages/register';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import RelatedProduct from './components/RelatedProduct';
import SearchResults from './pages/SearchResults';
import DecoreSearchResults from './pages/DecoreSearchResults';
import { ToastContainer } from 'react-toastify';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

const App = () => {
  const location = useLocation(); // Get the current route path

  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <Navbar />
          <ToastContainer />

          {/* <SearchBar /> Example of a common component */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/orders" element={<Orders />} />
 
            <Route path="/search-result" element={<SearchResults />} />
            <Route path="/search-decore" element={<DecoreSearchResults />} />
          </Routes>
          {/* Conditionally render RelatedProduct based on the current route */}
          {!(location.pathname === "/cart" || location.pathname === '/pay'|| location.pathname === '/collection'||location.pathname === '/about'||location.pathname === '/orders'||location.pathname === '/') && <RelatedProduct />}
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
