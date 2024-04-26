import './index.css';
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddProduct from './pages/AddProduct';
import LikedProducts from './pages/LikedProducts';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import MyProducts from './pages/MyProducts';
import MyProfile from './pages/MyProfile';
import About from './pages/About';
import PageNotFound from './pages/pagenotfound';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "/category/:catName",
    element: (<CategoryPage />),
  },
  {
    path: "/contact",
    element: <div>About</div>,
  },
  {
    path: "/about",
    element: (<About />),
  },
  {
    path: "/login",
    element: (<Login />),
  },
  {
    path: "/signup",
    element: (<Signup />),
  },
  {
    path: "/add-product",
    element: (<AddProduct />),
  },
  {
    path: "/liked-products",
    element: (<LikedProducts />),
  },
  {
    path: "/my-products",
    element: (<MyProducts />),
  },
  {
    path: "/product/:productId",
    element: (<ProductDetail />),
  },
  {
    path: "/my-profile",
    element: (<MyProfile />),
  },
  {
    path: "/*",
    element: (<PageNotFound/>),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
