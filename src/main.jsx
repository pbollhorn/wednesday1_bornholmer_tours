import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import FindBook from "./components/FindBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Books /> },
      {
        path: "/addbook",
        element: <AddBook />,
      },
      {
        path: "/findbook",
        element: <FindBook />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
