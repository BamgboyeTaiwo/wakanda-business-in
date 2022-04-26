import React from "react";
import styles from "./Offers.module.css";
import img1 from "../../public/layer2.png";
import Image from "next/image";
// import Logo from "../../public/Group1.png";

export default function Offers() {
  const img = require(`../../public/offers1.png`).default;
  return (
    <section className="bg-[#EFF7F0] pt-4 text-[#163828] font-body">
      <div className={`container sm:pb-3 px-3 ${styles.containerst}`}>
        <h1
          className={` text-center text-2xl font-semibold tracking-wider text-[#163828] py-2 mt-4 font-body ${styles.title}`}
        >
          FEATURES
        </h1>
        <h1
          className={`text-center lg:text-3xl font-body tracking-wider sm:my-2 lg:my-16 font-medium text-[#163828] sm:text-sm ${styles.title_desp}`}
        >
          Wakanda CRM is Built to Bridge the Gap between <br /> your Business
          and Customers, Management and Staff.
        </h1>

        <div
          className={`grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12  ${styles}`}
        >
          <div className="col-span-4 sm:col-span-12 md:col-span-5 lg:col-span-5">
            <h1
              className={`text-[#00A85A] font-body tracking-wider font-semibold sm:text-[15px] mb-4 lg:mb-5 ${styles.businessheader}`}
            >
              BUSINESS/CUSTOMER MANAGEMENT
            </h1>

            <div className={styles.colsdiv}>
              <div className="grid grid-cols-12 sm:mb-3 lg:mb-6">
                <div className="col-span-3 mx-2 ">
                  <Image
                    src="/data-management-icon.svg"
                    alt="Wakanda"
                    width={472}
                    height={356}
                  />
                </div>
                <div className={`col-span-9 ${styles.content_title}`}>
                  <h3 className="text-lg font-semibold">
                    Data Management for your Prospects and customers
                  </h3>
                  <p>
                    Data Management for your Prospects and customers Wakanda CRM
                    Provides all the necessary tools to work with existing
                    clients. Essentially, it offers a database of names, emails,
                    phone numbers and past communications history in a clear cut
                    and precise way.
                  </p>
                </div>
              </div>
              {/* dgcusjf */}

              <div className="grid grid-cols-12  sm:mb-3 lg:mb-6">
                <div className="col-span-3 mx-2 ">
                  <Image
                    src="/categorized-data-icon.svg"
                    alt="Wakanda"
                    width={472}
                    height={356}
                  />
                </div>
                <div className={`col-span-9 ${styles.content_title}`}>
                  <h3 className="text-lg font-semibold">
                    Categorized Customer data
                  </h3>
                  <p>
                    Improve marketing efficiency with categorized existing
                    customer database to reach individual clients with targeted
                    offers via email, SMS, phone, messengers or social media.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12  sm:mb-3 lg:mb-6">
                <div className="col-span-3 mx-2 ">
                  <Image
                    src="/alerts-icon.svg"
                    alt="Wakanda"
                    width={472}
                    height={356}
                  />
                </div>
                <div className={`col-span-9 ${styles.content_title}`}>
                  <h3 className="text-lg font-semibold">
                    Alerts and Reminders
                  </h3>
                  <p>
                    Receive quick alerts, task reminders, and suggestions for
                    the best times to contact your leads based on your past
                    successful interaction, stay on top of your activities, and
                    follow up better with your clients.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12  sm:mb-3 lg:mb-6">
                <div className="col-span-3 mx-2 ">
                  <Image
                    src="/performance-icon.svg"
                    alt="Wakanda"
                    width={472}
                    height={356}
                  />
                </div>
                <div className={`col-span-9 ${styles.content_title}`}>
                  <h3 className="text-lg font-semibold">Performance Report</h3>
                  <p>
                    As your business is growing and evolving, Wakanda CRM tracks
                    the progress and provide real time reports on your business
                    performance.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12  sm:mb-3 lg:mb-6">
                <div className="col-span-3 mx-2 ">
                  <Image
                    src="/communicate-icon.svg"
                    alt="Wakanda"
                    width={472}
                    height={356}
                  />
                </div>
                <div className={`col-span-9 ${styles.content_title}`}>
                  <h3 className="text-lg font-semibold">
                    Communicate with your customer from anywhere
                  </h3>
                  <p>
                    Wakanda CRM enables easy communicate with clients and
                    staying productive from anywhere at anytime.
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

          {/* <div className={`col-span-8 sm:col-span-12 md:col-span-8 lg:col-span-7 lg:pt-2 ${styles.flex2}`}> */}

          {/* <img src='/images/Group 938.png' className={`w-50 relative ${styles.group938}`} alt="" />  */}
          {/* <img src="/images/Group 938.png" className={`w-50 relative ${styles.group938}`} alt="" />
                <img src='/images/Messages.png' className={`relative ${styles.messages}`} alt="" />
                <img src='/images/Group 928.png' className={`absolute ${styles.group928}`} alt="" />
                <img src='/images/Group 937.png' className={`absolute ${styles.group937}`} alt="" />
                <img src='/images/Layer_x-1.png' className={`absolute ${styles.layer_x}`} alt="" /> */}

          {/* </div> */}
          <div
            className={`col-span-8 sm:col-span-12 md:col-span-7 lg:col-span-7 lg:pt-2 ${styles.flex2}`}
          >
            <div className={`wrapper lg:mt-[10px] ${styles.wrapper}`}>
              {/* <img src='/images/Group 928.png' className={`absolute ${styles.group933}`} alt="" />
                            <img src='/images/Group 937.png' className={`absolute ${styles.group842}`} alt="" />
                            <img src='/images/Messages.png' className={`absolute ${styles.messagespng}`} alt="" />
                            <img src='/images/Layer_x-1.png' className={`absolute ${styles.layer_x}`} alt="" /> */}
              <img
                src="/images/Group 938.png"
                className={` ${styles.group938}`}
                alt=""
              />
              <img
                src="/images/Messages.png"
                className={`absolute ${styles.messages}`}
                alt=""
              />
              <img
                src="/images/Group 928.png"
                className={`absolute ${styles.group928}`}
                alt=""
              />
              <img
                src="/images/Group 937.png"
                className={`absolute ${styles.group937}`}
                alt=""
              />
              <img
                src="/images/Layer_x-1.png"
                className={`absolute ${styles.layer_x}`}
                alt=""
              />
              <img
                src="/images/Component 62.png"
                className={`absolute ${styles.customerpng}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
