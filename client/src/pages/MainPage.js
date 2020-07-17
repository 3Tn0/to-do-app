import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
    return (
        <div>
            <h1>Welcome</h1>
            <div><Link to="/login">Login</Link></div>
            <div><Link to="/register">Register</Link></div>
        </div>
    )
}