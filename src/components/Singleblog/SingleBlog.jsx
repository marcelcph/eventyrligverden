import React, { useState, useEffect } from "react";
import BlogUrl from "../../utils/BlogUrl";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";
function SingleBlog() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${BlogUrl.WORDPRESS_BLOG_URL}/${blogId}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("error fecthing blog details", error);
      }
    };
    fetchBlog();
  }, [blogId]);

  if (!blog) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <div className="max-w-screen mx-auto p-5 sm:p-8 md:p-12 relative">
        <div className="max-w-full">
          <img
            src={blog.jetpack_featured_media_url}
            alt={blog.title.rendered}
            className="mx-auto w-auto h-[700px] rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-3xl mx-auto bg-none">
          <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
              <h1 href="#" className=" font-bold text-3xl mb-2">
                {blog.title.rendered}
              </h1>
              <p className="text-base leading-8 my-5">
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blog.content.rendered),
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
