import React from 'react';
import './Navbar.css';

interface Props{
    item1: string;
    item2: number;
    ok?: boolean;
    teste?: boolean;
}
//  interface Arthur {
//     olhos: castanho;
//     usaOculos: Não; }

 function Navbar(props:Props){


    return (

         <div>
        {props.item1}
        {props.item2}
         </div>

    );


 }

 export default Navbar;