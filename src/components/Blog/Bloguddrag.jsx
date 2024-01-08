import React, { useState, useEffect } from "react";
import BlogSettings from "./BloglistSettings";
import axios from "axios";
import BlogUrl from "../../utils/BlogUrl";
import { Link } from "react-router-dom";

function Bloguddrag() {
  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("da-DK", options);
  }
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  // Function to fetch blog posts
  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(BlogUrl.WORDPRESS_BLOG_URL, {
        params: { page: 1 },
      });

      if (response.data.length > 0) {
        // Format date before setting it in the state
        const formattedBlogPosts = response.data.map((post) => ({
          ...post,
          date: formatDate(post.date),
        }));

        setBlogPosts(formattedBlogPosts);
        setLoading(false); // Set loading to false after data is fetched
      }
    } catch (error) {
      console.error("Error fetching blog posts", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <>
      <section className="bg-secondary rounded-lg shadow-2xl mb-5">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-center  pb-5">
            {BlogSettings.uddragtitle}
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.slice(0, 3).map((blogPost) => (
              <div key={blogPost.id}>
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src={blogPost.jetpack_featured_media_url}
                    alt={blogPost.title.rendered}
                  />
                </div>
                <h2 className="mt-6">
                  {blogPost.title.rendered}
                </h2>
                <p>
                  {/* Render formatted date */}
                  {blogPost.date}
                </p>
                <Link
                  to={`/blog/${blogPost.id}`}
                  
                ><button className=" mt-4">
                  {BlogSettings.uddragknaptekst}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Bloguddrag;
