// src/pages/PostDetails.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, deletePost } from '../services/api';
import { Post } from '../types/Post';
import { Container, Typography, Button, CircularProgress, Alert } from '@mui/material';

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!id) {
          throw new Error('ID do post não encontrado');
        }
        const data = await getPostById(Number(id));
        setPost(data);
      } catch (err) {
        setError('Erro ao buscar detalhes do post');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      if (!id) {
        throw new Error('ID do post não encontrado');
      }
      await deletePost(Number(id));
      navigate('/');
    } catch (err) {
      setError('Erro ao deletar post');
    }
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container>
        <Alert severity="warning">Post não encontrado</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {post.titulo}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Publicado por: {post.username}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {post.conteudo}
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={handleDelete}
        sx={{ mt: 2 }}
      >
        Deletar Post
      </Button>
    </Container>
  );
};

export default PostDetails;
