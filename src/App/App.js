import React from 'react';
import './App.css';
import Products from './../Products/Products';
import Layout from './../Layout/Layout';
import PRODUCTS from './PRODUCTS.json';
import About from '../About/About';
import Contact from '../Contact/Contact';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">

      
      <Layout />
      

    </div>
  );
}

export default App;




      {/* <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Products info={PRODUCTS}/> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
       </Layout>
      </BrowserRouter> */}