import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hovedinfo from "../../utils/Virksomhedsinfo/Hovedinfo";
import axios from "axios";
import { Url } from "../../utils/Url";

function Nav() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(Url.WORDPRESS_WOO_URL, {
        params: { page: 1 }, // Adjust as needed
      });

      if (response.data.length > 0 && response.data[0].categories) {
        setCategories(response.data[0].categories);
      }
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
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
            <div className="justify-center items-center grow">
              <div className="form-control items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-[150px] md:w-[450px]"
                />
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
            {/* Burger menu */}
            <div className=" drawer-end lg:hidden">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* SVG path here */}
                  </svg>
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
          </div>
        </div>
        <div className="hidden lg:flex justify-center">
          <ul className="menu menu-horizontal px-1">
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
    </>
  );
}

export default Nav;
