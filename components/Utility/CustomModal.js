import React from "react";
import Image from "next/image";

const CustomModal = ({ toggleCustomModal }) => {
  return (
    <>
      <div className="fixed inset-0 z-30 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-75"
          onClick={toggleCustomModal}
        ></div>

        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative  md:w-[395px] w-full max-w-lg p-4 mx-auto bg-[#FFFFFF] rounded-xl shadow-[#18A75D26] shadow-lg z-50">
            <div
              className=" w-10 h-10 bg-white rounded-full text-base font-bold text-[#163828] border-[#163828] border-4 flex justify-center items-center absolute  sm:left-[318px]  md:left-[366px] -top-3"
              onClick={toggleCustomModal}
            >
              <Image src="/menu.svg" alt="Wakanda" width={65} height={35} />
            </div>
            <div className="text-[#163828] font-body font-semibold text-2xl my-4">
              Customisation Request
            </div>

            <form className="flex flex-col">
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="name"
                  className=" font-body font-semibold  text-xs text-[#648B7A]"
                >
                  Full Name
                </label>
                <input
                  className="bg-[#EFF7F0]  border-[#87AC9B] shadow-inner rounded-lg p-2 flex-1 border-[0.5px]"
                  id="email"
                  type="email"
                  aria-label="email address"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="name"
                  className=" font-body font-semibold  text-xs text-[#648B7A]"
                >
                  Email
                </label>
                <input
                  className="bg-[#EFF7F0]  border-[#87AC9B] shadow-inner rounded-lg p-2 flex-1 border-[0.5px]"
                  id="email"
                  type="email"
                  aria-label="email address"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="name"
                  className=" font-body font-semibold  text-xs text-[#648B7A]"
                >
                  Phone No
                </label>
                <input
                  className="bg-[#EFF7F0]  border-[#87AC9B] shadow-inner rounded-lg p-2 flex-1 border-[0.5px]"
                  id="email"
                  type="email"
                  aria-label="email address"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="name"
                  className=" font-body font-semibold  text-xs text-[#648B7A]"
                >
                  Business Name
                </label>
                <input
                  className="bg-[#EFF7F0]  border-[#87AC9B] shadow-inner rounded-lg p-2 flex-1 border-[0.5px]"
                  id="email"
                  type="email"
                  aria-label="email address"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="name"
                  className=" font-body font-semibold  text-xs text-[#648B7A]"
                >
                  What is your Request? *
                </label>
                <input
                  className="bg-[#EFF7F0]  border-[#87AC9B] shadow-inner rounded-lg p-2 flex-1 border-[0.5px]"
                  id="email"
                  type="email"
                  aria-label="email address"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                className=" w-28 rounded-lg bg-[#00A85A] shadow-[#18A75D4D] shadow-xl text-[#EFF7F0] font-body text-sm mb-4 font-semibold px-6 py-[14px]"
                onClick={toggleCustomModal}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
