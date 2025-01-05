import About from "./assets/Componant/About/About";
import Contact from "./assets/Componant/Contact/Contact";
import Home from "./assets/Componant/Home/Home";
import Layout from "./assets/Componant/Layout/Layout";
import Portfolio from "./assets/Componant/Portfolio/Portfolio";

import {createBrowserRouter, RouterProvider} from'react-router-dom';

let x = createBrowserRouter([
  {path:'' , element: <Layout/> , children:[
    {index: true , element: <Home/>},
    {path:'about' , element: <About/>},
    {path:'portfolio' , element: <Portfolio/>},
    {path:'contact' , element: <Contact/>},
    
    
  ]},
  
])

export default function App(){
  return <RouterProvider router={x}></RouterProvider>
}