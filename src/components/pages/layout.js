import React from 'react'
import { FaArrowUp } from "react-icons/fa";


function Layout() {

  window.addEventListener('scroll',()=>{
    if(window.scrollY > 400){
      document.querySelector('.box').classList.remove('d-none');
    }else{
      document.querySelector('.box').classList.add('d-none');
    }
  });
  return (
    <div>
      <div className="box d-none">
      <button  onClick={() => window.scrollTo(0,0)}><FaArrowUp /></button>
      </div>
  </div>
  )



  
}

export default Layout;