import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faYoutube, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const FooterStyled = styled.footer`
  .social, .contactInfo{
    background-color: #F7F7F7;
    color: #222222;
    padding: 1rem 1rem 0;
    text-align:center;
  }
  .social h3{
    border-bottom: solid 1px #b6e8ff;
    font-weight: 400;
    padding-bottom: .25rem;
  }
  .socialIcons{
    font-size: 200%;
    padding: 1rem 0;
  }
  .socialIcons a{
    color:#223055;
    padding: 0, .5rem;
  }
  .socialIcong a:hover{
    color: #ffc107;
  }
  .contactInfo{
    padding-top:0;
  }
  .contactInfo article{
    border-bottom: solid 1px #b6d8ff;
    padding: 1rem 0;
  }
  .contactInfo h4{
    font-weight: 350;
  }
  .contactInfo li{
    font-weight: 300;
    list-style-type:none;
  }
  .copy{
    font-size: 70%;
    font-weight: 300;
    padding-top: 1rem;
  }
  .class-yt, .class-ig{
    margin: 0px 10px;
  }
`
const Footer = () => {
  return (
    <FooterStyled>
      <section className='social' id="contact">
        <article>
          <h3>Let's be social connect with us</h3>
          <div className='socialIcons'>
            <a href=''><FontAwesomeIcon icon={faFacebook}/></a>
            <a className="class-ig" href=''><FontAwesomeIcon icon={faInstagram}/></a>
            <a href=''><FontAwesomeIcon icon={faTwitter}/></a>
            <a className="class-yt" href=''><FontAwesomeIcon icon={faYoutube}/></a>
            <a href=''><FontAwesomeIcon icon={faLinkedinIn}/></a>
          </div>
        </article>
      </section>

        <section className='contactInfo'> 
          <article>
            <h4>Contact Information</h4>
            {/* <ul> */}
              <li>Phone : 0812-8571-1519</li>
              <li>Email : bagas@codex.id</li>
              <li>Addres: Sentul City</li>
            {/* </ul> */}
            <p className='copy'>Bagas x Codex &copy; 2023</p>
          </article>
        </section>
    </FooterStyled>
  )
}

export default Footer