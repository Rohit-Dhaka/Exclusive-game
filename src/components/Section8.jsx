import React from 'react'
import Bgleft from '../assets/webp/bgleft.webp'
import Bgright from '../assets/webp/bgright.webp'
import { Greenbtn } from '../common/Icon'
const Section9 = () => {
  return (
    <section className='bg-[#00141B] max-md:overflow-hidden'>
            <div className='container max-w-[1140px] mx-auto px-[12px] lg:pb-[150px] sm:pb-[100px] pb-[40px] md:pt-[75px] pt-[40px]'>                    
                <div className='rounded-[16px]  border-[1px] border-[#848E93]  lg:pt-[104px] sm:pt-[70px] pt-[40px] md:pb-[99px] pb-[40px] flex flex-col items-center relative px-[12px]'>
                    <h3 className='  font-Anton text-white md:text-[32px] sm:text-[28px] text-[24px]  leading-[41px] text-center z-10'>Lanza tu propia plataforma en sólo 2 semanas</h3>
                    <button className='text-[#00141B]  z-40 font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px]  font-Inter  relative group bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  duration-300 ease-linear hover:text-white md:mt-[40px] mt-[30px] hover:from-[#7AF57A] hover:to-[#51C8EF]'>Leer más<span className=' absolute left-[-7px] bottom-[-7px] group-hover:left-[0px] group-hover:bottom-[0px] duration-300 ease-linear group-hover:opacity-0'>
                       <Greenbtn/>
                    </span></button>
                    <img src={Bgleft} alt="bgimg" className=' absolute left-0 top-0' />
                    <img src={Bgright} alt="bgimg" className=' absolute right-0 top-0' />                    
                </div>
            </div>   
        </section>
  )
}
export default Section9