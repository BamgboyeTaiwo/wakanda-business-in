import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import USflag from "../../assets/united-states.png";
import NGflag from "../../assets/nigeria.png";
import styles from "./Forms.module.css";

import { Formik } from "formik";

import { motion, AnimatePresence } from "framer-motion";

const FLAGS = {
  NG: NGflag,
  US: USflag,
};

export const Form = () => {
  // create state variables for each input
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState("");

  // const handleAuthentication = async (e) => {
  //   e.preventDefault();
  //   if (!countryCode) return;
  //   if (!phone) return;
  //   if (loading === true) return;
  //   setLoading(true);
  //   console.log(process.env);
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/user`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         phoneNumber: countryCode + phone,
  //         countryCode: countryCode,
  //         mode: "phone",
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   const message = data.message.replaceAll('"', "");
  //   setErrorText(message);

  //   if (message == "OTP  sent") {
  //     setLoading(false);
  //     //session storage
  //     sessionStorage.setItem("phoneNumber", phone);
  //     router.push("/verification");
  //   } else if (message !== null) {
  //     setLoading(false);
  //   } else {
  //     return;
  //   }
  // };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className={`${styles["card-body"]} overflow-hidden w-[436px] flex flex-col rounded-2xl py-8 px-10 bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-102 shadow-3xl shadow-[#18A75D26] duration-300 `}
          >
            <h2 className="font-semibold">Sign Up here</h2>
            <p className="font-normal">and get started Instantly</p>
            <Formik
              initialValues={{
                FullName: "",
                email: "",
                businessName: "",
                phone: "",
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <div className={`w-full my-3 justify-start text-left`}>
                    <label className="text-left pb-2 pt-3  text-sm text-[#87AC9B] font-medium">
                      Full Name
                      <span className="text-red-500 font-bold">{"*"}</span>
                    </label>
                    <input
                      type="text"
                      className={`${styles["text-input"]} w-full rounded-lg p-2`}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.FullName}
                      name="FullName"
                    />
                    <label className="text-left text-[#87AC9B] pb-2 pt-3  text-sm font-medium">
                      Email
                      <span className="text-red-500 font-bold">{"*"}</span>
                    </label>
                    <input
                      type="text"
                      className={`${styles["text-input"]} w-full rounded-lg p-2`}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.email}
                      name="email"
                    />
                    <label className="text-left text-[#87AC9B] pb-2 pt-3 text-sm font-medium">
                      Phone NO.
                      <span className="text-red-500 font-bold">{"*"}</span>
                    </label>
                    <input
                      type="text"
                      className={`${styles["text-input"]} w-full rounded-lg p-2`}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.phone}
                      name="phone"
                    />
                    <label className="text-left text-[#87AC9B] pb-2 pt-3  text-sm font-medium">
                      Business Name
                      <span className="text-red-500 font-bold">{"*"}</span>
                    </label>
                    <input
                      type="text"
                      className={`${styles["text-input"]} w-full rounded-lg p-2`}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.businessName}
                      name="businessName"
                    />
                    {props.errors.name && (
                      <div id="feedback">{props.errors.name}</div>
                    )}
                    <button
                      className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-102 hover:bg-green-700 bg-green-700 duration-300 ${styles["signin-button"]} w-full text-white font-semibold mt-5 mb-3 py-4 px-4 border rounded-lg drop-shadow-lg`}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
