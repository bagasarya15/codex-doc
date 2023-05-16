import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const SidebarStyled = styled.aside`
background-color:#f7f7f7;
ul{
  list-style-type:none;
}
ul li a{
  display: inline-block;
  text-decoration: none;
  width: 60%;
  padding: 0 .75rem 1rem;
  color: #212f54;
  border-bottom:solid 1px rgba(255,255,255,.5rem);
  transition: 0ms .14s ease-in-out;
}
li a:over{
  color:#36bae6;
  background:#e0e5eb;
}
`
function Sidebar() {
  return (
    <SidebarStyled>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/product">Produk</Link></li>
        <li><Link to="/latihan">UseEffect</Link></li>
        <li><Link to="/data-object">Data Object</Link></li>
        <li><Link to="/parent">Parent Class</Link></li>
      </ul>
    </SidebarStyled>
  )
}

export default Sidebar