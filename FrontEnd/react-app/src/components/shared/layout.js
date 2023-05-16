import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../../App.css'
import styled from 'styled-components'
import Header from '../shared/header'
import Nav from '../shared/nav'
import Sidebar from '../shared/sidebar'
import Main from '../shared/main'
import Footer from '../shared/footer'

const Layout = (props) => {
    const MainSidebar = styled.div`
        display:grid;
        margin:1rem auto;
        grind-template-columns:180px 2fr;
        grind-template-areas:"aside main main";

        aside{
            grind-area:aside;
        }

        main{
            grind-area:main;
        }
        
        `
    return (
        <>
        <div>
            <Header/>
            <Nav/>
            <MainSidebar>
                <Sidebar/>
                <Main>
                    {<Outlet/>}
                </Main>
            </MainSidebar>
                <Footer/>
        </div>
        </>
    )
}

export default Layout