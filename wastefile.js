import React from "react";
import Image from "next/image";
import styles from "./ebook.module.css";

const Button = ({ colors }) => {
  return (
    <div className={`grid grid-cols-12  md:grid lg:hidden sm:grid `}>
      <button
        className={`sm:mt-3 sm:mb-9 md:my-4 bg-[${colors}] col-span-6 md:col-span-10 md:col-start-2 sm:col-span-10 sm:col-start-2   text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] py-3 rounded-[15px] `}
      >
        GET STARTED
      </button>
    </div>
  );
};

export default function Pricing() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-body border-green-600 border-b-8 mt-12 font-semibold text-center p-2 ">
          Pricing
        </h1>
        <div class=" md:px-16 w-5/6  rounded">
          <table class=" table-auto  text-center flex flex-col justify-center items-center overflow-scroll md:mx-32 my-16 py-12 rounded-2xl shadow-3xl shadow-[#18A75D26]">
            <thead>
              <tr>
                <th className="font-body px-2  font-semibold border-black border-b-8 ">
                  BENEFITS
                </th>
                <th className=" border-[#EA66E0] px-10 border-b-8 ">
                  <p className="text-[#EA66E0] text-center">STARTER</p>
                  <h1 className="font-body font-semibold text-center">FREE!</h1>
                  <p className="font-normal text-[#87AC9B] text-center">
                    Forever
                  </p>
                  <Button color="#EA66E0" />

                  {/* <button class="rounded-lg bg-[#EA66E0] text-white font-body mb-6 font-semibold px-6 py-3 ">
                    GET STARTED
                  </button> */}
                </th>
                <th className="px-2 border-[#F46E56] border-b-8 ">
                  <p className="text-[#F46E56] text-center">PROFESSIONAL</p>
                  <h1 className="font-body font-semibold text-center">N50K</h1>
                  <p className="font-normal text-[#87AC9B] text-center">
                    Per Month
                  </p>

                  <button class="rounded-lg bg-[#F46E56] text-white font-body mb-6 font-semibold px-9 py-3 ">
                    GET STARTED
                  </button>
                </th>
                <th className="px-8 border-[#4160E0] border-b-8 ">
                  <p className="text-[#4160E0] text-center"> ENTERPRISE</p>
                  <h1 className="font-body font-semibold text-center">N500K</h1>
                  <p className="font-normal text-[#87AC9B] text-center">
                    Per Month
                  </p>
                  <button class="rounded-lg bg-[#4160E0] text-white font-body mb-6 font-semibold px-9 py-3 ">
                    GET STARTED
                  </button>
                </th>
              </tr>
              <tr className="font-body  bg-[#EFF7F0]">
                <td className="font-body px-10  font-semibold  ">SMS</td>
                <td className="  px-16 ">
                  <p className=" text-center">50NGN/SMS</p>
                </td>
                <td className=" pt-2 ">
                  <p className="text-center">
                    <span className="font-semibold ">500 Customized SMS</span>{" "}
                    <br />
                    Extendable @ 40 NGN /SMS
                  </p>
                </td>
                <td className=" pt-2 ">
                  <p className=" text-center">
                    <span className="font-semibold">5000 Customized SMS</span>{" "}
                    <br />
                    Extendable @30 NGN / SMS
                  </p>
                </td>
              </tr>
              <tr className="font-body  bg-[#FFFFFF]">
                <td className="font-body font-semibold uppercase  ">
                  Document Storage
                </td>
                <td className="  px-16 ">
                  <p className=" text-center">400 NGN/GB</p>
                </td>
                <td className=" pt-2 ">
                  <p className="text-center">
                    <span className="font-semibold">10GB Document Storage</span>{" "}
                    <br />
                    Extendable @ 300 NGN /GB
                  </p>
                </td>
                <td className=" pt-2 ">
                  <p className=" text-center">
                    <span className="font-semibold">
                      100GB Document Storage{" "}
                    </span>
                    <br />
                    Extendable @ 250 NGN /GB
                  </p>
                </td>
              </tr>
              <tr className="font-body   bg-[#EFF7F0]">
                <td className="font-body font-semibold uppercase  ">
                  SEATS & CUSTOMERS
                </td>
                <td className="  px-16 ">
                  <p className=" text-center">
                    <span className="font-semibold">20 Seats &</span> <br />
                    Unlimited Customers
                  </p>
                </td>
                <td className=" pt-2 ">
                  <p className="text-center">
                    <span className="font-semibold">Up to 200 Seats</span>{" "}
                    <br />
                    Unlimited Customers
                  </p>
                </td>
                <td className=" pt-2 ">
                  <p className=" text-center">
                    <span className="font-semibold">Up to 1000 Seats</span>{" "}
                    <br />
                    Unlimited Customers
                  </p>
                </td>
              </tr>
              <tr className="font-body  bg-[#FFFFFF]">
                <td className="font-body font-semibold uppercase  ">
                  SUPPORTS
                </td>
                <td className="  px-16 ">
                  <p className=" text-center">Basic Support</p>
                </td>
                <td className=" pt-2 ">
                  <p className="text-center">
                    Dedicated Wakanda Setup &
                    <br />
                    <span className="font-semibold">
                      Support Representative
                    </span>
                  </p>
                </td>
                <td className=" pt-2 ">
                  <p className=" text-center">
                    Dedicated Wakanda Setup &
                    <br />
                    <span className="font-semibold">Support Team</span>
                  </p>
                </td>
              </tr>

              <tr className="font-body  bg-[#EFF7F0]">
                <td className="font-body font-semibold uppercase  ">REPORTS</td>
                <td className="  px-16 ">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
                <td className=" pt-2 ">
                  <p className="text-center">Customized Reports</p>
                </td>
                <td className=" pt-2 ">
                  <p className=" text-center">
                    <span className="font-semibold">Extra</span> <br />
                    Customized Reports
                  </p>
                </td>
              </tr>
              <tr className="font-body  bg-[#FFFFFF]">
                <td className="font-body py-4 font-semibold uppercase  ">
                  ROLE-BASED ACCESS
                </td>
                <td className="  px-16 ">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
                <td className=" pt-2 ">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
                <td className=" pt-2 ">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
              </tr>
              <tr className="font-body  bg-[#EFF7F0]">
                <td className="py-4 font-semibold uppercase  ">
                  CSV CUSTOMER IMPORT
                </td>
                <td className="  px-16 ">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
                <td className=" pt-2 ">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
                <td className=" pt-2 ">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
              </tr>
              <tr className="font-body  bg-[#FFFFFF]">
                <td className="py-4 font-semibold uppercase  ">WEB COCKPIT</td>
                <td className="  px-16 ">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
                <td className=" pt-2 ">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
                <td className=" pt-2 ">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
              </tr>
              <tr className="font-body  bg-[#EFF7F0]">
                <td className="py-4 font-semibold uppercase  ">
                  END-END ENCRYPTION
                </td>
                <td className="  px-16 ">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
                <td className=" pt-2 ">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
                <td className=" pt-2 ">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
              </tr>
              <tr className="font-body  bg-[#FFFFFF]">
                <td className="py-4 font-semibold uppercase  ">
                  WHITE-LABEL APP (NEGOTIABLE)
                </td>
                <td className="  px-16 ">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
                <td className=" pt-2 ">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
                <td className=" pt-2 ">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={72}
                    height={16}
                  />
                </td>
              </tr>
              <tr className="font-body  bg-[#FFFFFF]">
                <td className=" font-semibold border-black border-t-8 ">
                  <span className="text-red-600"> * </span>Prices excluding VAT.
                </td>
                <td className=" border-[#EA66E0]  border-t-8 px-10 ">
                  <button class="rounded-lg mt-16 bg-[#EA66E0] text-white font-body mb-16 font-semibold px-9 py-3 ">
                    GET STARTED
                  </button>
                </td>
                <td className=" border-[#F46E56] border-t-8 pt-2 ">
                  <button class="rounded-lg mt-16 bg-[#F46E56] text-white font-body mb-16 font-semibold px-9 py-3 ">
                    GET STARTED
                  </button>
                </td>
                <td className=" pt-2 border-[#4160E0] border-t-8 ">
                  <button class="rounded-lg mt-16 bg-[#4160E0] text-white font-body mb-16 font-semibold px-9 py-3 ">
                    GET STARTED
                  </button>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}




import React from "react";
import Image from "next/image";
import styles from "./ebook.module.css";

const Button = ({ colors }) => {
  return (
    <div className={`grid grid-cols-12  md:grid lg:hidden sm:grid `}>
      <button
        className={`sm:mt-3 sm:mb-9 md:my-4 bg-[${colors}] col-span-6 md:col-span-10 md:col-start-2 sm:col-span-10 sm:col-start-2   text-white font-semibold tracking-wider shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)] py-3 rounded-[15px] `}
      >
        GET STARTED
      </button>
    </div>
  );
};

export default function Pricing() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-[150px]">
        <h1 className="font-body border-green-600 border-b-8 mt-12 font-semibold text-center p-2 ">
          Pricing
        </h1>

        <div className=" container  rounded-xl shadow shadow-[ #18a75d26]pricing-plans flex mt-6  mx-0 overflow-x-auto ">
          <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 ">
            <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm  sm:mx-auto hover:border-indigo-600 transition-colors duration-300">
              <div className="  border-[#163828] border-b-4 pb-[99px] pt-20 sm:pt-[80px]">
                <p className="leading-tight font-semibold font-body text-[#163828] text-base md:mb-2 mb-8">
                  BENEFITS
                </p>
              </div>

              <div className=" leading-loose">
                <div className="bg-[#EFF7F0]  px-5 font-body font-semibold text-xs md:py-[30px] sm:py-[40.5px]">
                  sms
                </div>
                <div className="font-body font-semibold text-xs md:py-[30px] sm:py-[30px]">
                  DOCUMENT STORAGE
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body font-semibold text-xs  md:py-[30px] sm:py-[37.5px]">
                  SEATS & CUSTOMERS
                </div>
                <div className="font-body font-semibold text-xs py-4">
                  SUPPORTS
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body font-semibold text-xs py-[30px]">
                  REPORTS
                </div>
                <div className="font-body font-semibold text-xs py-[30px]">
                  ROLE BASED ACCESS
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body font-semibold text-xs sm:py-[14px] md:py-[30px]">
                  CSV CUSTOMER IMPORT
                </div>
                <div className="font-body font-semibold text-xs py-[30px]">
                  WEB COCKPIT
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body font-semibold text-xs sm:py-[22px] md:py-[30px]">
                  END-TO-END ENCRYPTION
                </div>
                <div className="font-body font-semibold text-xs sm:py-[16px] md:py-[24px]">
                  WHITE-LABEL APP
                  <span className=" font-normal">(NEGOTIABLE)</span>
                </div>

                <div className="mt-6 pt-8  border-[#163828] border-t-4 text-[#648B7A] font-body font-semibold text-sm text-center">
                  <span className="text-red-600 text-lg "> * </span>
                  Prices excluding VAT.
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
            <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
              <div className="  border-[#EA66E0] border-b-4 ">
                <p className="leading-tight font-semibold font-body text-[#EA66E0] text-base mb-2">
                  STARTER
                </p>
                <h4 className="text-[#163828] font-semibold text-[46px] font-body">
                  FREE!
                </h4>
                <p className="text-[#87AC9B] font-body text-sm font-normal">
                  Forever!
                </p>
                <button className="rounded-lg bg-[#EA66E0] text-white font-body mb-4 font-semibold px-9 py-3 ">
                  GET STARTED
                </button>
              </div>
              {/* <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                    <div className="">
                      <span className="text-4xl font-semibold">$19</span> /year
                    </div>
                  </div> */}
              <div className=" leading-loose">
                <div className="bg-[#EFF7F0]  px-5 font-body font-normal text-xs lg:py-[30px]  md:py-[30px] sm:py-[32px]">
                  50 NGN/SMS
                </div>
                <div className="font-body font-normal text-xs py-[30px]">
                  50 NGN/GB
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body font-normal text-xs py-[30px]">
                  20 Seats & Unlimited Customers
                </div>
                <div className="font-body font-normal text-xs  py-[22.5px]">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body font-normal text-xs sm:py-[29px] md:py-[28.5px]">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="font-body font-normal text-xs sm:py-[29px] md:py-[28.5px]">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body font-normal text-xs sm:py-[29px] py-[28.5px]">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="font-body font-normal text-xs  py-[28.5px]">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body  text-xs  py-[28.5px]">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="font-body font-normal text-xs  py-[22.5px]">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="mt-6 py-4  border-[#EA66E0] border-t-4">
                  <button className="rounded-lg bg-[#EA66E0] text-white font-body mb-4 font-semibold px-6 py-2 ">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
            <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
              <div className="  border-[#F46E56] border-b-4 ">
                <p className="leading-tight font-semibold font-body text-[#F46E56] text-base mb-2">
                  PROFESSIONAL
                </p>
                <h4 className="text-[#163828] font-semibold text-[46px] font-body">
                  N50K
                </h4>
                <p className="text-[#87AC9B] font-body text-sm font-normal">
                  Per Month
                </p>
                <button className="rounded-lg bg-[#F46E56] text-white font-body mb-4 font-semibold px-9 py-3 ">
                  GET STARTED
                </button>
              </div>
              {/* <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                    <div>
                      <span className="text-4xl font-semibold">$29</span> /year
                    </div>
                  </div> */}
              <div className=" leading-loose">
                <div className="bg-[#EFF7F0]  px-5 font-body font-normal text-xs md:py-[22px] ">
                  <span className="font-semibold">500 Customized SMS</span>
                  <br />
                  Extendable @ 40 NGN /SMS
                </div>
                <div className="font-body font-normal text-xs py-[22px]">
                  <span className="font-semibold">10GB Document Storage</span>
                  <br />
                  Extendable @ 300 NGN /GB
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body font-normal text-xs py-[22px]">
                  <span className="font-semibold">Up to 200 Seats</span>
                  <br />
                  Unlimited Customers
                </div>
                <div className="font-body font-normal text-xs py-[16px]">
                  Dedicated Wakanda Setup
                  <br />
                  <span className="font-semibold">
                    & Support Representative
                  </span>
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body font-normal text-xs  sm: py-[22px] md:py-[30px]">
                  Customized Report
                </div>
                <div className="font-body font-normal text-xs  py-[28.5px]">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body  text-xs py-[28.5px]">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="font-body font-normal text-xs  py-[28.5px]">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body  text-xs py-[28.5px]">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="font-body font-normal text-xs    py-[22.5px]">
                  <Image
                    src="/Red-X.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="mt-6 py-4  border-[#F46E56] border-t-4">
                  <button className="rounded-lg bg-[#F46E56] text-white font-body mb-4 font-semibold px-6 py-2">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
            <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
              <div className="  border-[#4160E0] border-b-4 ">
                <p className="leading-tight font-semibold font-body text-[#4160E0] text-base mb-2">
                  ENTERPRISE
                </p>
                <h4 className="text-[#163828] font-semibold text-[46px] font-body">
                  500K
                </h4>
                <p className="text-[#87AC9B] font-body text-sm font-normal">
                  Per Month
                </p>
                <button className="rounded-lg bg-[#4160E0] text-white font-body mb-4 font-semibold px-9   py-3 ">
                  GET STARTED
                </button>
              </div>
              {/* <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                    <div className="">
                      <span className="text-4xl font-semibold">$39</span> /year
                    </div>
                  </div> */}
              <div className=" leading-loose">
                <div className="bg-[#EFF7F0]  px-5 font-body font-normal text-xs md:py-[22px] ">
                  <span className="font-semibold">500 Customized SMS</span>
                  <br />
                  Extendable @ 30 NGN /SMS
                </div>
                <div className="font-body font-normal text-xs py-[22px]">
                  <span className="font-semibold">100GB Document Storage</span>
                  <br />
                  Extendable @ 250 NGN /GB
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body font-normal text-xs md:py-[22px] sm:py-[14px]">
                  <span className="font-semibold">Up to 10,000 Seats</span>
                  <br />
                  Unlimited Customers
                </div>
                <div className="font-body font-normal text-xs py-[16px]">
                  Dedicated Wakanda Setup
                  <br />
                  <span className="font-semibold">& Support Team</span>
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body font-normal text-xs  sm:py-[14px] md:py-[22px]">
                  <span className="font-semibold">Extra</span>
                  <br />
                  Customized Report
                </div>
                <div className="font-body font-normal text-xs  py-[28.5px]">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body  text-xs py-[28.5px]">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="font-body font-normal text-xs  py-[28.5px]">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="bg-[#EFF7F0]  px-5 font-body  text-xs py-[28.5px]">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="font-body font-normal text-xs  py-[22.5px]">
                  <Image
                    src="/checkmark-round.svg"
                    alt="Wakanda"
                    width={65}
                    height={15}
                  />
                </div>
                <div className="mt-6 py-4  border-[#4160E0] border-t-4">
                  <button className="rounded-lg bg-[#4160E0] text-white font-body mb-4 font-semibold px-6 py-2 ">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
