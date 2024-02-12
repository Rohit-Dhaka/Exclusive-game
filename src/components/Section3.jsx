import React from 'react'
import Firstimg from '../assets/webp/image790.webp'
import Secondimg from '../assets/webp/image792.webp'
import Thirdimg from '../assets/webp/image793.webp'
import Fourthimg from '../assets/webp/image798.webp'
import Fifthimg from '../assets/webp/image799.webp'
import Sixthimg from '../assets/webp/image800.webp'
import Vectorleft from '../assets/webp/Vector6.webp'
import Vectorright from '../assets/webp/Vector7.webp'
import Ellips30 from '../assets/webp/Ellipse30.webp'
import Ellips29 from '../assets/webp/Ellipse29.webp'
import { Greenbtn, Innovación, Inteligencia, Proactividad, Whitebtn } from '../common/Icon'
const Section3 = () => {
    return (
        <section className='bg-white-image  lg:bg-[#00141B]  bg-white lg:pt-[243px] sm:pt-[100px] pt-[40px] relative '>
            <img src={Ellips30} alt="Ellips30" className='absolute right-0 top-[-20%] animate-pulse'/>     
            <img src={Ellips29} alt="Ellips29" className=' absolute  left-0 bottom-[-30%] animate-pulse z-10'/>
            <div className="container max-w-[1140px] mx-auto px-[12px] z-10">
                <h2 className='text-[#00141B] font-normal lg:text-[48px] text-[42px] leading-[57px] lg:pb-[60px] pb-[40px] text-center font-Anton '>Nuestros Atributos de Marca</h2>
                <div className="flex flex-wrap flex-row mx-[-12px]  relative">
                    <div className="lg:w-[33.33%] sm:w-[50%] w-full px-[12px]">
                        <div className="flex flex-col items-center group">
                            <div className="w-[100px] h-[100px] rounded-[73px] bg-[#F5FFF5] flex items-center justify-center group-hover:bg-[#b6ffb6] duration-300 ease-linear">
                            <Inteligencia/>
                            </div>
                            <h4 className=' font-Anton font-normal  text-[20px] leading-[26px] pt-[16px]'>Inteligencia</h4>
                            <h6 className='pt-[10px] font-Inter text-[#00141B] opacity-[80%]  max-w-[263px] text-[16px] text-center font-medium'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%] w-full px-[12px] max-sm:pt-[24px]">
                        <div className="flex flex-col items-center group">
                            <div className="w-[100px] h-[100px] rounded-[73px] bg-[#F5FFF5] flex items-center justify-center group-hover:bg-[#b6ffb6] duration-300 ease-linear">
                                <Proactividad/>
                            </div>
                            <h4 className=' font-Anton font-normal  text-[20px] leading-[26px] pt-[16px]'>Proactividad</h4>
                            <h6 className='pt-[10px] font-Inter text-[#00141B] opacity-[80%]  max-w-[263px] text-[16px] text-center font-medium'>Somos creadores de cambios que exploran nuevas formas de entretenimiento.</h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%]  w-full px-[12px] max-lg:pt-[24px]">
                        <div className="flex flex-col items-center group">
                            <div className="w-[100px] h-[100px] rounded-[73px] bg-[#F5FFF5] flex items-center justify-center group-hover:bg-[#b6ffb6] duration-300 ease-linear">
                               <Innovación/>
                            </div>
                            <h4 className=' font-Anton font-normal  text-[20px] leading-[26px] pt-[16px]'>Innovación</h4>
                            <h6 className='pt-[10px] font-Inter text-[#00141B] opacity-[80%]  max-w-[263px] text-[16px] text-center font-medium'>Pensamos fuera de la caja para estar siempre un paso adelante.</h6>
                        </div>
                    </div>
                    <img src={Vectorleft} alt="arrowimg" className=' absolute top-0 left-[20%] hidden lg:block' />
                    <img src={Vectorright} alt="arrowimg" className=' absolute top-[20%] right-[20%] hidden lg:block' />
                </div>
                <div className="flex items-center flex-col lg:pt-[150px] sm:pt-[100px] pt-[40px]">
                    <h2 className='text-[#00141B] font-normal lg:text-[48px] text-[42px] leading-[57px]  font-Anton'>Slots</h2>
                    <h6 className='font-medium leading-[25px] font-Inter text-[16px] text-[#00141B] max-w-[904px] text-center pt-[16px] opacity-[80%]'>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</h6>
                </div>
                <div className="flex flex-wrap flex-row mx-[-12px] lg:pt-[60px] pt-[40px]">
                    <div className="lg:w-[33.33%] sm:w-[50%] w-full px-[12px] ">
                        <div className="relative group/show overflow-hidden duration-300 rounded-[8px]">
                            <img src={Firstimg} alt="cardimg" className=' w-full ' />
                            <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0 border-[1px] border-sold  border-[#51C8EF] rounded-[8px] w-full   h-full flex items-center justify-center bg-[#000000B8]'>
                                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Acceso
                                <span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                                    <Whitebtn/>
                                </span></button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%] w-full px-[12px] max-sm:pt-[24px]">
                        <div className="relative group/show overflow-hidden duration-300 rounded-[8px]">
                            <img src={Secondimg} alt="cardimg" className=' w-full' />
                            <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0 border-[1px] border-sold  border-[#51C8EF] rounded-[8px] w-full   h-full flex items-center justify-center bg-[#000000B8]'>
                                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Acceso  <span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                                   <Whitebtn/>
                                </span></button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%] w-full px-[12px] max-lg:pt-[24px]">
                        <div className="relative group/show overflow-hidden duration-300 rounded-[8px]">
                            <img src={Thirdimg} alt="cardimg" className=' w-full' />
                            <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0 border-[1px] border-sold  border-[#51C8EF] rounded-[8px] w-full   h-full flex items-center justify-center bg-[#000000B8]'>
                                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Acceso  <span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                                 <Whitebtn/>
                                </span></button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%] w-full px-[12px] pt-[24px] z-10">
                        <div className="relative group/show overflow-hidden duration-300 rounded-[8px]">
                            <img src={Fourthimg} alt="cardimg" className=' w-full' />
                            <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0 border-[1px] border-sold  border-[#51C8EF] rounded-[8px] w-full   h-full flex items-center justify-center bg-[#000000B8]'>
                                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Acceso  <span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                                 <Whitebtn/>
                                    
                                    
                                
                                </span></button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%] w-full px-[12px] pt-[24px]">
                        <div className="relative group/show overflow-hidden duration-300 rounded-[8px]">
                            <img src={Fifthimg} alt="cardimg" className=' w-full' />
                            <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0 border-[1px] border-sold  border-[#51C8EF] rounded-[8px] w-full   h-full flex items-center justify-center bg-[#000000B8]'>
                                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Acceso  <span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                                 <Whitebtn/>
                                    
                                    
                                
                                </span></button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%] w-full px-[12px] pt-[24px]">
                        <div className="relative group/show overflow-hidden duration-300 rounded-[8px]">
                            <img src={Sixthimg} alt="cardimg" className=' w-full' />
                            <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0 border-[1px] border-sold  border-[#51C8EF] rounded-[8px] w-full   h-full flex items-center justify-center bg-[#000000B8]'>
                                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Acceso <span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                                    
                                 <Whitebtn/>
                                    
                                
                                </span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:pb-[243px] sm:pb-[100px] pb-[40px] pt-[40px] flex justify-center'>
                    <button className='text-[#00141B] font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px]  font-Inter  relative group bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  duration-300 ease-linear hover:text-white lg:mt-[40px] hover:from-[#7AF57A] hover:to-[#51C8EF]'>Mostrar más<span className=' absolute left-[-7px] bottom-[-7px] group-hover:left-[0px] group-hover:bottom-[0px] duration-300 ease-linear group-hover:opacity-0'>
                       <Greenbtn/>
                    </span></button>
                </div>

            </div>   
        </section>
    )
}
export default Section3