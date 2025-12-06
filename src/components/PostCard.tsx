// src/components/PostCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Post } from '../types/Post';

interface PostCardProps {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{post.titulo}</Typography>
        <Typography variant="body2" color="text.secondary">
          Publicado por: {post.username}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {post.conteudo}
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => onDelete(post.id)}
          sx={{ marginTop: 1 }}
        >
          Deletar
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostCard;
