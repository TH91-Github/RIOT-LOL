import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from 'App';
import MainSearch from 'component/pages/MainSearch';
import Summoners from 'component/pages/Summoners';

function RouterTemplate(){
  const router = createBrowserRouter([
    {
      path:"/",
      element: <App />,
      caseSensitive: true, // 대소문자를 구분하여 일치
      children:[
        {
          index: true,
          element: <MainSearch />,
        },
        {
          path:"summoners",
          element: <Summoners />
        }
      ]
    },
  ])
  return <RouterProvider router={router} />;
  // fallbackElement={<div>Loading...TEST</div>} 
}
export default RouterTemplate;
