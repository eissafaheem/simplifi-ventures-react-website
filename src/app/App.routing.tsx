import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home/Home';
import Layout from './layout/Layout';

function AppRouting() {

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children: [
              {
                path:"/",
                element: <Home/>
              }
            ]
        }
    ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouting
