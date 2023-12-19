import { useState, useEffect } from "react";
import BlogSettings from "./BloglistSettings";
import axios from "axios";
import BlogUrl from "../../utils/BlogUrl";

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("da-DK", options);
}

function Bloglist() {
  const [blogPosts, setBlogPosts] = useState([]);

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
      }
    } catch (error) {
      console.error("Error fetching blog posts", error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <>
      <section className="">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-center text-6xl pb-5">{BlogSettings.title}</h1>
          <p className="text-center text-md">{BlogSettings.beskrivelse}</p>
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
                <p>
                  {/* Render formatted date */}
                  {blogPost.date}
                </p>
                <button href={blogPost.link} className="btn btn-primary mt-4">
                  {BlogSettings.knaptekst}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Bloglist;
