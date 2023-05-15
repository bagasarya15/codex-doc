import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../../App.css'

const Layout = (props) => {
    return (
        <>
        <div className='body-layout'>
            <ul className='ul-class'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/calculator">Calculator</Link></li>
                <li><Link to="/product">Produk</Link></li>
                <li><Link to="/latihan">Latihan</Link></li>
                <li><Link to="/data-object">Data Object</Link></li>
                <li><Link to="/parent">Parent Class</Link></li>
            </ul>
        </div>

        <div>
            {<Outlet/>}
        </div>
        </>
    )
}

export default Layout