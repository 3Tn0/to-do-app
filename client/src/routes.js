import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MainPage from './pages/MainPage'
import Dashboard from './components/Dashboard/'


export const useRoutes = isAuthenticated => {

    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/tasks" exact>
                    <Dashboard />
                </Route>
                <Redirect to="/tasks" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <MainPage />
            </Route>
            <Route path="/login" exact>
                <LoginPage />
            </Route>
            <Route path="/register" exact>
                <RegisterPage />
            </Route>
            {/* <Redirect to="/" /> */}
        </Switch>
    )

}