import React from "react";
import Image from "next/image";
import styles from "./ebook.module.css";

export default function Pricing() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-body border-green-600 border-b-8 mt-12 font-semibold text-center p-2 ">
          Pricing
        </h1>
        <div class=" md:px-10 w-5/6  rounded border-b border-gray-200">
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
                  <button class="rounded-lg bg-[#EA66E0] text-white font-body mb-6 font-semibold px-6 py-3 ">
                    GET STARTED
                  </button>
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
