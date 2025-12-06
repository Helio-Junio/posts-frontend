import React from 'react';
import { Button } from '@mui/material';
import { logout } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleLogout}
      sx={{ marginLeft: '80%' }}
    >
      Sair
    </Button>
  );
};

export default LogoutButton;
