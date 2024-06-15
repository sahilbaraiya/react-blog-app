import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from '../src/components/AuthLayout.jsx'
import Login from './components/Login.jsx'
// import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import Home from './pages/Home.jsx'
import MyProduct from './pages/MyProduct.jsx'
import About from './pages/About.jsx'
//importing profile
import Profile from './pages/Profile.jsx'
//importing recover
import Recover from './pages/Recover.jsx'
//importing reset
import Reset from './pages/Reset.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/login',
        element:(
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )

      },
      {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <Signup />
            </AuthLayout>
        ),
    },
    {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <AllPosts />
            </AuthLayout>
        ),
    },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost />
            </AuthLayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost />
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post />,
    },
    {
      path:"/my-product/",
      element:(
        <AuthLayout authentication>
          {" "}
          <MyProduct/>
        </AuthLayout>
      )

    },
    //here about
    {
      path:"/about",
      element:<About/>,
    },
    //here profile
    {
      path:"/profile",
      element:(
        <AuthLayout authentication>
          {" "}
          <Profile/>
        </AuthLayout>
      )
    },
    //here recover
    {
     path:"/recover",
     element: <Recover/>
    },
    //here reset 
    {
      path:"/reset",
      element:<Reset/>
    }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
