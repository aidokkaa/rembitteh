import React from 'react';
import './App.css';
import Header from './components/Header';
import { RouterProvider, createBrowserRouter, Route,createRoutesFromElements } from "react-router-dom";
import './flickity.css'
import Contacts from './components/Contacts';
import { Mikrov } from './page/Mikrov';
import { Samokat } from './page/Samokat';
import { Melkaya } from './page/Melkaya';
import { FlickityOne } from './components/FlickityOne';
import { WashMash } from './page/WashMash';
import { RouteLayout } from './RouteLayout';
import { Home } from './page/Home';
import Flickity from 'react-flickity-component';

const router = createBrowserRouter(createRoutesFromElements(<Route path ="/" element = {<RouteLayout/>}>
  <Route index  element = {<Home/>}/>
  <Route path="/wash" element = {<WashMash/>}/>;
  <Route path="/contacts" element = {<Contacts/>}/>;
  <Route path="/otzyv" element = {<FlickityOne/>}/>
  <Route path="/stiralnyi" element = {<WashMash/>}/>
  <Route path="/samokat" element = {<Samokat/>}/>
  <Route path="/mikro" element = {<Mikrov/>}/>
  <Route path="/melkiibit" element = {<Melkaya/>}/>
  </Route>))

function App() {
  return(
    <>
        <div className="App">
       <RouterProvider router = {router}></RouterProvider>
    </div>
    </>
  )
}

export default App;
