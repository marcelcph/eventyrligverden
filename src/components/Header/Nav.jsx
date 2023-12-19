import React from "react";

function Nav() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-4">
        <div className="flex flex-row justify-center items-center  bg-base-100 ">
          {/*Logo*/}
          <div className="flex-none">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          {/*søgebar*/}
          <div className=" justify-center items-center grow ">
            <div className="form-control items-center">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-[150px] md:w-[450px]"
              />
            </div>
          </div>
          {/*shopping icon med dropdown*/}
          <div class="dropdown dropdown-end flex-none ">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabindex="0"
              class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div class="card-body">
                <span class="font-bold text-lg">8 Items</span>
                <span class="text-info">Subtotal: $999</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          {/*burger menu*/}
          <div className=" drawer-end md:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
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
                {/* Sidebar content here */}
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
    </>
  );
}

export default Nav;
