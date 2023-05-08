import React from 'react'
import CategoriesContainer from '../../categories-container/categories-container.component'
const Home = ({categories}) => {
  return (
    <div>  <CategoriesContainer categories={categories} /></div>
  )
}

export default Home