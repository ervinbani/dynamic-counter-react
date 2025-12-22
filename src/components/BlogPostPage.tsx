// src/components/BlogPostPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../lib/posts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
