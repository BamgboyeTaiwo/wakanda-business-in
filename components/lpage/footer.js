import React from 'react'; 
import Image from 'next/image';
import Link from 'next/link'
import styles from './footer.module.css'

export default function footer() {
  return (

    <footer className={` relative bg-[#00A85A] ${styles.footer} text-body `} id='Footer'>

        <div className={` bg-[#C1DE76]  lg:flex sm:w-[90%] ${styles.Get_container}`}>

            <div className={` sm:block md:flex lg:flex m-auto sm:w-[80%] sm:p-[5px]`} >
                <div className={` ${styles.Get_container_textbox} sm:w-100`}>
                    <h4 className={`text-bold ${styles.Get_title}`} >
                        Get the <br className='lg:hidden md:hidden'/>  Wakanda App
                    </h4>
                    <p className='lg:text-[10px] md:text-[10px] sm:text-[15px]  '>
                        Enjoy alot more awesome <br className='lg:hidden md:hidden'/>
                         features on the Wakanda <br className='lg:hidden md:hidden'/>
                         Mobile App
                    </p>

                </div>


                <div className={` grid grid-row-2 lg:mr-7 md:mr-[10px] lg:px-3 md:px-0 sm:hidden md:block lg:block`}>

                    <div className=' lg:w-[120px] lg:h-[60px] md:pt-[10px]'>
                        <img
                            src="/GETAPPSTORE.svg" 
                            alt="Wakanda"
                            width={150}
                            height={100}
                        />
                    </div>
                    <div className=' lg:w-[120px]'>
                        <Image
                            src="/GetgooglePlay.svg" 
                            alt="Wakanda"
                            width={150}
                            height={100}
                        />
                    </div>
                    
                </div> 

                  {/* mobile */}

                <div className={` grid grid-row-2  sm:block md:hidden lg:hidden sm:pb-3`}>

                    <div className={` lg:w-[120px] lg:h-[60px] sm:w-100 ${styles.app_div}`}>
                        <img
                            src="/GETAPPSTORE.svg" 
                            alt="Wakanda"
                            width={'100%'}
                            height={60}
                        />
                    </div>
                    <div className={` lg:w-[120px] lg:h-[60px] sm:w-100 ${styles.app_div}`}>
                        <img
                            src="/GetgooglePlay.svg" 
                            alt="Wakanda"
                            width={'100%'}
                            height={60}
                        />
                    </div>

                    </div> 
            </div>

            




        </div>


        <div className={` lg:h-[70vh] ${styles.footer_content}`}>
            <div className={`flex flex-row-12 p-2 mb-2 w-100 sm:block md:flex lg:flex lg:pt-[15% !important] ${styles.foot_detail_container} sm:pt-[45% !important] `}>

                <div className={` 
                ${styles.logo} col-span-3 sm:hidden md:block lg:block sm:row-span-12 sm:col-span-12 sm:w-100 lg:col-span-3 md:col-span-3 w-25 sm:pl-[5%]
                `}>
                <Image
                    className={` ${styles.logo_img}`}
                    src="/Group-706.svg"
                    alt="Wakanda"
                    width={100}
                    height={50}
                    /> 

                </div>
                <div className={` ${styles.logo} col-span-3 sm:block lg:hidden md:hidden sm:row-span-12 sm:col-span-12 sm:w-100 lg:col-span-3 md:col-span-3 w-25`}>
                <Image
                    src="/Group-706.svg"
                    alt="Wakanda"
                    width={180}
                    height={130}
                    /> 

                </div>

                <div className={`col-span-4 sm:col-span-12 w-35 sm:block ${styles.div_two}` }>
                    <div className={`grid grid-row-5 ${styles.navlink_container}`}>
                        <div className='row-span-1 p-2 '>

                            <Link href={'#'} style={{textDecoration: 'none'}} className='text-link'  id={styles.lik}>
                                
                                <a href="" active  className={` ${styles.text_link} ${styles.first_link} text-[#A9D046] `}> LINKS</a>
                            </Link>
                        </div>
                        <div className='row-span-1 p-2 '>
                            
                            <Link href={'#'}>
                                <a href="" className={` ${styles.text_link} `}> About Us</a>
                                
                            </Link>

                        </div>
                        <div className='row-span-1 p-2'>
                            
                            <Link href={'#'}>
                                <a href="" className={` ${styles.text_link} `}> Our Offers</a>
                                
                            </Link>

                        </div>

                        <div className='row-span-2 p-2 '>
                            
                            <Link href={'#'}>
                                <a href="" className={` ${styles.text_link} `}> Pricing</a>
                                
                            </Link>

                        </div>  
                        <div className='row-span-1 p-2'>
                            
                            <Link href={'#'}>
                                <a href="" className={` ${styles.text_link} `}> FAQs</a>
                                
                            </Link>

                        </div>

                    </div>

                </div>
                <div className={`col-span-5 w-40 ${styles.div_three}` }>
                <div className=' lg:mt-[10px]'>
                    <div>
                        <h6 className={styles.contact_header}> CONTACTS: </h6>
                    </div>
                    

                        <div className='flex flex-col text-white'>

                            
                                <div className={` ${styles.contact_div1}`}>
                                    <span className='mr-2'>
                                        <Image
                                            src="/location-2.svg"
                                            alt="Wakanda"
                                            width={30}
                                            height={15}
                                        />

                                    </span>
                                    
                                    <span>
                                        42 Montgomery Rd, Yaba, Lagos.
                                    </span>
                                </div>
                                <div className={` ${styles.contact_div2}`}>
                                <span className='mr-2'>
                                        <Image
                                            src="/mail-outline.svg"
                                            alt="Wakanda"
                                            width={30}
                                            height={15}
                                        />

                                    </span>
                                    <span>
                                        <span>Christian@african-founders.com</span>
                                         <br/>
                                         <span className='lg:ml-[2.5rem] sm:ml-[2.5rem] '>abiodun@african-founders.com</span>
                                        
                                    </span>
                                </div> 
                                <div className={` ${styles.contact_div3}`}>
                                <span className='mr-2'>
                                        <Image
                                            src="/call.svg"
                                            alt="Wakanda"
                                            width={30}
                                            height={15}
                                        />

                                    </span>
                                    <span>
                                        08064289402
                                    </span>
                                    
                                </div>
                                <div className={` ${styles.contact_div4} sm:mt-5 lg:mt-5  lg:mb-[100px]` }>
                                <span className='mr-2'>
                                        <Image
                                            src="/Facebook.svg"
                                            alt="Wakanda"
                                            width={60}
                                            height={30}
                                        />

                                    </span>
                                    <span className='mr-2'>
                                        <Image
                                            className={`m-none`}
                                            src="/instgram.svg"
                                            alt="Wakanda"
                                            width={60}
                                            height={30}
                                            
                                            
                                            // width={10}
                                            // height={15}
                                             
                                        />
                                        {/* <Image
                                            className={``}
                                            src="/instgram.svg"
                                            alt="Wakanda"
                                            width={50}
                                            height={25}
                                        /> */}

                                    </span>
                                    <span className='mr-2'>
                                        <Image
                                            src="/Twitter.svg"
                                            alt="Wakanda"
                                            width={60}
                                            height={30}
                                        />

                                    </span>

                                </div>
                        </div>





                    </div>



                </div>
                
            </div>
        </div>


        <div className="text-center p-1 bg-[#A9D046] text-xs h-[40px] ">

            <div className='mt-[10px]'>
                            <span className='my-7'>Made with  
                <span>
                <Image
                    src="/location-2.svg"
                    alt="Wakanda"
                    width={30}
                    height={15}
                />

                </span> 
                by African Founders </span>
            </div>

        </div>




        






   






        
    </footer>

  )
}
