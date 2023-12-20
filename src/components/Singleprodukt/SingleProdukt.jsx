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
        console.log("Product Data:", response.data); // Add this line to log product data
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

  return (
    <div>
      <h2>{product.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      <p>Price: {product.price} kr.</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default SingleProdukt;
