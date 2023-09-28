import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Services from './Component/Home/Services/Services';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element:
          <Home></Home>

      },
      {
        path: "/service",
        element: <Services></Services>,
      
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
