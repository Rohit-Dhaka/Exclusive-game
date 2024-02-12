import React from 'react'
import Rectangle13 from '../assets/webp/Rectangle16.webp'
import Converted from '../assets/webp/Converted.webp'
import Group777 from '../assets/webp/Group777.webp'
import Ellips16 from '../assets/webp/Ellipse16.webp'
import Ellips22 from '../assets/webp/Ellipse22.webp'
import Ellips25 from '../assets/webp/Ellipse25.webp'
import Ellips26 from '../assets/webp/Ellipse26.webp'
import Ellips27 from '../assets/webp/Ellipse27.webp'
import Card1 from '../assets/webp/card1.webp'
import Card2 from '../assets/webp/card2.webp'
import Group1 from '../assets/webp/gropu1.webp'
import Group2 from '../assets/webp/group2.webp'
import Blackfirst from '../assets/webp/BlackJackone.webp'
import Blacksecond from '../assets/webp/Black2.webp'
import Blackthird from '../assets/webp/Blackjack3.webp'
import { Clientesicon, Divisasicon, Greenbtn, Paginasicon, Tick, Whitebtn } from '../common/Icon'
const Section7 = () => {
    return (
        <section className='bg-[#00141B] relative max-md:overflow-hidden'>
            <img src={Ellips22} alt="Ellips22" className='absolute left-0 top-[-20%] animate-pulse' />
            <img src={Ellips25} alt="Ellips25" className='absolute right-0  top-[-5%] animate-pulse' />
            <img src={Ellips27} alt="Ellips27" className='absolute right-0  top-[70%] animate-pulse' />
            <img src={Ellips26} alt="Ellips26" className='absolute  left-0 top-[50%] animate-pulse' />
            <div className="container  max-w-[1140px] px-[12px] mx-auto ">
                <div className="flex flex-row flex-wrap mx-[-12px] lg:pt-[100px] pt-[40px]">
                    <div className="lg:w-[50%] w-full px-[12px] z-10">
                        <img src={Rectangle13} alt="777img"  className='w-full'/>
                    </div>
                    <div className="lg:w-[50%] w-full px-[12px] max-lg:pt-[24px]">
                        <h2 className=' font-Anton font-normal leading-[57px] text-white text-[48px] text-center'>Más razones para elegirnos</h2>
                        <div className=' rounded-[16px] border-[0.5px] border-solid border-[#388163] max-w-[374px] lg:mt-[60px] mt-[40px] flex gap-[37px] py-[24px] lg:pl-[56px] pl-[24px] hover:shadow-icon-shadow duration-300 ease-linear bg-[#062023]'>
                           <Paginasicon/>
                            <div className='flex flex-col'>
                                <h3 className='font-normal  font-Anton text-[32px] leading-[41px] text-white '>200</h3>
                                <h5 className='font-medium font-Inter text-[16px] leading-[25px] text-white'>Páginas creadas</h5>
                            </div>
                        </div>
                        <div className=' rounded-[16px] border-[0.5px] border-solid border-[#388163] max-w-[374px] mt-[24px] flex gap-[37px] py-[24px] lg:pl-[56px] pl-[24px] hover:shadow-icon-shadow duration-300 ease-linear bg-[#062023]'>
                            <Clientesicon/>
                            <div className='flex flex-col'>
                                <h3 className='font-normal  font-Anton text-[32px] leading-[41px] text-white '>98%</h3>
                                <h5 className='font-medium font-Inter text-[16px] leading-[25px] text-white'>Clientes Satisfechas</h5>
                            </div>
                        </div>
                        <div className=' rounded-[16px] border-[0.5px] border-solid border-[#388163] max-w-[374px] mt-[24px] flex gap-[37px] py-[24px] lg:pl-[56px] pl-[24px] hover:shadow-icon-shadow duration-300 ease-linear bg-[#062023]'>
                            <Divisasicon/>
                            <div className='flex flex-col'>
                                <h3 className='font-normal  font-Anton text-[32px] leading-[41px] text-white'>200</h3>
                                <h5 className='font-medium font-Inter text-[16px] leading-[25px] text-white'>Divisas Disponibles</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className=' text-white md:text-[48px] text-[42px]  font-Anton leading-[57px] font-normal text-center lg:pt-[150px] sm:pt-[100px] pt-[40px]'>Nuestras ofertas</h2>
                <h5 className=' font-Inter leading-[25px] font-medium text-white text-center pt-[16px]'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</h5>
                <div className="border-[0.5px] border-[#819091] rounded-[16px] mt-[60px] bg-[#062023] px-[12px] overflow-hidden hover:shadow-icon-shadow duration-300 ease-linear">
                    <div className="flex flex-row flex-wrap mx-[-12px] lg:pt-[57px] pt-[24px] pb-[28px] relative">
                    <img src={Ellips16} alt="Ellips16" className='absolute  top-[-10%] left-[-4%]' />
                        <div className="lg:w-[50%] w-full  z-10">
                            <img src={Converted} alt="convertedimg" className='w-full ' />                            
                        </div>
                        <div className="lg:w-[50%] w-full lg:pl-[66px] px-[12px]">
                            <h3 className='font-Anton text-[32px] leading-[41px] text-white'>Silver</h3>
                            <h4 className='font-Inter font-medium text-white opacity-[80%] leading-[25px] pt-[16px] max-w-[401px]'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</h4>
                            <h2 className='font-Anton md:text-[48px] text-[42px] leading-[57px] text-white pt-[32px]'>$5000</h2>
                            <div className="lg:max-w-[419px] pt-[16px]">
                                <div className='flex gap-2'>
                                    <span>
                                    <Tick/>
                                    </span>
                                    <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%]">Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</div>
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
                                    <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%]">Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</div>
                                </div>
                                <div className='flex gap-2 pt-[12px]'>
                                    <span>
                                    <Tick/>
                                    </span>
                                    <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%]">Aplicación para Android y Windows de regalo.</div>
                                </div>
                                <div className='flex gap-2 pt-[12px]'>
                                    <span>
                                      <Tick/>
                                    </span>
                                    <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%]">Tiempo de creación 2 a 3 semanas</div>
                                </div>
                            </div>
                            <button className='text-white font-bold text-[16px] leading-[25px] py-[13px] px-[46px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group lg:mt-[40px] mt-[30px] hover:bg-white duration-300 ease-linear hover:text-[#1A292E]'>Comprar ahora<span className=' absolute left-[-6px] bottom-[-7px] group-hover:left-[0px] group-hover:bottom-[0px] duration-300 ease-linear group-hover:opacity-0'>
                            <Whitebtn/>
                            </span></button>
                        </div>
                    </div>
                </div>
                <div className="border-[0.5px] border-[#819091] rounded-[16px] lg:mt-[64px] mt-[40px] bg-[#062023] bggameimg relative hover:shadow-icon-shadow duration-300 ease-linear">
                    <img src={Card1} alt="card1img" className=' absolute right-[13%] top-[13%] lg:block hidden' />
                    <img src={Card2} alt="cardimg2" className=' absolute  bottom-[13%] left-[13%] lg:block hidden' />
                    <img src={Group1} alt="group1" className=' absolute top-[16%] left-[19%] lg:block hidden' />
                    <img src={Group2} alt="group2" className=' absolute bottom-[13%] right-[13%] lg:block hidden' />
                    <div className="flex flex-col items-center px-[12px]">
                        <h3 className=' font-Anton text-[36px] leading-[41px]  text-white pt-[46px]'>Luxury</h3>
                        <h6 className=' font-Inter leading-[25px] text-white opacity-[80%] max-w-[391px] pt-[16px] text-center'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</h6>
                        <h2 className=' font-Anton md:text-[48px] text-[42px] text-white leading-[57px]  pt-[32px]'>$9000</h2>
                        <div className="max-w-[419px] pt-[16px]">
                            <div className='flex gap-2'>
                                <span>
                                <Tick/>
                                </span>
                                <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%] text-center">Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</div>
                            </div>
                            <div className='flex gap-2 pt-[12px]'>
                                <span>
                                <Tick/>
                                </span>
                                <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%] text-center w-full">Control de RTP (controlás qué porcentaje pagar)</div>
                            </div>
                            <div className='flex gap-2 pt-[12px]'>
                                <span>
                                <Tick/>
                                </span>
                                <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%] text-center">Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</div>
                            </div>
                            <div className='flex gap-2 pt-[12px]'>
                                <span>
                                <Tick/>
                                </span>
                                <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%] text-center w-full">Aplicación para Android y Windows de regalo.</div>
                            </div>
                            <div className='flex  pt-[12px] '>
                                <span>
                                    <Tick/>
                                </span>
                                <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%] text-center w-full">Tiempo de creación 2 a 3 semanas</div>
                            </div>
                        </div>
                        <button className='text-[#00141B] font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px]  font-Inter  relative group bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  duration-300 ease-linear hover:text-white mt-[36px] hover:from-[#7AF57A] hover:to-[#51C8EF] lg:mb-[41px] mb-[24px]'>Comprar ahora<span className=' absolute left-[-7px] bottom-[-7px] group-hover:left-[0px] group-hover:bottom-[0px] duration-300 ease-linear group-hover:opacity-0'>
                            <Greenbtn/>
                        </span></button>
                    </div>
                </div>
                <div className="border-[0.5px] border-[#819091] rounded-[16px] lg:mt-[64px] mt-[40px]  bg-[#062023] lg:px-[40px] px-[12px] hover:shadow-icon-shadow duration-300 ease-linear overflow-hidden">
                    <div className="flex flex-row flex-wrap-reverse mx-[-12px] lg:py-[78px] py-[24px] relative">
                        <img src={Ellips16} alt="Ellips16"  className=' absolute top-[-10%] right-[-5%]'/>
                        <div className="lg:w-[42%] px-[12px] w-full">
                            <h3 className=' font-Anton leading-[41px] text-[32px] text-white'>Platinum</h3>
                            <h5 className=' max-w-[364px] text-white opacity-[80%] font-medium leading-[25px] pt-[16px]'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</h5>
                            <h2 className=' font-Anton md:text-[48px] text-[42px] leading-[57px] font-normal text-white pt-[32px]'>Consultar precio</h2>
                            <div className='flex gap-2 pt-[16px]'>
                                <span>
                                  <Tick/>
                                </span>
                                <div className="font-Inter leading-[25px] text-white  font-medium opacity-[80%] text-center">Personalizable </div>
                            </div>
                            <button className='text-white font-bold text-[16px] leading-[25px] py-[13px] px-[46px] rounded-[41px] border-[1px] border-white font-Inter lg:mt-[40px] mt-[30px] border-solid relative group hover:bg-white duration-300 ease-linear hover:text-[#1A292E]'>Comprar ahora<span className=' absolute left-[-6px] bottom-[-7px] group-hover:left-[0px] group-hover:bottom-[0px] duration-300 ease-linear group-hover:opacity-0'>
                                <Whitebtn/>
                                
                            
                            </span></button>
                        </div>
                        <div className="lg:w-[58%] w-full px-[12px] z-10">
                            <img src={Group777} alt="group777img"  className='w-full'/>
                        </div>
                    </div>
                </div>
                <h2 className='lg:pt-[150px] sm:pt-[100px] pt-[40px] font-Anton font-normal md:text-[48px] text-[42px] leading-[57px] text-white text-center'>Ellos eligieron apostar con nosotros</h2>
                <div className="flex flex-wrap flex-row mx-[-12px] lg:pt-[60px] pt-[40px]">
                    <div className="lg:w-[33.33%]  sm:w-[50%]  w-full px-[12px] z-10">
                        <div className="relative group/show overflow-hidden duration-300 rounded-[8px] ">
                            <img src={Blackfirst} alt="girosimg" className='w-full' />
                            <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0  rounded-[8px] w-full   h-full flex items-center justify-center bg-[#000000B8]'>
                                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Rcasinovip<span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                                   <Whitebtn/>
                                </span></button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%] w-full  px-[12px] max-sm:pt-[24px]">
                        <div className="relative group/show overflow-hidden duration-300 rounded-[8px] ">
                            <img src={Blacksecond} alt="todosimg" className='w-full'/>
                            <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0  rounded-[8px] w-full   h-full flex items-center justify-center bg-[#000000B8]'>
                                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Rcasinovip<span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                                   <Whitebtn/>
                                </span></button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%]  w-full  px-[12px] max-lg:pt-[24px] ">
                        <div className=" group/show overflow-hidden duration-300 rounded-[8px] relative ">
                            <img src={Blackthird} alt="happy-hours-img" className='w-full' />
                            <div className='absolute top-0  duration-300   left-[-100%] group-hover/show:left-0  rounded-[8px] w-full  h-full flex items-center justify-center bg-[#000000B8]'>
                                <button className='text-white hover:bg-white duration-300 ease-linear hover:text-black font-bold text-[16px] leading-[25px] py-[13px] px-[43px] rounded-[41px] border-[1px] border-white font-Inter border-solid relative group/linehiden'>Rcasinovip<span className=' absolute left-[-6px] bottom-[-7px] group-hover/linehiden:left-[0px] group-hover/linehiden:bottom-[0px] duration-300 ease-linear group-hover/linehiden:opacity-0 '>
                                   <Whitebtn/>
                                </span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className=' font-Inter leading-[25px] font-semibold text-white max-w-[883px] text-center pt-[38px] mx-auto lg:pb-[75px] pb-[40px]'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                    Ahora, la próxima apuesta está en tus manos. Elige ganar. Elige exclusive game.</h5>
            </div> 
        </section>
    )
}
export default Section7