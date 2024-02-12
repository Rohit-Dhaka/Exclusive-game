import React from 'react'
import firstimg from '../assets/webp/Rectangle12.webp'
import Secondimg from '../assets/webp/Rectangle13.webp'
import Ellips12 from '../assets/webp/Ellipse12.webp'
import { Ellipse31 } from '../common/Icon'
const Section2 = () => {
    return (
        <section className='bg-[#00141B]   relative max-md:overflow-hidden '>
            <div className='absolute  left-0  top-[-30%] animate-pulse'>
                <Ellipse31/>
            </div>        
            <div className="container mx-auto px-[12px] max-w-[1140px]">
                <div className="flex flex-wrap flex-row mx-[-12px] lg:pt-[74px] pt-[40px] lg:pb-[100px] pb-[40px] relative">
            <img src={Ellips12} alt="Ellips12" className=' absolute  top-[30%] left-[35%] animate-pulse'/>
                    <div className="md:w-[50%] w-full md:pl-[12px] z-10 md:pr-[32px] max-md:px-[12px]">
                        <img src={firstimg} alt="pokerimg" className='w-full'/>
                        <h2 className='font-normal leading-[57px] md:text-[48px] text-[42px] text-white lg:pt-[60px] pt-[40px] font-Anton'>Nuestra Visión</h2>
                        <h6 className='font-medium text-[16px] leding-[25px] max-w-[444px] pt-[16px] text-white font-Inter'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</h6>
                        <div className="pt-[24px]"><a href="#" className='text-[16px] text-[#7AF57A] font-bold font-Inter'>Aprende más <span className='content-[\2192]'>&#8594;</span></a></div>
                    </div>
                    <div className="md:w-[50%] w-full md:pr-[12px] max-lg:pt-[24px] z-10 md:pl-[32px]  max-md:px-[12px]">
                        <h2 className='font-normal leading-[57px] md:text-[48px] text-[42px] text-white font-Anton'>Nuestra Misión</h2>
                        <h6 className='font-medium text-[16px] leding-[25px] max-w-[444px] pt-[16px] text-white font-Inter'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</h6>
                        <div className="pt-[24px]"><a href="#" className='text-[16px] text-[#7AF57A] font-bold mt-[24px] font-Inter'>Aprende más <span className='content-[\2192]'>&#8594;</span></a></div>
                        <img src={Secondimg} alt="aviatorimg" className='w-full lg:pt-[60px] pt-[40px]'/>
                    </div>
                </div>
            </div>              
        </section>
    )
}
export default Section2