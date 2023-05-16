import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'


const NavBar = styled.section`
  .logo{
    max-width:80px;
    padding:1px;
  }
  position:sticky;
  top:0;
  z-index:99;
  height:48px;
  width:100%;
  background-color:#fff;
  border-botton:1px solid #eBeSeb;
  box-shadow:0px 1px 5px #223055;

  display:flex;
  align-items:center;
  justify-content:space-between;

  input#navToggle{
    display:none;
  }
  
  input#navToggle ~ label{
    position:relative;
    padding:0.25rem;
    width:2rem;
    height:1.25rem;
    height:2rem;
  }
  input#navToggle ~ label > span,
  input#navToggle ~ label > span::before,
  input#navToggle ~ label > span::after{
    content:"";
    position:absolute;
    top:0.75rem;
    height:0.125rem;
    width:1.75rem;
    opacity:1;
    background:#212f54;
    transition:0.14s ease-in-out;
  }
  input#navToggle ~ label > span::before{
    top:-0.5rem;
  }
  input#navToggle ~ label > span::after{
    top:0.5rem;
  }
  input#navToggle:checked ~ label > span{
    width:0;
    background:rgba(18,18,18,0);
  }
  input#navToggle:checked ~ label > span::before{
   transform:rotateZ(45deg);
   top:0;
  }
  input#navToggle:checked ~ label > span::after{
    transform:rotateZ(-45deg);
   top:0;
  }
  input#navToggle:checked ~ nav{
    left:0;
  }
  nav{
    position:absolute;
    z-index:-1;
    top:3.0rem;
    left:-110%;
    width:100%;
    transition:0.22s ease-in-out;
  }
  nav::after{
    content:"";
    position:absolute;
    top:0;
    z-index:-1;
    height:100vh;
    width:95vw;
    background-color:#fff;
    background-size:cover;
  }
  nav ul{
    list-style-type:none;
  }
  nav ul li a{
    display:inline-block;
    text-decoration:none;
    width:100%;
    padding:.75rem 1rem;
    color:#212f54;
    border-bottom:solid 1px rgba(255,255,255,.5);
    transition:0.14s ease-in-out;
  }

  nav ul li:last-of-type::before{
    content:"";
    display:block;
    padding:.5rem;
  }

  nav .btn{
    background:#fff;
    border-botton:none;
    border-radius:4px;
    box-shadow:inset 0 0 5px #eeb80c;
    color:#223054;
    width:40%;
    padding:0.25rem .6rem;
    letter-spacing:1px;
    text-shadow:0 0 1px rgb(19,177,231);
    text-align:center;
    display:flex;
    justify-content:center;
    margin:auto;
  }
  nav .btn::hover{
    background-color:#223045;
    box-shadow:inset 0 0 5px #13b1e7;
    color:#fff;
  }

  @media(min-width:768px){
    display:grid;
    grid-template-columns:100px minmax(auto,1100px);
    justify-content:center;
    height:auto;

    .navToggleLabel{
        display:none;
    }
    nav{
       position:initial;
    }
    nav ul{
       display:flex;
       justify-content:flex-end;
       align-items:center;
    }
    nav ul li a{
       border-bottom:none;
    }
    nav ul li a::hover{
       backgorung:transparent;
    }

    nav::after,nav ul li:last-of-type::before{
        display:none;
        padding:initial;
    }
    nav .btn{
        width:auto;
        background:#13b1e7;        
        color:#fff;       
        letter-spacing:normal;
        text-shadow:none;
        box-shadow:none;
        
      }

    nav .btn:hover{
        box-shadow:inset 0 0 5px #13b1e7;
        background-color:#223054;
     }
  }


  `

function Nav() {
  
  return (
  <NavBar>
    <img className="logo" src="../../codex.png" alt="logo codex" /> 
    <input type="checkbox" id="navToggle" className="navToggle" />
<label for="navToggle" className="navToggleLabel" ><span></span></label>
<nav> 
  <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/calculator">Calculator</Link></li>
    <li><Link to="/product">Produk</Link></li>
    <li><Link to="/latihan">UseEffect</Link></li>
    <li><Link to="/data-object">Data Object</Link></li>
    <li><Link to="/parent">Parent Class</Link></li>
    {/* <li><a href="#contact">Contact</a></li> */}
    {/* <li><Link to="" className="btn">Sign In</Link></li> */}
  </ul>
</nav>
  </NavBar>
  )
}

export default Nav