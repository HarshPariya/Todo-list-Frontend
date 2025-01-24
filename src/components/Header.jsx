import React from 'react'
// import Footer from './Footer'
// import Contact from './Contact'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div> 
      <h1>Harsh</h1>
<Link to='/home'>Goto home page</Link>   
<Link to='/new'>Goto new page</Link>   

 </div>
 
  )
}

export default Header