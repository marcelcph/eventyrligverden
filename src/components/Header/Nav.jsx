import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hovedinfo from "../../utils/Virksomhedsinfo/Hovedinfo";
import axios from "axios";
import { Url } from "../../utils/Url";
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function Nav() {

  const [searchQuery, setsearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const { cartItems } = useContext(CartContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(Url.WORDPRESS_WOO_URL, {
        params: { page: 1 },
      });

      if (response.data.length > 0 && response.data[0].categories) {
        setCategories(response.data[0].categories);
      }
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(Url.WORDPRESS_WOO_URL, {
        params: { page: 1, search: query },
      });

      const lowercaseQuery = query.toLowerCase();
      const lowercaseResults = response.data.map((result) => ({
        ...result,
        name: result.name.toLowerCase(),
      }));

      const filteredResults = lowercaseResults.filter((result) =>
        result.name.includes(lowercaseQuery)
      );

      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length >= 1) {
      fetchSearchResults(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchResults([]);
        setsearchQuery("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

 // Beregn total antal varer og subtotal
 const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
 const subtotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);



 //nav fixed
 // Handle scroll event
 useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add event listener
  window.addEventListener('scroll', handleScroll);

  // Clean up
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <>
      <div className={`  w-full z-10 transition-shadow ${isScrolled ? 'bg-secondary top-0 fixed' : ''}`}>
        <div className="container mx-auto py-4 ">
          <div className="flex flex-row justify-center items-center   ">
            {/* Logo */}
            <div className="flex-none">
              <Link to="/">
                <img
                  src={Hovedinfo.virksomhedslogo}
                  alt="Logo"
                  className="w-[150px] md:w-[150px]"
                />
              </Link>
            </div>
            {/* Søgebar */}
            <div
              className="justify-center items-center grow relative"
              ref={dropdownRef}
            >
              <div className="form-control items-center">
              <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-[150px] md:w-[450px]"
                    value={searchQuery}
                    onChange={(e) => setsearchQuery(e.target.value)}
                  />
                </form>
                {searchResults.length > 0 &&
                  searchQuery.trim().length >= 1 &&
                 (
                    <div className="dropdown dropdown-end absolute w-[450px] mt-12 z-50">
                      <div className="bg-base-100 p-2 rounded-lg shadow-xl">
                        {searchResults.slice(0, 6).map((result) => (
                          <div
                            key={result.id}
                            className="hover:bg-primary hover:text-secondary rounded-md p-2 flex items-center"
                          >
                            <img
                              src={result.images[0].src} // Replace this with the correct image source
                              alt={result.name}
                              className="w-10 h-10 mr-2"
                            />
                            <Link to={`/shop/${result.id}`}>{result.name}</Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

              </div>
            </div>
            {/* Burger menu */}
            <div className=" drawer-end block lg:hidden">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="">
                    <label
                      role="button"
                      className="btn btn-ghost btn-circle drawer-button"
                      htmlFor="my-drawer-4"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                  </div>

                  <div className="drawer-side z-20">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li>
                      <Link to="/">Hjem</Link>
                    </li>
                    <li>
                      <details>
                        <summary>
                          <Link to="/shop">Shop</Link>
                        </summary>
                        <ul className="p-2 z-50">
                          {categories.map((category) => (
                            <li key={category.id}>
                              <Link to={`/category/${category.slug}`}>
                                {category.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/Kontakt">Kontakt</Link>
                    </li>
                    </ul>
                  </div>
                </div>
            {/* Shopping icon med dropdown */}
            <div className="dropdown dropdown-end flex-none">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </svg>
                  <span className="badge badge-sm indicator-item">{totalItems}</span>
                </div>
              </div>
              <div
                tabIndex="0"
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">Antal: {totalItems}</span>
                  <span className="text-info">Subtotal: {parseFloat(subtotal).toFixed(2)}</span>
                  <div className="card-actions">
                    <Link to="/cart" className="btn btn-primary btn-block">
                    
                      Se kurv
                   
                    </Link>
                  </div>
                </div>
              </div>
            </div>
         
          </div>
          {/* menu stor skærm */}
          <div className="hidden lg:flex justify-center">
                  <ul className="menu menu-horizontal">
                    <li>
                      <Link to="/">Hjem</Link>
                    </li>
                    <li>
                      <details>
                        <summary>
                          <Link to="/shop">Shop</Link>
                        </summary>
                        <ul className="p-2 z-50">
                          {categories.map((category) => (
                            <li key={category.id}>
                              <Link to={`/category/${category.slug}`}>
                                {category.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/Kontakt">Kontakt</Link>
                    </li>
                  </ul>
                </div>
        </div>
      </div>

     
    </>
  );
}

export default Nav;
