import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/pages/ErrorPage';
import Root from './components/layouts/Root';
import Home from './components/layouts/Home';
import StartLearning from './components/pages/StartLearning';
import Tutorials from './components/pages/Tutorials';
import AboutUs from './components/pages/AboutUs';
import Profile from './components/pages/Profile';
import LessonDetailsCard from './components/pages/LessonDetailsCard';
import AuthProvider from './components/provider/AuthProvider';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/learning",
        element: <StartLearning></StartLearning>,
      },
      {
        path: "/learning/:lessonId",
        element: <LessonDetailsCard></LessonDetailsCard>,
        loader: () => fetch('/japanese.json')
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
