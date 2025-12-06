
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        404 - Página não encontrada
      </Typography>
      <Typography variant="body1" gutterBottom>
        A página que você está procurando não existe ou foi removida.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
      >
        Voltar para a Home
      </Button>
    </Container>
  );
};

export default NotFound;
