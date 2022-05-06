import React from "react";
import Image from "next/image";
import styles from "./ebook.module.css";

export default function Ebook() {
  return (
    <section className={`font-body`}>
      <div
        className={`lg:flex md:flex sm:h-[fit-content] md:px-8  h-[100vh] bg-[#EFF7F0] sm:block sm:mb-[30vh] sm:w-[100vw] lg:mb-[50px] md:mb-0`}
      >
        <div>
          <Image
            src="/e_book.svg"
            alt="E-book"
            placeholder="blur"
            blurDataURL="/e_book.svg"
            quality={75}
            width={972}
            height={860}
            loading="lazy"
          />
        </div>

        <div className={`col-span-6 py-44  ${styles.content_div}`}>
          <h1 className={` text-[#00A85A] font-semibold`}>FREE! EBOOK</h1>
          <h5 className={` text-[#163828] font-semibold sm:text-[x-large]`}>
            7 Reasons You Need To Turn Your Business To A Mobile Business
          </h5>

          <button
            className={` mt-4 bg-[#00A85A] text-center text-white md:rounded lg:rounded
                    sm:py-7 sm:text-xl sm:rounded-[10px] sm:w-[70%] 
                     md:py-3 md:px-3 md:text-[15px]
                     lg:py-3 lg:px-3  `}
          >
            GET IT NOW
          </button>
        </div>
      </div>
      <div
        className={` ${styles.helper_div} sm:block  md:block lg:hidden md:h-[10vh]`}
      ></div>
    </section>
  );
}
