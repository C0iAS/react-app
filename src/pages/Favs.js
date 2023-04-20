import React from 'react'
import { useGetFavorite } from '../container/GetFavorites'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export  default () => {
    const { data, loading, error } = useGetFavorite()

    if (loading) return 'loading...'
    if (error) return 'error'

    return <Layout title='Favorites' subtitle='Here you can find your favorites'>
       <ListOfFavs favs={data.favs} />
    </Layout>
}
