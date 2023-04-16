import React from "react";
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/' ><MdHome size='32px' /></Link>
      <Link to='/favs' ><MdFavoriteBorder size='32px' /></Link>
      <Link to='/users' ><MdPersonOutline size='32px' /></Link>
    </Nav>
  )
}
