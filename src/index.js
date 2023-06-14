import React from 'react';
import ReactDOM from 'react-dom';
import Context,{ FirebaseContext } from './contexts/context';
import Post from './contexts/postContext'
import Search from './contexts/search'
import {db}  from './firebase/config'
import App from './App';
// import Home from './Pages/Home';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost';


const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/create',
        element:<Create/>
    },{
      path:'/view',
      element:<View/>
      
    }
    ])


    function AppLayout() {
        
        return (
          <>
          <FirebaseContext.Provider value={db}>
            <Post> 
            <Context>
             <Search>
            <RouterProvider router={appRouter}/>
            </Search>
            </Context>
            </Post>
          </FirebaseContext.Provider>
          </>
        );
      }

ReactDOM.render(<AppLayout/>,document.getElementById('root'));
