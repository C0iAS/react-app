import React from "react";
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { useParams } from 'react-router-dom'
import { Helmet } from "react-helmet";

function HomePage () {
  const { id } = useParams()

  return (
    <React.Fragment>
      <Helmet>
        <title>Petgram - pets photos app</title>
        <meta name="description" content="pets photos"/>
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </React.Fragment>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

