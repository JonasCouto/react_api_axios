import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//paginas
import Home from './routes/Home'
import NewPost from './routes/NewPost'
import HomeCar from './routes/HomeCar'
import NewCarro from './routes/NewCarro'

const router = createBrowserRouter([
  {
   element: <App/>,
   children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/new',
      element: <NewPost />
    },
    {
      path: '/novoCarro',
      element: <NewCarro />
    },
    {
      path: '/newCar',
      element: <HomeCar />
    },
   ]
  }

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
