import React from 'react'
import {AiOutlineArrowLeft }from  "react-icons/ai"
import {AiOutlineArrowRight }from  "react-icons/ai"
import "../css/home.css"
export default function Home() {
  return (
    <div>
      <div className="home-top">
        home top
      </div>
      <div><center>
        <div>
            <AiOutlineArrowLeft/>
            <span> Vamp 1/4</span>
           <AiOutlineArrowRight/>
           
        </div></center>
        <div> 
        <center><button>Sceude</button>
        <button>Meusium Calf</button></center>
        </div>
        <div>
            <button className=''>black</button>
            <button className=''>blue</button>
        </div>
      </div>
    </div>
  )
}
