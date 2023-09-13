import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Navbar from './components/navbar/Navbar';
//import Cidades from './utils/cities';
//import Card from './components/card/Card';
import Imagem from './components/imagem/Imagem';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Navbar
     item1='Bom dia'
     item2={5}/>  */}
     <Imagem/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
