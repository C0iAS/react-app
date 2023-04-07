import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavorite size='24px'/>{likes} likes! 
      </Button>
    </article>
)}
