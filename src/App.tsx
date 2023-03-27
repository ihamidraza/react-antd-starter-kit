import { useState, useCallback } from 'react'
import { useRoutes } from "react-router-dom";

import { Navigation } from './components'
import { Home, Login, Register, NotFound, NotPermitted, Chat } from './pages';
import { initiateInterceptors } from './utils'

initiateInterceptors()

export default function App() {

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const isLoggedIn = !!sessionStorage.getItem('appToken') || true

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

  if(!isLoggedIn) return useRoutes(authRoutes)

  const permittedRoutes = [
    {
      path: "/",
      element: <Navigation onLogout={forceUpdate} />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/chat",
          element: <Chat />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
    ] 
    


  return  useRoutes(permittedRoutes)

 
}