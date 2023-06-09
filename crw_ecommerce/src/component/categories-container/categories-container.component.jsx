import React from 'react'
import "./categories-container.style.scss"
import CategoryItem from "../category-item/Category-item.component"

const CategoriesContainer = ({categories}) => {
  return (
    <div className='categories-container'>
    { categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
))}
  
   
  </div>
  )
}

export default CategoriesContainer