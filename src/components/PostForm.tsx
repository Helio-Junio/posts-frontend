// src/components/PostForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { PostCreate } from '../types/Post';

interface PostFormProps {
  initialData?: PostCreate;
  onSubmit: (post: PostCreate) => void;
  buttonLabel: string;
}

const PostForm: React.FC<PostFormProps> = ({
  initialData = { titulo: '', conteudo: '' },
  onSubmit,
  buttonLabel,
}) => {
  const [titulo, setTitulo] = useState(initialData.titulo);
  const [conteudo, setConteudo] = useState(initialData.conteudo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ titulo, conteudo });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Conteúdo"
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default PostForm;
