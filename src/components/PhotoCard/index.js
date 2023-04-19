import React from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const { likeAPhoto } = useToggleLikeMutation();
  const handleFavClick = () => {
    likeAPhoto({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={element}>
      {show && (
        <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
        </React.Fragment>
      )}
    </Article>
  );
}
