import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './routes/HomePage/Homepage'
import Dashboard from './routes/Dashboard/Dashboard'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage/>
    ),
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
