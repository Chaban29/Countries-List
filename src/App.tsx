import { FC } from 'react';
import { CountriesApp } from './components/CountriesApp/CountriesApp';
import './App.css';
import { Box } from '@mui/material';

export const App: FC = () => {
  return (
    <Box className='app__container'>
      <h1 id='app__title'>Welcome to Countries List</h1>
      <CountriesApp />
    </Box>
  );
};
