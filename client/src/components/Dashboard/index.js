import React from "react"
import './style.css'


export default function Dashboard() {

    return (
        <div className="page-wrapper">

            <div className="left-menu-wrapper">
                <div className='title navbar-item'>To-do list</div>
                <div className="left-menu">
                </div>
            </div>
            <div className="content-wrapper">
                <div className="navbar">
                    <div className='search navbar-item'>Search</div>
                    <div className='logout navbar-item'>Logout</div>
                </div>
                <div className="content">

                </div>
            </div>
            {/* <Navbar />
            <div className="content-wrapper">

            </div> */}
        </div>
    )
}