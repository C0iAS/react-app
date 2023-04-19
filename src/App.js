import React, { useContext } from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { Users } from './pages/Users'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Context } from './Context'

export const App = () => {

  const { isAuth } = useContext(Context)
  
  return (
    <React.Fragment>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        {isAuth ? (
          <>
            <Route path="/favs" element={<Favs />} />
            <Route path="/users" element={<Users />} />
          </>
        ) : (
          <>
            <Route path="/favs" element={<NotRegisteredUser />} />
            <Route path="/users" element={<NotRegisteredUser />} />
          </>
        )}
      </Routes>
      <NavBar />
    </React.Fragment>
  );
}



