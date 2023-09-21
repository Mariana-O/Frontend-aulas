    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import reportWebVitals from './reportWebVitals';
    //import Alertar from './components/alerta/Alertar';
    import AlertText from './components/alertext/AlertText';


    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
    root.render(
      <React.StrictMode>
        {/* <Navbar
        item1='Bom dia'
        item2={5}/>  */}
        <AlertText/>
      </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
