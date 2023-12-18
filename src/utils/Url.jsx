const Url = {
  WORDPRESS_WOO_URL:
    import.meta.env.VITE_REACT_APP_WORDPRESS_URL +
    "/wp-json/wc/v3/products?consumer_key=" +
    import.meta.env.VITE_REACT_APP_CONSUMER_KEY +
    "&consumer_secret=" +
    import.meta.env.VITE_REACT_APP_CONSUMER_SECRET,
};

export default Url;
