import React from 'react'
import { Fragment } from 'react'
import { Outlet,Link } from 'react-router-dom'

import classes from "./navigation.module.css"

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'

const Navigation = () => {
  return (
<Fragment>
        <div className={classes.navigation}>
            <Link className={classes["logo-container"]} to="/">
            <CrwnLogo className={classes.logo}/>
            </Link>
         
           <div className={classes["nav-link-container"]}>
            <Link  className={classes["nav-link"]}to="/shop">
                SHOP
            </Link> 
            <Link  className={classes["nav-link"]}to="/sign-in">
                SIGN-IN
            </Link> </div>
            
        </div>
        <Outlet/>
</Fragment>
     
   
  )
}

export default Navigation