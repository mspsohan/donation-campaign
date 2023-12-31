import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ErrorPage from './pages/errorpage/ErrorPage'
import Home from './pages/home/Home'
import AllDonation from './pages/AllDontion/AllDonation'
import Statistics from './pages/Statistics/Statistics'
import DonationDetail from './pages/DonationDetail/DonationDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donations",
        element: <AllDonation></AllDonation>,
      },
      {
        path: "/donation/:id",
        element: <DonationDetail></DonationDetail>,
        loader: ()=> fetch("https://mspsohan.github.io/donation_campaign/donation_campaign.json")
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
