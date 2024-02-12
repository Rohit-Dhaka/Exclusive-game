import React from 'react'
import Jackpotimg from '../assets/webp/Rectangle14.webp'
import Blackjack from '../assets/webp/Black-Jack1.webp'
import European from '../assets/webp/european-roulette1.webp'
import Livebetting from '../assets/webp/live-betting1.webp'
import Lanzaright from '../assets/webp/lanzaright.webp'
import Lanzaleft from '../assets/webp/lanzaleft.webp'
import Ellips28 from '../assets/webp/Ellipse28.webp'
import { Tick, Whitebtn } from '../common/Icon'
const Section4 = () => {
  return (
    <section className='bg-second-image bg-[#03151B] lg:pt-[90px] pt-[40px] relative max-md:overflow-hidden '>
      <img src={Ellips28} alt="Ellips28" className=' absolute right-0  bottom-[-30%] animate-pulse' />
      <div className="container max-w-[1140px] px-[12px] mx-auto">
        <div className="flex flex-wrap flex-row mx-[-12px] items-center lg:pt-[90px] pt-[40px]">
          <div className="md:w-[50%] w-full px-[12px] z-10">
            <img src={Jackpotimg} alt="jackpotimg" className='w-full' />
          </div>
          <div className="md:w-[50%]  w-full px-[12px] max-md:pt-[24px]">
            <div className="md:pl-[15px]">
              <h2 className=' font-Anton font-normal text-[48px] leading-[57px] text-white'>Potenciando sus elecciones</h2>
              <h5 className='font-Inter font-medium text-[16px] leading-[25px] text-white opacity-[80%] pt-[16px]'>Con Exclusive Game lo mejor está de tu lado.</h5>
              <div className="md:max-w-[412px] pt-[24px]">
                <div className='flex gap-2'>
                  <span>
                   <Tick/>
                  </span>
                  <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%]">Tecnología HTML5</div>
                </div>
                <div className='flex gap-2 pt-[12px]'>
                  <span>
                  <Tick/>
                  
                  </span>
                  <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%]">Versión PC y móvil</div>
                </div>
                <div className='flex gap-2 pt-[12px]'>
                  <span>
                   <Tick/>
                    
                  </span>
                  <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%]">Control de RTP (controlás qué porcentaje pagar)</div>
                </div>
                <div className='flex gap-2 pt-[12px]'>
                  <span>
                   <Tick/>
                    
                  </span>
                  <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%]">Bonos editables, happy hours, Jackpots, códigos  promocionales.</div>
                </div>
                <div className='flex gap-2 pt-[12px]'>
                  <span>
                  <Tick/>
                   
                  </span>
                  <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%]">Aplicación para android y windows de regalo.</div>
                </div>
              </div>
              <h5 className='font-Inter font-medium text-[16px] leading-[25px] text-white opacity-[80%] pt-[24px]'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</h5>
            </div>

          </div>
        </div>
        <div className="border-solid border-[0.5px] border-[#FFFFFF] rounded-[16px] flex justify-center mx-auto max-w-[1043px] lg:py-[96px] lg:mt-[150px] sm:mt-[100px] mt-[40px] relative px-[12px] py-[40px]">
          <h2 className=' font-Anton font-normal leading-[57px] md:text-[48px] text-[42px] text-white max-w-[520px] text-center z-10'>lanza tu propia plataforma en sólo 2 semanas</h2>
          <img src={Lanzaleft} alt="lanxaleft" className=' absolute left-0 top-0 opacity-[30%]' />
          <img src={Lanzaright} alt="lanxright"  className=' absolute right-0 top-0 opacity-[30%]'/>
        </div>
        <h2 className='text-center font-Anton md:text-[48px] text-[42px] text-white leading-[57px] lg:pt-[150px] sm:pt-[100px] pt-[40px]'>Juegos en vivo</h2>
        <div className="flex flex-row flex-wrap mx-[-12px] pt-[60px] lg:pb-[100px] pb-[40px]">
          <div className="lg:w-[33.33%] sm:w-[50%] w-full  px-[12px]">
            <div className="relative group/show overflow-hidden duration-300 rounded-[8px]">
              <img src={Blackjack} alt="ezugiimg"  className='w-full'/>
              <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0  rounded-[8px] w-full   h-full flex items-center justify-center bg-[#000000B8]'>
                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Reproducir ahora<span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                 <Whitebtn/>
                </span></button>
              </div>
            </div>
          </div>
          <div className="lg:w-[33.33%] sm:w-[50%] w-full px-[12px] max-sm:pt-[24px]">
            <div className="relative group/show overflow-hidden duration-300 rounded-[8px]">
              <img src={European} alt="roulrtteimg" className='w-full' />
              <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0  rounded-[8px] w-full   h-full flex items-center justify-center bg-[#000000B8]'>
                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Reproducir ahora<span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                 <Whitebtn/>
                </span>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[33.33%] sm:w-[50%] w-full px-[12px] max-lg:pt-[24px]">
            <div className="relative group/show overflow-hidden duration-300 rounded-[8px]">
              <img src={Livebetting} alt="livebettingimg" className='w-full' />
              <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0  rounded-[8px] w-full   h-full flex items-center justify-center bg-[#000000B8]'>
                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Reproducir ahora<span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                 <Whitebtn/>
                </span></button>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}
export default Section4