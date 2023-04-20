import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles.js'
import { MdHourglassEmpty } from "react-icons/md";

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(function () {
    setloading(true)
    window.fetch('https://petgram-server-coias-c0ias.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setloading(false)
      })
  }, [])
  return { categories, loading }
}

const ListOfCategoriesComponents = () => {
    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)

    useEffect(function() {
      const onScroll = e => {
        const newShowFixed = window.scrollY > 200
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }
      document.addEventListener('scroll', onScroll)

      return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}> 
      {
        loading? <Item key='loading'><MdHourglassEmpty size='24px' /></Item>
        : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponents)
