import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home';
import Layout from './layout/Layout';
import Team from './pages/team/Team';
import Resources from './pages/resources/Resources';
import Studio from './pages/studio/Studio';

export const ROUTES = {
  team: "/team",
  home: "/",
  studio: "/studio",
  resources: "/resources"
}

function AppRouting() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: ROUTES.home,
          element: <Home />
        },
        {
          path: ROUTES.team,
          element: <Team/>
        },
        {
          path: ROUTES.resources,
          element: <Resources/>
        },
        {
          path: ROUTES.studio,
          element: <Studio/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default AppRouting
