import { useState, useCallback } from 'react'
import { useRoutes } from "react-router-dom";

import { Home, Login, Register, NotFound, NotPermitted } from './pages';
import { initiateInterceptors } from './utils'

initiateInterceptors()

export default function App() {

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const isLoggedIn = !!sessionStorage.getItem('appToken')

  console.log({ isLoggedIn })

  const authRoutes = [
    {
      path: "/",
      element: <Login onLogin={forceUpdate} />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "*",
      element: <NotPermitted />
    }
  ]

  const permittedRoutes = [
    {
      path: "/",
      element: <Home onLogout={forceUpdate} />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]

  const currentRoutes = isLoggedIn ? permittedRoutes : authRoutes

  const routes = useRoutes(currentRoutes);

  return routes
}