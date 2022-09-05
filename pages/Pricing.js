import React, { useState } from "react";
import styles from "./Pricing.module.css";
import Price from "../components/Utility/Price";
import Image from "next/image";
import Footer from "../components/lpage/footer";
import NavBar from "../components/layout/Navbar";
import { Layout } from "../components/layout";
import Modal from "../components/Utility/Modal";
import CustomModal from "../components/Utility/CustomModal";

export default function Pricing() {
  const [showModal, setShowModal] = useState(false);
  const [showCustomModal, setCustomShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleCustomModal = () => {
    setCustomShowModal(!showCustomModal);
  };
  return (
    <div>
      <NavBar />
      <div className={` ${styles.img}`} />

      <div className=" flex justify-center items-center relative md:bottom-40  md:mb-0 sm:mb-40 ">
        <div className="  rounded-xl shadow-2xl shadow-[#18A75D26;]pricing-plans flex mt-6  mx-0 overflow-x-auto  ">
          <Price />
        </div>
      </div>
      <div className=" sm:w-full  sm:flex sm:justify-center ">
        <div
          className={`  bg-[#00A85A]  shadow-[#00A85A] shadow-2xl  sm:w-[90%]  lg:w-[80%] md:w-[90%] md:mx-auto  py-10  px-5  rounded-xl mb-52  flex md:flex-row lg:flex-row sm:flex-col lg:justify-around md:justify-around sm:justify-center `}
        >
          <div className="  text-[#FFFFFF]  font-body  font-semibold sm:text-4xl md:text-2xl ">
            Advanced customization request?
          </div>
          <div className=" sm:my-2  sm:py-2" />
          <button
            className="rounded-lg shadow-[#AACE504D] shadow-xl  bg-[#FFFFFF] text-[#648B7A] font-body   font-semibold w-32 py-2 sm:text-lg  md:text-sm  "
            onClick={toggleCustomModal}
          >
            CONTACT US
          </button>
        </div>
      </div>
      {showCustomModal && (
        <div className=" z-20">
          <CustomModal toggleCustomModal={toggleCustomModal} />
        </div>
      )}
      {showModal && (
        <div className=" z-20">
          <Modal toggleModal={toggleModal} />
        </div>
      )}

      <div className=" lg:p-0 md:p-0 sm:p-10 sm:m-20 md:m-0 lg:m-0" />
      <Footer />
    </div>
  );
}
