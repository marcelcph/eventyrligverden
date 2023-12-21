import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { SingleProductUrl } from "../../utils/Url";
function SingleProdukt() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${SingleProductUrl.WORDPRESS_WOO_URL}/${productId}?consumer_key=` +
            import.meta.env.VITE_REACT_APP_CONSUMER_KEY +
            "&consumer_secret=" +
            import.meta.env.VITE_REACT_APP_CONSUMER_SECRET // Correctly append product ID here
        );

        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const sanitizedHTML = DOMPurify.sanitize(product.description);
  const lagerStatus = () => {
    if (product.stock_quantity === 0) {
      return " ikke på lager";
    }
    return " på lager";
  };

  const options = product.attributes[0]?.options || [];

  return (
    <div>
      {/* Add more details as needed */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300  mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={product.images[0].src}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800  mb-2">
                {product.name}
              </h2>

              <div
                className="text-gray-600  text-sm mb-4"
                dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
              />

              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">Pris:</span>
                  <span className="text-gray-800 "> {product.price} DKK</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 ">
                    Lager status:
                  </span>
                  <span className="text-gray-800 ">{lagerStatus()}</span>
                </div>
              </div>

              <div className="mb-4 flex flex-row flex-wrap  gap-2 items-center ">
                <span className="font-bold text-gray-700 ">Størrelse</span>
                {options.map((sizeOption, index) => (
                  <div className="mt-2" key={index}>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                      {sizeOption}
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap mx-2 mb-4 mt-8">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200  text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300 ">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProdukt;
