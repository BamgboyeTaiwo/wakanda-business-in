import React from "react";
import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className="pb-16">
      <div className={`w-100 h-50  ${styles.img_div}`}>
        <img src="/About_page.svg" alt="" width="100%" height="100%" />

        <div
          className={` absolute w-[fit-content] font-body tracking-[1.08px] leading-[85px] ${styles.about_text}`}
        >
          <h2 className="font-body font-bold">About us</h2>
        </div>
      </div>

      <div className="container lg:mb-[4rem] md:mb-5 sm:mb-[7rem] py-9 sm:px-[0rem!important] lg:w-[100%!important] md:w-100 sm:w-[90%]">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-100 md:block lg:grid ">
          <div
            className={`font-body sm:px-5 lg:p-5 md:p-5 tracking-[1.08px] leading-8 font-[13px] ${styles.box_one}`}
          >
            {/* <h2>About US</h2> */}
            <p>
              Wakanda CRM Solution is a venture of African Founders Ltd. We are
              a leading African early stage holding company committed to helping
              businesses succeed.
            </p>
            <p>
              At Wakanda, our purpose is to ensure that every business succeeds
              through our simple and easy-to-use Customer Relationship
              Management Solutions tools and by providing a technology platform
              to connect, build trust, and exchange value.
            </p>
            <p>
              As a technology company, we innovate for our users with one core
              belief: Life can be better. As a result, we have created Wakanda
              CRM solutions: one tailored “super-app solutions” with an African
              way of building trust and success at its heart.
            </p>
            <p>
              A CRM solution created to help you effectively manage your clients
              while building a more structured business devoid of stress.
            </p>
            <p>We have got you covered today.</p>
          </div>
          <div className="mt-8">
            {/* <div className={styles.greenrect}></div> */}
            <Image
              src="/about__us.svg"
              alt="About Image"
              placeholder="blur"
              blurDataURL="/about-us.svg"
              quality={75}
              width={572}
              height={440}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
