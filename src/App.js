import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { Users } from './pages/Users'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import Context from './Context'

export const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
      <Context.Consumer>
        {
          ({ isAuth }) =>
          isAuth ? 
          <Routes>
            <Route path="/favs" element={<Favs />}/>
            <Route path="/users" element={<Users />}/>
          </Routes> :
          <Routes>
            <Route path="/favs" element={<NotRegisteredUser />}/>
            <Route path="/users" element={<NotRegisteredUser />}/>
          </Routes>
        }
      </Context.Consumer>
      
      <NavBar/>
    </BrowserRouter>
  );
}



