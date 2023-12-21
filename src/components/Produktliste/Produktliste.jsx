import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Url } from "../../utils/Url";

function Produktliste() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadedProductIds, setLoadedProductIds] = useState(new Set());
  const [initialLoad, setInitialLoad] = useState(false);

  // Function to fetch products and categories
  const fetchProductsAndCategories = async () => {
    try {
      const response = await axios.get(Url.WORDPRESS_WOO_URL, {
        params: { page },
      });

      if (response.data.length > 0) {
        const uniqueProducts = response.data.filter(
          (product) => !loadedProductIds.has(product.id)
        );

        setProducts((prevProducts) => [...prevProducts, ...uniqueProducts]);
        setLoadedProductIds(
          (prevIds) => new Set([...prevIds, ...uniqueProducts.map((p) => p.id)])
        );
        setPage(page + 1);

        // Extract categories from the first product
        if (!categories.length && response.data[0].categories) {
          setCategories(response.data[0].categories);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    if (initialLoad) {
      // Start fetching products and categories only after the initial load
      fetchProductsAndCategories();
    } else {
      setInitialLoad(true);
    }
  }, [page, initialLoad]); // Include page and initialLoad in the dependency array

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPage(1);
    setHasMore(true);
    setProducts([]);
    setLoadedProductIds(new Set());
    setInitialLoad(false); // Reset initialLoad when a new category is selected
  };

  // Function to filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) =>
        product.categories.some(
          (category) => category.slug === selectedCategory
        )
      )
    : products;

  return (
    <div>
      {/* Category buttons */}
      <div className="flex justify-center my-4">
        <button
          className={`btn mx-2 ${
            !selectedCategory ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => handleCategorySelect(null)}
        >
          Alle produkter
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`btn mx-2 ${
              selectedCategory === category.slug
                ? "btn-primary"
                : "btn-secondary"
            }`}
            onClick={() => handleCategorySelect(category.slug)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Infinite scroll Product grid */}
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProductsAndCategories}
        hasMore={hasMore} // Use hasMore state to determine if there's more data to load
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.9} // Adjust this value as needed
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card shadow-xl flex flex-col bg-accent"
            >
              <figure>
                <img
                  className="max-w-full h-auto"
                  src={product.images[0].src}
                  alt={product.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title -mb-12">{product.name}</h2>
              </div>
              <div className="flex justify-between p-8">
                <p className="text-lg">{product.price} kr.</p>
                <Link to={`/shop/${product.id}`} className="btn btn-primary">Se mere</Link>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Produktliste;
