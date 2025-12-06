// src/pages/Register.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth';
import { Container, Typography } from '@mui/material';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import UserForm from '../components/UserForm';

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (user: { username: string; email: string; password: string }) => {
    setLoading(true);
    try {
      await register(user);
      navigate('/login');
    } catch (err: any) {
      console.error('Erro ao registrar usuário:', err);
      let errorMessage = 'Erro ao cadastrar usuário';
      if (err.response) {
        errorMessage = err.response.data;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Cadastrar Usuário
      </Typography>
      <UserForm
        onSubmit={handleSubmit}
        buttonLabel="Cadastrar"
      />
    </Container>
  );
};

export default Register;
