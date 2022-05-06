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
      </div>

      <div class=" md:px-20  rounded border-b border-gray-200">
        <table class=" table-auto text-center flex flex-col justify-center items-center overflow-scroll md:mx-32 my-16 py-12 rounded-2xl shadow-3xl shadow-[#18A75D26]">
          <thead>
            <tr>
              <th className="font-body px-10  font-semibold border-black border-b-8 ">
                BENEFITS
              </th>
              <th className=" border-[#EA66E0] px-16 border-b-8 ">
                <p className="text-[#EA66E0] text-center">STARTER</p>
                <h1 className="font-body font-semibold text-center">FREE!</h1>
                <p className="font-normal text-[#87AC9B] text-center">
                  Forever
                </p>
                <button class="rounded-lg bg-[#EA66E0] text-white font-body mb-6 font-semibold px-9 py-3 ">
                  GET STARTED
                </button>
              </th>
              <th className="px-10 border-[#F46E56] border-b-8 ">
                <p className="text-[#F46E56] text-center">PROFESSIONAL</p>
                <h1 className="font-body font-semibold text-center">N50K</h1>
                <p className="font-normal text-[#87AC9B] text-center">
                  Per Month
                </p>

                <button class="rounded-lg bg-[#F46E56] text-white font-body mb-6 font-semibold px-9 py-3 ">
                  GET STARTED
                </button>
              </th>
              <th className="px-12 border-[#4160E0] border-b-8 ">
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
          </thead>
          <tbody className="">
            <tr className="font-body  bg-[#EFF7F0]">
              <td className="font-semibold w-1/6 pt-2">SMS</td>
              <td className="w-1/6 pt-2">50NGN/SMS</td>
              <td className="w-2/6 pt-2">
                <p className="text-center">
                  <span className="font-semibold">500 Customized SMS</span>{" "}
                  <br />
                  Extendable @ 40 NGN /SMS
                </p>
              </td>
              <td className="text-center w-2/6 pt-2 ">
                <p className="text-center">
                  <span className="font-semibold">5000 Customized SMS</span>{" "}
                  <br />
                  Extendable @30 NGN / SMS
                </p>
              </td>
            </tr>
            <tr className="bg-[#FFFFFF] font-body">
              <td class=" text-center font-semibold uppercase ">
                Document Storage
              </td>
              <td class=" text-center  px-4">400 NGN/GB</td>
              <td class="text-left  px-4">
                <p className="text-center">
                  <span className="font-semibold">10GB Document Storage</span>{" "}
                  <br />
                  Extendable @ 300 NGN /GB
                </p>
              </td>
              <td class="text-center">
                <p className="">
                  <span className="font-semibold">100GB Document Storage </span>
                  <br />
                  Extendable @ 250 NGN /GB
                </p>
              </td>
            </tr>

            <tr className="bg-[#EFF7F0] font-body">
              <td class=" text-center  px-32 font-semibold ">
                SEATS & CUSTOMERS
              </td>
              <td class=" text-center">
                <p>
                  <span className="font-semibold">20 Seats &</span> <br />
                  Unlimited Customers
                </p>
              </td>
              <td class="text-center">
                <p>
                  <span className="font-semibold">Up to 200 Seats</span> <br />
                  Unlimited Customers
                </p>
              </td>
              <td class="text-center">
                <p>
                  <span className="font-semibold">Up to 1000 Seats</span> <br />
                  Unlimited Customers
                </p>
              </td>
            </tr>
            <tr className="bg-[#FFFFFF] font-body">
              <td class=" text-center py-3 px-4 font-semibold ">SUPPORTS</td>
              <td class=" text-center py-3 px-4">
                <p>Basic Support</p>
              </td>
              <td class="text-center py-3 px-4">
                <p>
                  Dedicated Wakanda Setup &
                  <br />
                  <span className="font-semibold">Support Representative</span>
                </p>
              </td>
              <td class="text-center py-3 px-4">
                <p>
                  Dedicated Wakanda Setup & <br />
                  <span className="font-semibold"> Support Team</span>
                </p>
              </td>
            </tr>
            <tr className="bg-[#EFF7F0] font-body">
              <td class=" text-center py-3 px-4 font-semibold ">REPORTS</td>
              <td class=" text-center font-semibold text-red-500 ">X</td>
              <td class="text-center pt-3">
                <p> Customized Reports</p>
              </td>
              <td class="text-center pt-2 ">
                <p>
                  <span className="font-semibold">Extra</span> <br />
                  Customized Reports
                </p>
              </td>
            </tr>
            <tr className="bg-[#FFFFFF] font-body">
              <td class=" text-center py-3  font-semibold ">
                ROLE-BASED ACCESS
              </td>
              <td class=" text-center font-semibold text-red-500">X</td>
              <td class="text-center">
                <Image
                  src="/checkmark-round.svg"
                  alt="Wakanda"
                  width={72}
                  height={16}
                />
              </td>
              <td class="text-center ">
                <Image
                  src="/checkmark-round.svg"
                  alt="Wakanda"
                  width={72}
                  height={16}
                />
              </td>
            </tr>
            <tr className="bg-[#EFF7F0] font-body">
              <td class=" text-center py-3  font-semibold ">
                CSV CUSTOMER IMPORT
              </td>
              <td class="text-center font-semibold text-red-500">X</td>
              <td class="text-center">
                <Image
                  src="/checkmark-round.svg"
                  alt="Wakanda"
                  width={72}
                  height={16}
                />
              </td>
              <td class="text-center ">
                <Image
                  src="/checkmark-round.svg"
                  alt="Wakanda"
                  width={72}
                  height={16}
                />
              </td>
            </tr>
            <tr className="bg-[#FFFFFF] font-body">
              <td class=" text-center py-3  font-semibold ">WEB COCKPIT</td>
              <td class=" text-center font-semibold text-red-500">X</td>
              <td class="text-center">
                <Image
                  src="/checkmark-round.svg"
                  alt="Wakanda"
                  width={72}
                  height={16}
                />
              </td>
              <td class="text-center ">
                <Image
                  src="/checkmark-round.svg"
                  alt="Wakanda"
                  width={72}
                  height={16}
                />
              </td>
            </tr>
            <tr className="bg-[#EFF7F0] font-body">
              <td class=" text-center py-3  font-semibold ">
                END-TO-END ENCRYPTION
              </td>
              <td class=" text-center font-semibold text-red-500">X</td>
              <td class="text-center font-semibold text-red-500">X</td>
              <td class="text-center ">
                <Image
                  src="/checkmark-round.svg"
                  alt="Wakanda"
                  width={72}
                  height={16}
                />
              </td>
            </tr>
            <tr className="bg-[#FFFFFF] font-body">
              <td class=" text-center py-3  font-semibold ">
                WHITE-LABEL APP (NEGOTIABLE)
              </td>
              <td class=" text-center font-semibold text-red-500">X</td>
              <td class="text-center font-semibold text-red-500">X</td>
              <td class="text-center ">
                <Image
                  src="/checkmark-round.svg"
                  alt="Wakanda"
                  width={72}
                  height={16}
                />
              </td>
            </tr>
            <tr className="bg-[#FFFFFF] font-body">
              <td class=" text-center py-3  font-semibold ">
                <span className="text-red-600"> * </span>Prices excluding VAT.
              </td>
              <td class=" text-center">
                <button class="rounded-lg mt-16 bg-[#EA66E0] text-white font-body mb-16 font-semibold px-9 py-3 ">
                  GET STARTED
                </button>
              </td>
              <td class="text-center">
                <button class="rounded-lg mt-16 bg-[#F46E56] text-white font-body mb-16 font-semibold px-9 py-3 ">
                  GET STARTED
                </button>
              </td>
              <td class="text-center ">
                <button class="rounded-lg mt-16 bg-[#4160E0] text-white font-body mb-16 font-semibold px-9 py-3 ">
                  GET STARTED
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
