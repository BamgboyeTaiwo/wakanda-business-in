import React from 'react';
import Image from "next/image";
import styles from "./ebook.module.css";

export default function Ebook() {
  return (
    
    <section className={` font-body bg-[#EFF7F0]`}> 
        <div className={`lg:flex md:flex sm:h-[fit-content] h-[100vh] bg-[#EFF7F0] sm:block sm:mb-[30vh] sm:w-[100vw] lg:mb-[50px] md:mb-0`}>
            <div className={`col-span-6 ${styles.Img_container}`}>
                <h1 className={` font-semibold text-[#00A85A] p-7 text-[70px] sm:block md:hidden lg:hidden`}>
                    FREE! <br/> EBOOK
                </h1>  

                <img
                        className={`lg:p-[100px !important] ${styles.book_img}`}
                        src="/images/Free_book.png" 
                        alt="Wakanda"
                        width={'100%'}
                        // width={1300}
                        // height={700}
                        // layout='responsive'
                    />

            </div>

            <div className={`col-span-6  ${styles.content_div}`}>
                <h1 className={` text-[#00A85A] font-bold sm:hidden md:block`}>
                    FREE! EBOOK
                </h1>  
                <h5 className={` text-[#163828] font-semibold sm:text-[x-large]`}>
                    7 Reasons You Need To Turn Your Business To A Mobile Business
                </h5>

                <button className={ 
                    ` mt-4 bg-[#00A85A] text-center text-white md:rounded lg:rounded
                    sm:py-7 sm:text-xl sm:rounded-[10px] sm:w-[70%] 
                    md:float-right md:py-3 md:px-3 md:text-[15px]
                     lg:py-3 lg:px-3 lg:float-right `}>
                    GET IT NOW
                </button>

            </div>

        </div>
        <div className={` ${styles.helper_div} sm:block  md:block lg:hidden md:h-[10vh]`}>

        </div>

    </section>
  )
}
