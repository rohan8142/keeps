'use client';
import Image from "next/image";
import { useState } from "react";
import clsx from 'clsx';


export default function Home() {

  const [hamButton, setHamButton] = useState(false);

  const changeHamButton = () =>{ //hamburger change status function

    
    setHamButton(!hamButton) 

  }


  return (

    <div>

      {/* Navigation bar */}
    <div className="navbar bg-base-300  shadow-md">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost" onClick={changeHamButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">NotePad</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
      </svg>
    </button>
  </div>
</div>

{/* Sperating hamburger and dashboard */}

<div className = " h-screen flex flex-row ">


<div 
  className={clsx(
    'flex-none w-14 bg-base-300',
    {
      'w-52': hamButton === true,
    },
  )}
  
  
  >
  </div>

  <div className ="grow  ">

    
  </div>

</div>


</div>



  );
}
