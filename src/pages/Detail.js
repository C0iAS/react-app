import React from "react";
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";

export const Detail = () => {
  const { id } = useParams()
  
  return <Layout title={`Photo ${id}`}>
    <PhotoCardWithQuery id={id} />
  </Layout>
}
