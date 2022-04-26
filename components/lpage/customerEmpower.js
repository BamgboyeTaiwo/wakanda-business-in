import React from "react";
import styles from "./customerEmpower.module.css";

export default function customerEmpower() {
  return (
    <section className="bg-[#EFF7F0] pt-4 text-[#163828] font-['Raleway'] ">
      <div className={`container px-3 ${styles.containerst}`}>
        <div
          className={`grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12  ${styles}`}
        >
          <div
            className={` sm:hidden md:block lg:block col-span-8 sm:col-span-12 md:col-span-7 lg:col-span-7 lg:pt-2 ${styles.flex2}`}
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
          </div>

          <div
            className={`col-span-4 sm:col-span-12 md:col-span-5 lg:col-span-5 ${styles.flexbox}`}
          >
            <h1
              className={`text-[#00A85A] font-['Raleway'] text-bold sm:text-[15px] mb-4 lg:mb-5 ${styles.businessheader}`}
            >
              CUSTOMER EMPOWERMENT
              {/* <hr className={styles.dash}/> */}
            </h1>
            <div className={styles.cols}>
              <div className="grid grid-cols-12 sm:mb-3 lg:mb-3 md:mb-1">
                <div className="col-span-3 mx-2 ">
                  <img src="/images/Group -8.png" alt="" />
                </div>
                <div className={`col-span-9 ${styles.content_title}`}>
                  <h3 className="">Help your customers succeeds</h3>
                  <p>
                    You customer can also gain access to the Wakanda Market App
                    to sell their products and services and also receive free
                    consultation from the BabaOja Wisdom Series.
                  </p>
                </div>
              </div>
              {/* dgcusjf */}

              <div className="grid grid-cols-12  sm:mb-3 md:mb-1 lg:mb-3">
                <div className="col-span-3 mx-2 ">
                  <img src="/images/Group -7.png" alt="" />
                </div>
                <div className={`col-span-9 ${styles.content_title}`}>
                  <h3>Performance Report</h3>
                  <p>
                    As your business is growing and evolving, Wakanda CRM tracks
                    the progress and provide real time reports on your business
                    performance.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12  sm:mb-3 md:mb-1 lg:mb-6">
                <div className="col-span-3 mx-2 ">
                  <img src="/images/Group -6.png" alt="" />
                </div>
                <div className={`col-span-9 ${styles.content_title}`}>
                  <h3>Free! and Easy to Use</h3>
                  <p>
                    Wakanda is free for both your online and offline customers,
                    through the Wakanda App and SMS alerts
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12  sm:mb-3 md:mb-1 lg:mb-6">
                <div className="col-span-3 mx-2 ">
                  <img src="/images/Group -5.png" alt="" />
                </div>
                <div className={`col-span-9 ${styles.content_title}`}>
                  <h3>Communication and Feedbacks</h3>
                  <p>
                    Your customers can communicate with you and also provide
                    their honest feedbacks towards your business with the
                    anonymous voice feature.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12  sm:mb-3 lg:mb-6">
                <button
                  className={`col-start-3 col-span-7 bg-[#00A85A] md:col-span-8 md:col-start-3 md:py-1 md:px-1 ${styles.btn} text-white font-bold  py-3 px-4 rounded`}
                >
                  GET STARTED NOW {">"}
                </button>
              </div>
            </div>
          </div>

          {/* only display when small */}

          <div
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
          </div>
        </div>
      </div>
    </section>
  );
}
