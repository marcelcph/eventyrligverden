import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Url } from "../../utils/Url";
import Loading from "../../Loading/Loading";

function ProduktTilbud() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadedProductIds, setLoadedProductIds] = useState(new Set());
  const [initialLoad, setInitialLoad] = useState(false);
  const [initialProductsLoaded, setInitialProductsLoaded] = useState(false);

  const fetchProductsAndCategories = async () => {
    try {
      const response = await axios.get(Url.WORDPRESS_WOO_URL, {
        params: {
          on_sale: true,
        },
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

        if (!categories.length && response.data[0].categories) {
          setCategories(response.data[0].categories);
        }

        if (!initialProductsLoaded) {
          setInitialProductsLoaded(true);
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
      fetchProductsAndCategories();
    } else {
      setInitialLoad(true);
    }
  }, [page, initialLoad]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPage(1);
    setHasMore(true);
    setProducts([]);
    setLoadedProductIds(new Set());
    setInitialLoad(false);
    setInitialProductsLoaded(false);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) =>
        product.categories.some(
          (category) => category.slug === selectedCategory
        )
      )
    : products;

  return (
    <div>
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
         <Link to={`/category/${category.slug}`} key={category.id}
          
         className={`btn mx-2 ${
           selectedCategory === category.slug
             ? "btn-primary"
             : "btn-secondary"
         }`}
         onClick={() => handleCategorySelect(category.slug)}
         >
      
      
           {category.name}
        
         </Link>
        ))}
      </div>
         
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
            <div className="flex justify-between px-9 py-3">
              <div>
                <p className="line-through">{product.regular_price} kr.</p>
                <p className="text-lg font-bold -pl-12">
                  {product.sale_price} kr.
                </p>
              </div>
              <Link to={`/shop/${product.id}`} className="btn btn-primary">
                Se mere
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProduktTilbud;
