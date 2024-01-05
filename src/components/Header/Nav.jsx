import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Hovedinfo from "../../utils/Virksomhedsinfo/Hovedinfo";
import axios from "axios";
import { Url } from "../../utils/Url";
import Produktliste from "../Produktliste/Produktliste";

function Nav() {
  const [searchQuery, setsearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const dropdownRef = useRef(null);

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

      if (response.data.length > 0) {
        // Konverter søgning til små bogstaver
        const lowercaseQuery = query.toLowerCase();
        const lowercaseResults = response.data.map((result) => ({
          ...result,
          name: result.name.toLowerCase(),
        }));

        const filteredResults = lowercaseResults.filter((result) =>
          result.name.includes(lowercaseQuery)
        );

        setSearchResults(filteredResults);
      } else {
        setSearchResults([]);
      }
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

  const isShopRoute = location.pathname === "/shop";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchResults([]);
        setsearchQuery(""); //Fjerne query når der klikkes udenfor søgebar
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="">
        <div className="container mx-auto py-4">
          <div className="flex flex-row justify-center items-center  bg-base-100 ">
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
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-[150px] md:w-[450px]"
                  value={searchQuery}
                  onChange={(e) => setsearchQuery(e.target.value)}
                />
                {searchResults.length > 0 &&
                  searchQuery.trim().length >= 1 &&
                  !isShopRoute && (
                    <div className="dropdown dropdown-end absolute w-[450px] mt-12 z-50">
                      <div className="bg-base-100 p-2 rounded-lg shadow-xl">
                        {searchResults.slice(0, 6).map((result) => (
                          <div
                            key={result.id}
                            className="hover:bg-primary rounded-md p-2 flex items-center"
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
                        <a>Sidebar Item 1</a>
                      </li>
                      <li>
                        <a>Sidebar Item 2</a>
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
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex="0"
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="luxury" />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
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

      {isShopRoute && <Produktliste searchQuery={searchQuery} />}
    </>
  );
}

export default Nav;
