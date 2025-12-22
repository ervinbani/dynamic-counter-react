// src/components/BlogIndexPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

const BlogIndexPage: React.FC = () => (
  <div>
    <h2>Blog Posts</h2>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default BlogIndexPage;
