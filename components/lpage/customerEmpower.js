import React from "react";
import Image from "next/image";
import styles from "./customerEmpower.module.css";

export default function customerEmpower() {
  return (
    <section className="bg-[#EFF7F0] text-[#163828] font-['Raleway'] ">
      <div className={``}>
        <div
          className={`grid   grid-cols-12 sm:grid-cols-12 gap-0 lg:gap-14 md:grid-cols-12 lg:grid-cols-12 `}
        >
          <div
            className={` sm:hidden md:block lg:block col-span-8 sm:col-span-12 md:col-span-7 lg:col-span-7 lg:pt-2`}
          >
            <div>
              <Image
                src="/customer_empowerment.png"
                width="1326"
                height="1297"
                layout="responsive"
              />
            </div>
          </div>

          <div className="col-span-4 sm:col-span-12 md:col-span-6 lg:col-span-5 ">
            <h1
              className={`text-[#00A85A] font-['Raleway'] text-center ml-24 lg:ml-12 text-bold sm:text-[15px] mb-4 lg:mb-5 ${styles.businessheader}`}
            >
              CUSTOMER EMPOWERMENT
            </h1>
            <div className="lg:mr-28 sm:mr-2 sm:px-10">
              <div className="grid grid-cols-12 sm:mb-3 lg:mb-3 md:mb-1  ">
                <div className="col-span-3 mx-2 ">
                  {/* <img src="/images/Group -8.png" alt="" /> */}
                  <Image
                    src="/Help customer.svg"
                    alt="Wakanda"
                    width={472}
                    height={356}
                    placeholder="blur"
                    blurDataURL="/Help customer.svg"
                  />
                </div>
                <div className={`col-span-9`}>
                  <h3 className="text-lg font-semibold">
                    Help your customers succeeds
                  </h3>
                  <p className="text-normal tracking-wider leading-7">
                    You customer can also gain access to the Wakanda Market App
                    to sell their products and services and also receive free
                    consultation from the BabaOja Wisdom Series.
                  </p>
                </div>
              </div>
              {/* dgcusjf */}

              <div className="grid grid-cols-12  sm:mb-3 md:mb-1 lg:mb-3">
                <div className="col-span-3 mx-2 ">
                  <Image
                    src="/performance-icon.svg"
                    alt="Wakanda"
                    width={472}
                    height={356}
                  />
                </div>
                <div className={`col-span-9`}>
                  <h3 className="text-lg font-semibold">Performance Report</h3>
                  <p className="text-normal tracking-wider leading-7">
                    As your business is growing and evolving, Wakanda CRM tracks
                    the progress and provide real time reports on your business
                    performance.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12  sm:mb-3 md:mb-1 lg:mb-6">
                <div className="col-span-3 mx-2 ">
                  {/* <img src="/images/Group -6.png" alt="" /> */}
                  <Image
                    src="/Easy to use.svg"
                    alt="Wakanda"
                    width={472}
                    height={356}
                  />
                </div>
                <div className={`col-span-9`}>
                  <h3 className="text-lg font-semibold">
                    Free! and Easy to Use
                  </h3>
                  <p className="text-normal tracking-wider leading-7">
                    Wakanda is free for both your online and offline customers,
                    through the Wakanda App and SMS alerts
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12  sm:mb-3 md:mb-1 lg:mb-6">
                <div className="col-span-3 mx-2 ">
                  <Image
                    src="/communicate-icon.svg"
                    alt="Wakanda"
                    width={472}
                    height={356}
                  />
                </div>
                <div className={`col-span-9`}>
                  <h3 className="text-lg font-semibold">
                    Communication and Feedbacks
                  </h3>
                  <p className="text-normal tracking-wider leading-7">
                    Your customers can communicate with you and also provide
                    their honest feedbacks towards your business with the
                    anonymous voice feature.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 sm:mb-3 lg:mb-6">
                <button
                  className={` col-span-12 text-center  lg:ml-10 bg-[#00A85A] md:col-span-8 md:col-start-3 md:py-1 md:px-1 } text-white font-semibold  py-3 px-8 rounded`}
                >
                  GET STARTED NOW {">"}
                </button>
              </div>
            </div>
          </div>

          {/* only display when small */}

          <div
            className={` sm:block md:hidden lg:hidden col-span-8 sm:col-span-12 md:col-span-7 lg:col-span-7 lg:pt-2`}
          >
            <div>
              <Image
                src="/customer.svg"
                width="1326"
                height="1297"
                layout="responsive"
              />
            </div>
          </div>

          {/* <div
            className={`col-span-8 sm:col-span-12 sm:block md:hidden lg:hidden   md:col-span-7 lg:col-span-7 lg:pt-2 ${styles.flex2}`}
          >
            <div className={`wrapper lg:mt-[10px] ${styles.wrapper}`}>
              <img
                src="/images/Group 933.png"
                className={`absolute ${styles.group933}`}
                alt=""
              />
              <img
                src="/images/Group 842.png"
                className={`absolute ${styles.group842}`}
                alt=""
              />
              <img
                src="/images/Component 62.png"
                className={`absolute ${styles.messagespng}`}
                alt=""
              />
              <img
                src="/images/Layer_x-1.png"
                className={`absolute ${styles.layer_x}`}
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
