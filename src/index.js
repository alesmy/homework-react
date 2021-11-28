import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { Menu } from './components';
import { Home, Chat, Profile } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './store';

import './index.css';

const light = createTheme({
  theme: {
    color: '#fff',
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile/' element={<Profile />} />
            <Route path='/chat/*' element={<Chat />} />
            <Route path='/*' element={<h3>404</h3>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

ReactDOM.render(
  <ThemeProvider theme={light}>
    <App />
  </ThemeProvider >,
  document.getElementById('root'));