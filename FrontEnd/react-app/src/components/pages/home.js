import React from 'react'
import { styled } from 'styled-components'
import cats from './cat.jpg'

const StyledHome = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Atur tinggi sesuai kebutuhan */

  .img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
  }
  .hello1{
    margin-right:2rem;
  }
  .hello2{
    margin-left:2rem;
  }
`
const Home = () => {
  return (
      <div>
        <StyledHome>
          <h1 className='hello1'>Hello, Welcome </h1>
            <img src={cats} className='img'></img>
          <h1 className='hello2'> To Home ❤</h1>
        </StyledHome>
      </div>
  )
}

export default Home