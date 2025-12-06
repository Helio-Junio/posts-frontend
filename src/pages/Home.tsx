// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { getPosts, deletePost } from '../services/api';
import { Post } from '../types/Post';
import PostCard from '../components/PostCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError('Erro ao buscar posts');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      setError('Erro ao deletar post');
    }
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Container>
      <Button onClick={() => navigate('/create')}>Criar Post</Button>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={handleDelete} />
      ))}
      <LogoutButton />
    </Container>
  );
};

export default Home;
