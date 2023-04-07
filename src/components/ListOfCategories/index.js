import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles.js'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(function () {
    window.fetch('https://petgram-server-coias-c0ias.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
