import ProduktlisteSettings from "./ProduktlisteSettings";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Url } from "../../utils/Url";
import Loading from "../../Loading/Loading";

function Produktliste() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadedProductIds, setLoadedProductIds] = useState(new Set());
  const [initialLoad, setInitialLoad] = useState(false);
  const [initialProductsLoaded, setInitialProductsLoaded] = useState(false);
  const { categorySlug } = useParams();

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

  const filteredProducts = categorySlug
    ? products.filter((product) =>
        product.categories.some(
          (category) => category.slug === categorySlug
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

      <InfiniteScroll
        dataLength={products.length}
        next={fetchProductsAndCategories}
        hasMore={hasMore}
        loader={initialProductsLoaded ? <Loading /> : null}
        scrollThreshold={0.9}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card shadow-xl flex flex-col bg-accent relative"
            >
              <figure className="relative">
                <img
                  className="max-w-full h-auto"
                  src={product.images[0].src}
                  alt={product.name}
                />
                {product.on_sale && (
                  <div className="absolute top-0 left-0 bg-primary text-secondary px-2 py-1 font-bold rounded-full text-xl mt-3 ml-3">
                    {ProduktlisteSettings.tilbudtekst}
                  </div>
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title -mb-12">{product.name}</h2>
              </div>
              <div className="flex justify-between p-8">
                {product.on_sale ? (
                  <div>
                    <p className="line-through">{product.regular_price} kr.</p>
                    <p className="text-lg font-bold -pl-12">
                      {product.sale_price} kr.
                    </p>
                  </div>
                ) : (
                  <p className="text-lg font-bold">{product.price} kr.</p>
                )}
                <Link to={`/shop/${product.id}`} className="btn btn-primary">
                  Se mere
                </Link>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Produktliste;
