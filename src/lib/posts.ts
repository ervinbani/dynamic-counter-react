// src/lib/posts.ts
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: 'my-first-post',
    title: 'My First Post',
    content: 'Welcome to my first blog post! This is a simple example.'
  },
  {
    id: 2,
    slug: 'react-router-tips',
    title: 'React Router Tips',
    content: 'Learn how to use React Router for dynamic routing in your apps.'
  },
  {
    id: 3,
    slug: 'protected-routes',
    title: 'Protected Routes in React',
    content: 'This post explains how to create protected routes using React Context.'
  }
];
