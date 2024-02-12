import React from 'react'
import Casino from '../assets/webp/Rectangle15.webp'
import { Greenbtn } from '../common/Icon'
const Section5 = () => {
    return (
        <section className='bg-third-img lg:bg-[#03141A] bg-white  lg:pt-[200px] sm:pt-[100px]  max-md:overflow-hidden'>
            <div className="container max-w-[1140px] px-[12px] mx-auto">
                <div className="flex flex-row flex-wrap-reverse mx-[-12px] items-center lg:pt-[83px] pt-[40px] lg:pb-[324px] sm:pb-[150px] pb-[40px]">
                    <div className="md:w-[50%] w-full px-[12px] max-md:pt-[24px] z-10">
                        <h2 className=' font-Anton text-[48px] font-normal leading-[57px] '>Por qué elegirnos</h2>
                        <h6 className=' font-medium font-Inter text-[16px] leading-[25px] text-[#00141B] opacity-[80%] max-w-[526px] pt-[16px]'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</h6>
                        <button className='text-[#00141B] font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px]  font-Inter  relative group bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  duration-300 ease-linear hover:text-white mt-[40px] hover:from-[#7AF57A] hover:to-[#51C8EF]'>Aprende más<span className=' absolute left-[-7px] bottom-[-7px] group-hover:left-[0px] group-hover:bottom-[0px] duration-300 ease-linear group-hover:opacity-0'>
                            <Greenbtn/>
                        </span></button>
                    </div>
                    <div className="md:w-[50%] w-full px-[12px]">
                        <img src={Casino} alt="casinonight-img" className='w-full' />
                    </div>
                </div>
            </div>  
        </section>
    )
}
export default Section5