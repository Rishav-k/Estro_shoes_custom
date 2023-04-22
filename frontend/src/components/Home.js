import React from 'react'
import { useState } from "react";
import {AiOutlineArrowLeft }from  "react-icons/ai"
import {AiOutlineArrowRight }from  "react-icons/ai"
import "../css/home.css"

const elements = ["Vamp" , "Apron" , "Saddle"];
const code = ["V" , "A" , "S"];
var i = 0;
let data = [
    [1, 1, 1 ],
    [1, 1, 1 ],
];
var x = 1;
function binaryToDecimal(n)
{
    let num = n;
    let dec_value = 0;
 
    // Initializing base value to 1, i.e 2^0
    let base = 1;
 
    let temp = num;
    while (temp) {
        let last_digit = temp % 10;
        temp = Math.floor(temp / 10);
 
        dec_value += last_digit * base;
 
        base = base * 2;
    }
 
    return dec_value;
}
function update(){};
var imgCode = 0;
function pad2(number) {
   return (number < 10 ? '0' : '') + number
}
export default function Home() {
const [element , setElement] = useState("Vamp");
const [img ,setImg] = useState('vak');
function decode(){
let str ="";
    for(var j = 0; j < 3 ;j++){
        str += (data[0][j]-1);
        str += (data[1][j]-1);
    }
     imgCode = binaryToDecimal(Number(str));
     imgCode = pad2(imgCode+1);
    console.log(imgCode);

    setImg(`LOP-${imgCode}-1`)
    
 
console.log(str);
}
  return (
    <div>
      <div className="home-top">    
      <h2><center>{imgCode}</center></h2>
      </div>
      <div><center>
        <div>
            <AiOutlineArrowLeft onClick={()=>{i--; if(i<0)i=2;setElement(elements[(i)]);}} />
            {element}<span> &nbsp; {i+1}/3</span>
           <AiOutlineArrowRight onClick={()=>{i++; if(i>2)i=0;setElement(elements[(i)]);console.log(i)}}/>
           
        </div></center>
        <div> 
        <center><button onClick ={()=>{data[0][i]=1;
        console.log(data);decode();}} >Suede</button>
        <button onClick  ={()=>{data[0][i]=2;
        console.log(data);decode();}}>Museum Calf</button></center>
        </div>
        <div>
        <center>
            <button className='' onClick ={()=>{data[1][i]=1;decode();
        console.log(data)}}>Black</button>
            <button className='' onClick  ={()=>{data[1][i]=2;
        console.log(data);decode();}}>Navy</button></center>
        </div>
      </div>
    </div>
  )
}
