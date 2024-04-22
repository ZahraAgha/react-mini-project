import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home from './Home'
import Faq from './Components/Faq/Faq';
import Creators2 from './pages/Creators/Creators2';
import Blog from './pages/Blog/Blog';
import Blogdetail from './Components/Blogdetail/Blogdetail';

import { Provider } from 'react-redux'
import { store } from './store.jsx'










const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/faq",
        element: <Faq />
      },
      {
        path: '/creators',
        element: <Creators2 />
      },
      {
        path: '/Blog',
        element: <Blog />
      },
      {
        path: '/Blog:id',
        element: <Blogdetail />
      },





    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

