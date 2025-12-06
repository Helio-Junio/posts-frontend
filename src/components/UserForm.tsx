// src/components/UserForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { UserRegister } from '../types/User';

interface UserFormProps {
  onSubmit: (user: UserRegister) => void;
  buttonLabel: string;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, buttonLabel }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username, email, password });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default UserForm;
