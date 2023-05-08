
import React from 'react'
import "./categories.styles.scss"


import categories from "./data/categories.json"
import Home from './component/routes/home/Home.component'
import Shop from './component/routes/shop/Shop.component'
import {Routes, Route} from "react-router-dom"
import Navigation from './component/routes/navigation/Navigation.component'
import SignIn from './component/routes/sign-in/SignIn.component'
const App = () => {


  return (

<Routes>

  <Route path="/" element={<Navigation/>}>
  <Route index element={  <Home categories={categories}/>}/>
  <Route path="/shop" element={<Shop/>} />
  <Route path="/sign-in" element={<SignIn/>} />

  </Route>
 

 
 
</Routes>


  )
}

export default App