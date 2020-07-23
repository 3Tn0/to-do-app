import React from "react"
import './style.css'
import TasksList from '../TasksList'

export default function Dashboard() {

    return (
        <>
            <div className="header">
                <div className='header__title navbar-item'>To-do list</div>
                <div className='header__search navbar-item'>Search</div>
                <div className='header__logout navbar-item'>Logout</div>
            </div>
            <div className="left-menu"></div>
            <div className="content-wrapper">
                <TasksList />
            </div>

        </>
    )
}