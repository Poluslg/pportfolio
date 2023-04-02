import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Treams from './Components/Treams';
import Errorpage from './Components/Errorpage'


const router = createBrowserRouter([
  {
    path: "*",
    element: <Errorpage />,
  },
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/treams",
    element: <Treams />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
