import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { CartContext } from '../../contexts/CartContext';
import { SingleProductUrl } from "../../utils/Url";


function SingleProdukt() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useContext(CartContext);

  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);
  const handleAddToCart = () => {
    addToCart(product, 1, selectedSize);
    setShowPopup(true);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${SingleProductUrl.WORDPRESS_WOO_URL}/${productId}?consumer_key=` +
            import.meta.env.VITE_REACT_APP_CONSUMER_KEY +
            "&consumer_secret=" +
            import.meta.env.VITE_REACT_APP_CONSUMER_SECRET
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
      {showPopup && (
        <div role="alert" className=" bg-success fixed left-5 top-5 right-5 md:inset-y-auto flex px-4 py-3 rounded max-w-[500px]" >
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p>{product.name} er tilføjet til kurven!</p>
        </div>
      )}
      {/* Add more details as needed */}
      <div className="py-8 lg:py-28">
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
              <h2 className=" mb-2">
                {product.name}
              </h2>

              <p
                className=" mb-4"
                dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
              />

              <div className="flex mb-4">
                <div className="mr-4">
                  <p className="font-bold  ">Pris:</p>
                  <p className=" ">  {parseFloat(product.price).toFixed(2)}  DKK</p>
                </div>
                <div>
                  <p className="font-bold  ">Lagerstatus:</p>
                  <p className=" ">{lagerStatus()}</p>
                </div>
              </div>

              <div className="mb-4 flex flex-row flex-wrap  gap-2 items-center ">
                <p className="font-bold  ">Størrelse</p>
                {options.map((sizeOption, index) => (
                  <div className="mt-2" key={index}>
                    <button
                      className={`${
                        selectedSize === sizeOption
                          ? "bg-secondary "
                          : "bg-primary "
                      } py-2 px-4 rounded-full font-bold mr-2 `}
                      onClick={() => setSelectedSize(sizeOption)}
                    >
                      {sizeOption}
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap mx-2 mb-4 mt-8">
                <div className="w-full px-2">
                  <button className="w-full py-2 px-4 rounded-full font-bold"
                  onClick={handleAddToCart}
                  >
                    Tilføj til kurv
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
