import { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import { Url } from "../../utils/Url";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import placeholder from "../../assets/images/placeholder.png"

function Katalog() {


  const [categories, setCategories] = useState([]);


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

useEffect(() => {
    fetchCategories();
  }, []);


  return (
    <div className="flex  justify-center">
      <CarouselProvider isIntrinsicHeight={true} totalSlides={3} className="flex flex-col justify-center">
        <div className="lg:hidden  xl:px-0 overflow-y-hidden w-full">
          <div className="  md:max-w-6xl w-full ">
            <div className="flex flex-col items-center justify-center w-full  py-1">
              <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
                Kategorier
              </h1>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-lg text-gray-100">
                <span id="current"></span>
                <span className="text-gray-800"></span>
              </p>
              <div className="my-4 flex items-center">
                <ButtonBack>
                  <div
                    aria-controls="slide"
                    aria-label="slide back"
                    className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer mr-4 p-2 flex items-center justify-center "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-narrow-left"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="5" y1="12" x2="9" y2="16" />
                      <line x1="5" y1="12" x2="9" y2="8" />
                    </svg>
                  </div>
                </ButtonBack>
                <ButtonNext>
                  <div
                    aria-controls="slide"
                    aria-label="slide forward"
                    className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer flex items-center justify-center  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-narrow-right"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#4338CA"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </div>
                </ButtonNext>
              </div>
            </div>
            <div className="">
              <Slider>
              {categories.map((category) => (
                <Slide key={category.id} index={category.id}>
                  <div className="w-full px-2">
                    <div className="w-full flex justify-center items-center flex-col rounded-md">
                      <div
                        style={{
                          backgroundImage:
                            "url('https://i.ibb.co/93dVNbx/Rectangle-27.png')",
                        }}
                        className="relative  bg-cover w-full flex justify-center  flex-col rounded-md "
                      >
                        <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">
                          {category.name}
                        </h1>

                        <button className="focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Slide>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </CarouselProvider>
      <CarouselProvider
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={2}
      >
        <div className="hidden lg:block px-6 xl:px-0 ">
          <div className="">
            <div className="flex flex-row">
              <div
                role="article"
                className="flex flex-col items-left justify-center w-full py-10"
              >
                <h1 className="font-bold text-gray-800 text-3xl md:text-5xl">
                  Kategorier
                </h1>
              </div>
              <div className="w-full flex flex-col items-end justify-end pr-24 my-3">
                <p className="text-lg text-gray-100">
                  <span id="current3"></span>
                  <span className="text-gray-800"></span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ButtonBack>
                  <div
                    aria-controls="slide"
                    aria-label="slide back"
                    className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer mr-4 p-2 pr-2 flex items-center justify-center "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-narrow-left"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="5" y1="12" x2="9" y2="16" />
                      <line x1="5" y1="12" x2="9" y2="8" />
                    </svg>
                  </div>
                </ButtonBack>
                <ButtonNext>
                  <div
                    aria-controls="slide"
                    aria-label="slide forward"
                    className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer flex items-center justify-center  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-narrow-right"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </div>
                </ButtonNext>
              </div>
            </div>
            <div
              id="slide"
              aria-roledescription="carousel"
              aria-label="about healt care"
              className="slider3"
            >
              <div className="">
                <Slider>
                {categories.map((category) => (
                  <Slide key={category.id} index={category.id}>
                    
                    <div className="grid grid-cols-1">
                    <Link to={`/category/${category.slug}`}>
                      <div
                        aria-live="off"
                        aria-roledescription="slide1"
                        className=""
                      >
                        <div
                          style={{
                            backgroundImage:
                            `url(${category.image && category.image.src ? category.image.src : placeholder})`,
                          }}
                          className="relative  bg-cover w-full flex justify-center  flex-col rounded-md "
                        >
                          <h1 className="w-40 text-primary font-semibold text-left text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">
                            {category.name}
                          </h1>

                          
                        </div>
                      </div>
                      </Link>
                    </div>
                    
                  </Slide>
                  ))}
                  
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
}

export default Katalog;
