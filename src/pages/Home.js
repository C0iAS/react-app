import React from "react";
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { useParams } from 'react-router-dom'
import { Helmet } from "react-helmet";

export function Home () {
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
