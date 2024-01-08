import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { Url } from "../../utils/Url";
import Loading from "../../Loading/Loading";
import ProduktlisteSettings from "./ProduktlisteSettings";

function Produktliste() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { categorySlug } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(
    categorySlug || null
  );
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadedProductIds, setLoadedProductIds] = useState(new Set());
  const [initialProductsLoaded, setInitialProductsLoaded] = useState(false);
  const location = useLocation();
  const [onSale, setOnSale] = useState(false); // New state for on_sale filter
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState("");

  const fetchProductsAndCategories = async () => {
    try {
      const params = { page };
      if (onSale) {
        params.on_sale = true; // Fetch only on-sale products if a category is selected
      }
      params.search = searchQuery; // Include search query if present

      const response = await axios.get(Url.WORDPRESS_WOO_URL, { params });

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
    fetchProductsAndCategories();
    // Other necessary logic
  }, [page, searchQuery, selectedCategory, ]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPage(1);
    setHasMore(true);
    setProducts([]);
    setLoadedProductIds(new Set());
   
    setInitialProductsLoaded(false);
  };

  const handleSelectChange = (event) => {
    const selectedSlug = event.target.value;
    if (selectedSlug === "all") {
      handleCategorySelect(null);
      navigate("/shop");
    } else {
      handleCategorySelect(selectedSlug);
      navigate(`/category/${selectedSlug}`);
    }
  };

  const handleOnSaleCheckboxChange = (event) => {
    const newOnSaleValue = event.target.checked;
    setOnSale(newOnSaleValue);
    setPage(1);
    setProducts([]);
    setLoadedProductIds(new Set());
    
    setInitialProductsLoaded(false);
  };

  // Funktion til at sortere produkter
  const sortProducts = (products, order) => {
    if (order === "billigste_først") {
      return [...products].sort(
        (a, b) =>
          parseFloat(a.price || a.sale_price) -
          parseFloat(b.price || b.sale_price)
      );
    } else if (order === "dyreste_først") {
      return [...products].sort(
        (a, b) =>
          parseFloat(b.price || b.sale_price) -
          parseFloat(a.price || a.sale_price)
      );
    }
    return products; // Returner produkterne som de er, hvis ingen sortering er valgt
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };



  const filteredProducts = useMemo(() => {
    return categorySlug
      ? products.filter(
          (product) =>
            product.categories &&
            product.categories.some(
              (category) => category.slug === categorySlug
            )
        )
      : products;
  }, [products, categorySlug]);
  

  // Sorter de filtrerede produkter
  const sortedAndFilteredProducts = useMemo(() => {
    return sortProducts(filteredProducts, sortOrder);
  }, [filteredProducts, sortOrder]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between my-4 md:items-end items-center">
        <div className="flex flex-col md:flex-row md:items-end grow ">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Filter</span>
          </div>
          <select
            className="select select-bordered"
            onChange={handleSelectChange}
            value={selectedCategory || "all"}
          >
            <option value="all">Alle Produkter</option>
            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        <div className=" flex md:pl-4 py-4 md:py-0">
          <input
            className="checkbox"
            type="checkbox"
            checked={onSale}
            onChange={handleOnSaleCheckboxChange}
            id="checkboxOnSale"
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="checkboxOnSale"
          >
            Vis kun tilbudsvarer
          </label>
        </div>
        </div>
        <div>
        <span className="label-text">Sorter</span>
        <select
          className="select select-bordered select-xs w-full max-w-xs"
          onChange={handleSortChange}
        >
          <option value="">Relevans</option>
          <option value="billigste_først">Billigste først</option>
          <option value="dyreste_først">Dyreste først</option>
        </select>
        </div>
      </div>

      <InfiniteScroll
        dataLength={products.length}
        next={fetchProductsAndCategories}
        hasMore={hasMore}
        loader={initialProductsLoaded ? <Loading /> : null}
        scrollThreshold={0.9}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedAndFilteredProducts.map((product) => (
            <div
              key={`${product.id}-${product.length} `}
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
