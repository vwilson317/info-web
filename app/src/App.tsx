import './App.css';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import Flyer from './Events/Flyer';

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [{
        path: '/',
        element: <Home />
      }, {
        path: 'events',
        element: <Flyer />
      }]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}