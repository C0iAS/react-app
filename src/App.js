import React, { useContext, useEffect } from 'react';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';
import { Home } from './pages/Home';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
import { Favs } from './pages/Favs';
import { Users } from './pages/Users';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { Context } from './Context';
import { NotFound } from './pages/NotFound';

export const App = () => {

  const { isAuth } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuth && location.pathname === '/login') {
      navigate('/', { replace: true });
    }
  }, [isAuth, location.pathname, navigate]);

  useEffect(() => {
    if (!isAuth && (location.pathname === '/favs' || location.pathname === '/users')) {
      navigate('/login', { replace: true });
    }
  }, [isAuth, location.pathname, navigate]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<NotRegisteredUser />} />
        { isAuth &&
          <>
            <Route path="/favs" element={<Favs />} />
            <Route path="/users" element={<Users />} />
          </>
        }
      </Routes>
      <NavBar />
    </React.Fragment>
  );
}


