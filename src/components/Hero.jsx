import React, { useState } from 'react'
import Logoimage from '../assets/webp/logo.webp'
import { Greenbtn, Whitebtn } from '../common/Icon';

const Hero = () => {
  const [data , setdata] = useState (false);
  function show(){setdata (!data) 
  if(data === false){
    document.body.classList.add("navhide")
  }
  else{
    document.body.classList.remove("navhide")
  }
  }
  return (
    <section className='bg-img min-h-screen  bg-[#00141B] relative overflow-hidden'>
      <header className='bg-white bg-opacity-[10%]'>
        <div className="container max-w-[1140px] mx-auto px-3">
          <nav className='flex items-center justify-between sm:py-[23px] py-[18px]'>
            <div className="logo-name">
              <img src={Logoimage} alt="logoimage"/>
            </div>
            <div className={`${data ? "right-0":"right-[-100%]"} flex items-center lg:gap-[161px] max-lg:absolute max-lg:bg-black max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-[30px] z-40 duration-300 ease-linear`} >
              <ul className='flex gap-[28px] text-white max-lg:flex-col max-lg:items-center'>
                <li><a href="#" className=' font-Inter font-medium text-[16px] leading-[25px]  opacity-[80%]  hover:opacity-100 duration-300 ease-linear'>Hogar</a></li>
                <li><a href="#" className=' font-Inter font-medium text-[16px] leading-[25px]  opacity-[80%]  hover:opacity-100 duration-300 ease-linear'>Misión</a></li>
                <li><a href="#" className=' font-Inter font-medium text-[16px] leading-[25px]  opacity-[80%]  hover:opacity-100 duration-300 ease-linear'>Tragamonedas</a></li>
                <li><a href="#" className=' font-Inter font-medium text-[16px] leading-[25px]  opacity-[80%]  hover:opacity-100 duration-300 ease-linear'>Por qué elegirnos</a></li>
                <li><a href="#" className=' font-Inter font-medium text-[16px] leading-[25px]  opacity-[80%]  hover:opacity-100 duration-300 ease-linear'>Ofertas</a></li>
              </ul>
              <button className='text-white font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group hover:bg-white duration-300 ease-linear hover:text-[#1A292E]'>Acceso  <span className=' absolute left-[-6px] bottom-[-7px] group-hover:left-[0px] group-hover:bottom-[0px] duration-300 ease-linear group-hover:opacity-0'>
                <Whitebtn/>
              </span></button>
            </div>
            <div className=" lg:hidden block z-50" onClick={show}>
              <span className='bar h-[2px] w-[25px] bg-white block '></span>
              <span className='bar h-[2px] w-[25px] bg-white block my-[7px]'></span>
              <span className='bar h-[2px] w-[25px] bg-white block'></span>
            </div>
          </nav>
        </div>
      </header>
      <div className="container max-w-[1140px] mx-auto px-[12px]">
        <div className="lg:pt-[140px] pt-[100px] flex items-center flex-col">
          <h1 className='font-normal lg:text-[72px] sm:text-[48px] text-[42px] lg:leading-[86px] leaidng-[60px] text-white max-w-[505px] font-Anton  text-center'>Exclusive Games. Pasión por ganar</h1>
          <h6 className='font-medium text-[16px] leading-[25px]  text-white opacity-[80%] max-w-[727px] text-center pt-[16px] font-Inter  pb-[30px]'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</h6>
          <button className='text-[#00141B] font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px]  font-Inter  relative group bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  duration-300 ease-linear hover:text-white lg:mt-[40px] hover:from-[#7AF57A] hover:to-[#51C8EF]'>Acceso<span className=' absolute left-[-7px] bottom-[-7px] group-hover:left-[0px] group-hover:bottom-[0px] duration-300 ease-linear group-hover:opacity-0'>
           <Greenbtn/>
          </span></button>
        </div>
      </div> 
    </section>
  )
}

export default Hero