// src/pages/CreatePost.tsx
import React, { useState } from 'react';
import { createPost } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import PostForm from '../components/PostForm';
import { PostCreate } from '../types/Post';

const CreatePost: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (post: PostCreate) => {
    setLoading(true);
    try {
      await createPost(post);
      navigate('/');
    } catch (err) {
      setError('Erro ao criar post');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Criar Novo Post
      </Typography>
      <PostForm
        onSubmit={handleSubmit}
        buttonLabel="Criar Post"
      />
    </Container>
  );
};

export default CreatePost;
