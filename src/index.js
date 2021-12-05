import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { Menu, PrivateRoute, PublicRoute } from './components';
import { Home, Chat, Profile, Gists, Login, SignUp } from './pages';
import { firebaseApp } from "./api/firebase";
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

const user = 'test user';

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = !!session?.email;

  console.log('session', session?.email);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Menu session={session} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={
              <PrivateRoute isAuth={isAuth}>
                <Profile />
              </PrivateRoute>
            }
            />
            <Route path="/chat/*" element={
              <PrivateRoute isAuth={isAuth}>
                <Chat />
              </PrivateRoute>
            }
            />
            <Route path="/gists" element={
              <PrivateRoute isAuth={isAuth}>
                <Gists />
              </PrivateRoute>
            }
            />
            <Route path="/login" element={
              <PublicRoute isAuth={isAuth}>
                <Login />
              </PublicRoute>
            }
            />
            <Route path="/sign-up" element={
              <PublicRoute isAuth={isAuth}>
                <SignUp />
              </PublicRoute>
            }
            />
            <Route path="/*" element={<h3>404</h3>} />
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