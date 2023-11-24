import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from 'App';
import { routerData } from 'data/routerData';

function RouterTemplate(){
  const routerList = routerData;
  const router = createBrowserRouter([
    {
      path:"/",
      element: <App />,
      caseSensitive: true, // 대소문자를 구분하여 일치
      children:[
        ...routerList,
      ]
    },
  ])
  return <RouterProvider router={router} />;
  // fallbackElement={<div>Loading...TEST</div>} 
}
export default RouterTemplate;
