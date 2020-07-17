import React, { useEffect, useState } from 'react';
import { useRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import { connect } from 'react-redux'
import { setUser } from './redux/actions'

function App(props) {

  const { login, logout, token, userId } = useAuth()

  const isAuthenticated = !!token

  console.log(isAuthenticated)

  const routes = useRoutes(isAuthenticated)
  
  props.setUser({ login, token, userId })

  return (
    <BrowserRouter>
      <div>
        {routes}
      </div>
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  setUser
}

export default connect(null, mapDispatchToProps)(App);
