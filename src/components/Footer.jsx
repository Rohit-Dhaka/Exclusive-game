import React from 'react'
import Logoimage from '../assets/webp/logo.webp'
import { Ellipse23, Ellipse24, Emailicon, Facebook, Instagram, Linkedin, Mobileicon } from '../common/Icon'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section className='bg-[#000000] relative overflow-hidden'>
      <div className="container max-w-[1140px] mx-auto px-[12px]">
        <div className="flex flex-wrap flex-row mx-[-12px] lg:pt-[64px] pt-[40px]  pb-[40px]">
          <div className="lg:w-[33.33%]  w-full px-[12px] z-30">
            <img src={Logoimage} alt="logo-image" />
            <h6 className='text-white max-w-[369px] opacity-[80%] pt-[18px] font-Inter'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</h6>
            <div className='flex gap-[12px] pt-[24px]'>
              <a href="#" className='hover:shadow-icon-shadow rounded-full duration-300 ease-linear'>
                <Instagram />
              </a>
              <a href="#" className='hover:shadow-icon-shadow rounded-full duration-300 ease-linear'>
                <Facebook />
              </a>
              <a href="#" className='hover:shadow-icon-shadow rounded-full duration-300 ease-linear'>
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="lg:w-[41.33%] sm:w-[50%] w-full px-[12px] max-lg:pt-[24px]">
            <div className='flex  lg:justify-around justify-between'>
              <ul className='flex flex-col gap-[12px] '>
                <li className='text-white font-Inter text-[16px] font-bold  leading-[25px]'>Menú principal</li>
                <li><a href="#" className='text-white opacity-[80%] font-medium text-[16px] font-Inter leading-[25px] relative after:absolute after:h-[1px] after:w-0  after:bottom-[-1px] after:left-0 after:bg-[#CCCCCC] after:inline-block hover:after:w-full after:duration-300 ease-linear pt-1'>Hogar</a></li>
                <li><a href="#" className='text-white opacity-[80%] font-medium text-[16px] font-Inter leading-[25px] relative after:absolute after:h-[1px] after:w-0  after:bottom-[-1px] after:left-0 after:bg-[#CCCCCC] after:inline-block hover:after:w-full after:duration-300 ease-linear'>Misión</a></li>
                <li><a href="#" className='text-white opacity-[80%] font-medium text-[16px] font-Inter leading-[25px] relative after:absolute after:h-[1px] after:w-0  after:bottom-[-1px] after:left-0 after:bg-[#CCCCCC] after:inline-block hover:after:w-full after:duration-300 ease-linear'>Tragamonedas</a></li>
                <li><a href="#" className='text-white opacity-[80%] font-medium text-[16px] font-Inter leading-[25px] relative after:absolute after:h-[1px] after:w-0  after:bottom-[-1px] after:left-0 after:bg-[#CCCCCC] after:inline-block hover:after:w-full after:duration-300 ease-linear'>Por qué elegirnos</a></li>
                <li><a href="#" className='text-white opacity-[80%] font-medium text-[16px] font-Inter leading-[25px] relative after:absolute after:h-[1px] after:w-0  after:bottom-[-1px] after:left-0 after:bg-[#CCCCCC] after:inline-block hover:after:w-full after:duration-300 ease-linear'>Ofertas</a></li>
              </ul>
              <ul className='flex flex-col gap-[12px] '>
                <li className='text-white font-Inter text-[16px] font-bold  leading-[25px]'>Atención al cliente</li>
                <li><a href="#" className='text-white opacity-[80%] font-medium text-[16px] font-Inter leading-[25px] relative after:absolute after:h-[1px] after:w-0  after:bottom-[-1px] after:left-0 after:bg-[#CCCCCC] after:inline-block hover:after:w-full after:duration-300 ease-linear pt-1'>¿Necesitas ayuda?</a></li>
                <li><a href="#" className='text-white opacity-[80%] font-medium text-[16px] font-Inter leading-[25px] relative after:absolute after:h-[1px] after:w-0  after:bottom-[-1px] after:left-0 after:bg-[#CCCCCC] after:inline-block hover:after:w-full after:duration-300 ease-linear'>política de privacidad</a></li>
                <li><a href="#" className='text-white opacity-[80%] font-medium text-[16px] font-Inter leading-[25px] relative after:absolute after:h-[1px] after:w-0  after:bottom-[-1px] after:left-0 after:bg-[#CCCCCC] after:inline-block hover:after:w-full after:duration-300 ease-linear'>Términos de servicios</a></li>
              </ul>
            </div>
          </div>
          <div className="lg:w-[25%] sm:w-[50%]  w-full px-[12px] max-lg:pt-[24px]">
            <h5 className=' font-Inter font-bold text-[16px] leading-[25px] text-[#FEFEFE]'>Ponerse en contacto</h5>
            <div className='flex gap-2 pt-[19px]'>
              <Emailicon/>
             
              <a href="mailto:webmaster@example.com" className='text-[#FEFEFE] font-Inter leading-[25px] text-[16px] font-medium'>juegosexclusivos@gmail.com</a>
            </div>
            <div className='flex gap-2 pt-[12px]'>
              <Mobileicon/>
              <a href="tel:(101)342-7873" className='text-[#FEFEFE] font-Inter leading-[25px] text-[16px] font-medium'>(101)342-7873</a>

            </div>
          </div>
        </div>
      </div>
      <h5 className='text-[#FFFFFF] font-medium  text-[16px] leading-[25px]  opacity-[50%] text-center lg:py-[20px] py-[16px] border-t-[0.5px] border-solid border-white  font-Inter'>© Juegos exclusivos - Todos los derechos reservados {year}</h5>
      <div className='absolute left-0 bottom-0 animate-pulse'>
        <Ellipse23 />
      </div>
      <div className=' absolute right-0  top-[50%]  translate-y-[-50%] animate-pulse'>
        <Ellipse24 />
      </div>
    </section>
  )
}
export default Footer