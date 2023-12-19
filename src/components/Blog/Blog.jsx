import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogUrl from "../../utils/BlogUrl";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  // Function to fetch blog posts
  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(BlogUrl.WORDPRESS_BLOG_URL, {
        params: { page: 1 }, // Load only page 1
      });

      if (response.data.length > 0) {
        setBlogPosts(response.data);
      }
    } catch (error) {
      console.error("Error fetching blog posts", error);
    }
  };

  useEffect(() => {
    // Fetch blog posts on initial load
    fetchBlogPosts();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <section className="">
        <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((blogPost) => (
              <div key={blogPost.id}>
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src={blogPost.jetpack_featured_media_url}
                    alt={blogPost.title.rendered}
                  />
                </div>
                <h1 className="mt-6 text-xl font-semibold">
                  {blogPost.title.rendered}
                </h1>
                <hr className="w-32 my-6" />
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogPost.excerpt.rendered,
                  }}
                />
                <a href={blogPost.link} className="inline-block mt-4 underline">
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
