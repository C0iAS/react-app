import React from 'react'
import { gql, useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`
export const useToggleLikeMutation = () => {
  const [likeAnonymousPhoto, { loading, error }] = useMutation(LIKE_PHOTO);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return {likeAnonymousPhoto, loading, error}
}


