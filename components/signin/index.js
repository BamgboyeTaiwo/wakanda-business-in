import { useState } from "react";
import "firebase/firestore";
import Image from "next/image";
import HeadComp from "../../components/Head";
import Signincard from "../../components/form/Signincard";
import { Navbar2 } from "../../components/Navbar2";
import styles from "../../styles/Signin.module.css";
//console.log('fbauth is ', FBauth);
//console.log('FBapp is ', FBapp);
export default function SigninIndex() {
  return (
    <div>
      {/* <HeadComp /> */}
      {/* <Navbar2 /> */}
      <div className="min-h-screen flex  justify-center">
        <div className="grid xs:grid-cols-1 lg:md:grid-cols-5 ">
          <div className="col-span-1 lg:md:col-span-2 lg:w-8/12 md:w-9/12 sm:w-6/12 mx-auto mt-24  ">
            <Signincard />
          </div>
          <div className="col-span-1 lg:md:col-span-3 w-full px-8 mb-16 lg:px-0">
            <div className="w-full flex sm:xs:items-center lg:md:justify-start lg:md:items-start flex-col">
              <div className="w-10/12">
                <Image
                  alt="logo"
                  width={684}
                  height={588}
                  className="object-contain rounded-lg w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 "
                  src={require("../../assets/splash-banner.png")}
                />
              </div>
              <div className="relative w-10/12  xs:ml-8 ml-12">
                <p
                  className={`text-5xl font-bold text-left  ${styles["banner-text1"]}`}
                >
                  Manage Your <br />
                  Business{" "}
                  <span
                    className={`absolute left-52 italic font-normal z-20 ${styles["banner-text2"]}`}
                  >
                    Seamlessly
                  </span>
                </p>
                <div
                  className={`absolute bottom-3 left-52 h-3 w-60 ${styles["line-through"]}`}
                ></div>
              </div>
              <div className="w-10/12 mt-4  xs:ml-8 ml-12">
                <p
                  className={`text-sm font-base text-left  ${styles["banner-text3"]}`}
                >
                  <span className="font-bold">Wakanda CRM</span> gives you the
                  Best tools to achieve optimum <br />
                  efficiency in your business.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <Signincard />
	<Image
	alt="logo"
	width={800}
	height={800}
	className="object-cover rounded-lg w-full"
	src={require('../../assets/splash-banner.png')}
/> */
}
