
import React from 'react'
import "./categories.styles.scss"

import CategoriesContainer from "./component/categories-container/categories-container.component.jsx"
import categories from "./data/categories.json"
const App = () => {


  return (
   <>
   <CategoriesContainer categories={categories} />
   </>
  )
}

export default App