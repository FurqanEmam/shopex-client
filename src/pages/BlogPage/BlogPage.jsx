import React from "react";
import SmallBlogs from "./SmallBlogs";
import Blogs from "./Blogs";

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Blogs />
      </div>
      <div>
        <SmallBlogs />
      </div>
    </div>
  );
};

export default BlogPage;
