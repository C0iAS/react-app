import React, { useContext, useEffect, Suspense } from 'react';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';
import { Home } from './pages/Home';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
//import  Favs from './pages/Favs';
import { Users } from './pages/Users';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { Context } from './Context';
import { NotFound } from './pages/NotFound';

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {

  const { isAuth } = useContext(Context)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (isAuth && location.pathname === '/users/login') {
      navigate('/users', { replace: true })
    } else if (isAuth && location.pathname === '/favs/login') {
      navigate('/favs', { replace: true })
    }
  }, [isAuth, location.pathname, navigate])

  useEffect(() => {
    if (!isAuth && location.pathname === '/users') {
      navigate('/users/login', { replace: true })
    } else if (!isAuth && location.pathname === '/favs') {
      navigate('/favs/login', { replace: true })
    }
  }, [isAuth, location.pathname, navigate])

  return (
    <React.Fragment>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favs/login" element={<NotRegisteredUser />} />
        <Route path="/users/login" element={<NotRegisteredUser />} />
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


