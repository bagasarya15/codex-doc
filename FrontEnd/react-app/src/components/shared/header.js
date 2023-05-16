import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Hero = styled.div`
  background: url("../../kucing.jpg") no-repeat center;
  background-size: cover;
  color: #FFFF;
  font-size: 20px;
  text-align: center;
  display: grid;
  grid-template-columns: 10px 2fr 10px; 
  grid-template-rows: .5fr 1fr 20px;
  grid-gap: 20px;
  height: 100vh;
  
  img {
    margin: auto;
    padding-top: 1rem;
    grid-column: 2/3;
    grid-row: 1/2; 
    height: 165px;
  }
  
  article {
    grid-column: 2/3;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  article p {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    color: #fff;
    justify-self: center;
  }
  
  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    justify-items: center;
    align-items: center;
    color: #fff;
    justify-self: center;
  }
  
  button {
    background-color: #FFF;
    border-radius: 4px;
    border: #FFF;
    color: #2abadf;
    font-size: 1rem;
    padding: 5px 10px;
    margin: .72rem auto 0;
    cursor: pointer;
    justify-self: center; 
  }
`

function Header() {
  return (
    <Hero>
      <article>
        <h2>
          Hello, Welcome to My Landing Page
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>Getting Started<FontAwesomeIcon icon={faAngleDoubleRight}/></button>
      </article>
    </Hero>
  )
}

export default Header
