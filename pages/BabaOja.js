import React from "react";
import dynamic from "next/dynamic";
import BabaojaComponent from "../components/lpage/BabaojaComponent";
import Image from "next/image";
import Footer from "../components/lpage/footer";
import NavBar from "../components/layout/Navbar";
import { Layout } from "../components/layout";
import styles from "../components/lpage/Babaoja.module.css";
import Ebook from "../components/lpage/ebook";
import { Button } from "react-bootstrap";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1509477887414-681937645173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1454783904586-9fa42a1e8442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1530539595977-0aa9890547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export default function BabaOja() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div>
      <NavBar />
     
      <div className={`sm:place-content-center     w-full  px-0   sm:mb-[300px]  md:mb-[500px]  lg:mb-[500px]`}>
        <div className="flex md:flex-row   sm:flex-col  md:mb-0 sm:p-4  w-full">
          <div className="md:flex md:flex-col  md: ml-10md: pl-10  mt-7">
            <div className=" my-10 ">
              <h1 className="">
                <span className=" font-body   sm:text-l md:text-4xl font-normal">
                  Free!
                </span>
                <br />
                <span className=" font-body  font-semibold sm:text-3xl md:text-5xl  mb-2">
                  Business Consultation
                </span>
                <br />
              </h1>
            </div>
            <Image
              src="/babaOjaText2.png"
              alt="BabaOja text"
              width={340}
              height={150}
            />
          </div>

          <div className=" w-[100%] md:absolute md:left-[500px] lg:left-[500px] -top-[300px] ">
            <Image
              className={``}
              src="/BabaOjaLandingImage.png"
              alt="BabaOja Image"
              width={65}
              height={60}
              layout="responsive"
              objectFit="cover"
            />
          </div>

         
        </div>
      </div>

      <div className=" bg-cover bg-center bg-image-background h-[600px] w-full mb-52">
        <div className="flex lg:flex-row md:flex-row sm: flex-col   justify-around relative bottom-[300px] sm:items-center">
          <div className=" sm:mb-10 sm:w-[320px]  lg:w-[395px]  md:w-[395px]  p-4 bg-[#FFFFFF] rounded-xl shadow-[#18A75D26] shadow-lg z-50">
            <div className="text-[#163828] font-body font-semibold  text-2xl mt-2">
              Sign Up here
            </div>
            <div className="text-[#163828] font-body font-normal text-xs mb-4">
              and get started Instantly
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

              <button
                className=" w-28 rounded-lg bg-[#00A85A] shadow-[#18A75D4D] shadow-xl text-[#EFF7F0] font-body text-sm mb-4 font-semibold px-6 py-[14px]"
                // onClick={toggleModal}
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div>
            <div className=" font-body font-normal text-[13px] tracking-wider sm:mb-11 md:mb-28">
              BabaOja is a an Expert Business and marketing
              <br /> consultant with extensive knowledge in growing <br />a
              business
            </div>
            <div>
              <div className=" font-body font-semibold  text-[13px] tracking-wider ">
                What You will Learn:
              </div>
              <div className=" font-body font-normal  text-[13px] tracking-wider ">
                - How to scale your Business.
              </div>
              <div className=" font-body font-normal  text-[13px] tracking-wider ">
                - Best marketing strategies.
              </div>
              <div className=" font-body font-normal text-[13px] tracking-wider ">
                -
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:bottom-20 sm:bottom-72">
          <div className="flex sm:flex-col  md:flex-row  lg:flex-row justify-between items-cente mx-5 my-5 ">
            <div className=" font-body font-semibold text-[#163828] text-2xl sm:py-6 ">
              THE BABAOJA SHOW
            </div>
            <button className="rounded-md px-8 py-3 font-body tracking-wider text-sm text-white font-semibold  bg-[#02A85A] shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)]">
              VISIT CHANNEL &gt;
            </button>
          </div>
          <div className="flex flex-row justify-between items-center">
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideLeft}
              size={40}
            />
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideRight}
              size={40}
            />
          </div>

          <div
            id="slider"
            className=" mb-5 flex flex-row w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {data.map((item, i) => (
            <div className="flex flex-col items-center"  key = {i}>
              <div
    className=" min-w-[280px]  h-[180px] p-4 bg-[#648B7A] rounded-xl shadow-lg z-50 mx-9"
    key={i}
  >
    Card
  </div>
  <div className=" font-body font-semibold text-xs">Video Title here</div>

             </div>
            ))}
          </div>
        </div>
      </div>

      <Ebook />

      <Footer />
    </div>
  );
}
