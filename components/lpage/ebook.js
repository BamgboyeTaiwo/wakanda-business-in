import React from "react";
import Image from "next/image";
import styles from "./ebook.module.css";

export default function Ebook() {
  return (
    <div className="container py-32 sm:pb-96 md:pb-32 grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-2 sm:mb-16">
      <div>
        <Image
          src="/e-book.png"
          alt="E-book"
          placeholder="blur"
          blurDataURL="/e-book.png"
          quality={75}
          width={972}
          height={860}
          loading="lazy"
        />
      </div>

      <div className="">
        <h1
          className={` text-[50px] tracking-wide  text-[#00A85A] font-semibold text-`}
        >
          FREE! EBOOK
        </h1>
        <p
          className={` text-[#163828] tracking-wide leading-9 font-body sm:text-lg`}
        >
          7 Reasons You Need To Turn <br /> Your Business To A Mobile
          <br /> Business
        </p>

        <button
          className={` mt-4 bg-[#00A85A] font-body text-center text-white md:rounded lg:rounded
                    sm:py-7 sm:text-xl sm:rounded-[10px] sm:w-[70%] md:w-[40%]
                     md:py-3 md:px-3 md:text-[15px]
                     lg:py-3 lg:px-3  `}
        >
          GET IT NOW
        </button>
      </div>
    </div>
    // <div
    //   className={`lg:flex md:flex sm:h-[fit-content] sm:pb-52 md:px-8  h-[100vh] bg-[#EFF7F0]  sm:mb-[30vh] sm:w-[100vw]  md:mb-0`}
    // >
    //   <div>
    //     <Image
    //       src="/e-book.png"
    //       alt="E-book"
    //       quality={75}
    //       width={672}
    //       height={660}
    //     />
    //   </div>

    //   <div className={`col-span-6 py-44  ${styles.content_div}`}>
    //     <h1
    //       className={` text-[50px] tracking-wide  text-[#00A85A] font-semibold text-`}
    //     >
    //       FREE! EBOOK
    //     </h1>
    //     <p
    //       className={` text-[#163828] tracking-wide leading-9 font-body sm:text-lg`}
    //     >
    //       7 Reasons You Need To Turn <br /> Your Business To A Mobile
    //       <br /> Business
    //     </p>

    //     <button
    //       className={` mt-4 bg-[#00A85A] font-body text-center text-white md:rounded lg:rounded
    //                 sm:py-7 sm:text-xl sm:rounded-[10px] sm:w-[70%] md:w-[40%]
    //                  md:py-3 md:px-3 md:text-[15px]
    //                  lg:py-3 lg:px-3  `}
    //     >
    //       GET IT NOW
    //     </button>
    //   </div>
    // </div>
  );
}
