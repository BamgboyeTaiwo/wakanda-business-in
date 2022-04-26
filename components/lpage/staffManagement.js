import React from 'react';
import Image from 'next/image';
import styles from './staffManagement.module.css';

export default function staffManagement() {
  return (
    
    <section className="bg-[#EFF7F0] pt-4 text-[#163828] font-['Raleway']">
        <div className={`container px-3 ${styles.containerst}`}>

            <div className={`grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12  ${styles}`}>

                <div className='col-span-4 sm:col-span-12 md:col-span-6 lg:col-span-5'>
                    <h1 className={`text-[#00A85A] font-['Raleway'] text-bold sm:text-[15px] mb-4 lg:mb-5 ${styles.businessheader}`}>
                        STAFF MANAGEMENT
                       
                    </h1>
                
                    <div>
                        <div className='grid grid-cols-12 sm:mb-3 lg:mb-6'>
                            <div className='col-span-3 mx-2 '>
                                <img className='sm:block md:hidden lg:hidden' src='/images/Group -10.png' alt="" /> 
                                <Image
                                    className={`sm:hidden ${styles.displaynone} `}
                                    src="/communicate-icon.svg"
                                    alt="Wakanda"
                                    width={472}
                                    height={356}
                                /> 
                                
                            </div>
                            <div className={`col-span-9 ${styles.content_title}`}>
                                <h3 className=''>
                                    Better internal Communication

                                </h3>
                                <p>
                                
                                Create Internal communication channel with your staff, enhanced with 
                                the ability to create different categories of chat with your company community, 
                                and also anonymous voices chats for staffs to communicate with the managent.

                                </p>

                            </div>

                        </div>
                        {/* dgcusjf */}

                        <div className='grid grid-cols-12  sm:mb-3 lg:mb-6'>
                            <div className='col-span-3 mx-2 '>
                                <img className='sm:block md:hidden lg:hidden' src='/images/Group -9.png' alt="" />  
                                <Image
                                        className={`sm:hidden ${styles.displaynone} `}
                                        src="/performance-icon.svg"
                                        alt="Wakanda"
                                        width={472}
                                        height={356}
                                    />
                                
                            </div>
                            <div className={`col-span-9 ${styles.content_title}`}>
                                <h3>
                                    Reports and Documentation 
                                
                                </h3>
                                <p>
                                    Track the performance of your staff members to ensure effectiveness and productivity. Including a centralized storage for your 
                                    documents which can be easily accessible from anywhere in the world at any time.
                                </p>
                            </div>

                        </div>
                        
                        <div className='grid grid-cols-12  sm:mb-3 lg:mb-6'>
                            <button className={`col-start-3 col-span-7 bg-[#00A85A] md:col-span-8 md:col-start-3 md:py-1 md:px-1 ${styles.btn} text-white font-bold  py-3 px-4 rounded`}>
                                GET STARTED NOW {'>'}
                            </button>
                        </div>

                    </div>

                </div>
                <div className={` ${styles.div1} col-span-8 sm:col-span-12 md:col-span-6 lg:col-span-7 lg:pt-2 ${styles.flex2}`}>
                    
                    <Image
                        className={`${styles.img1}`}
                        src="/staff-management-phones.svg"
                        alt="Wakanda"
                        width={672}
                        height={460}
                        // width={250}
                        // height={530}
                    /> 

                </div>
                <div className={` ${styles.div2} col-span-8 sm:col-span-12 md:col-span-6 lg:col-span-7 lg:pt-2 ${styles.flex2}`}>
                    
                    <Image
                        className={`${styles.img1}`}
                        src="/staff-management-phones.svg"
                        alt="Wakanda2"
                        // width={572}
                        // height={460}
                        width={250}
                        height={530}
                    /> 

                </div>

            </div>
        </div>

</section>
  )
}
