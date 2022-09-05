import React, { useState } from "react";
import styles from "./Forms.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion, AnimatePresence } from "framer-motion";

export const SignUpForm = ({Edit,Signup}) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    FullName: "",
    Email: "",
    BusinessName: "",
    Phone: "",
  };

  const onSubmit = (values) => {
    console.log("Form Data ", values);
  };

  const validationSchema = Yup.object({
    FullName: Yup.string().required("Required"),
    Email: Yup.string().email("Invalid email format").required("Required"),
    BusinessName: Yup.string().required("Required"),
    Phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
  });

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className={`${styles["card-body"]} overflow-hidden w-[350px] md:w-[430px] flex flex-col rounded-2xl py-4 px-10 bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-102 shadow-3xl shadow-[#18A75D26] duration-300 `}
          >
            <h2 className="font-semibold">Sign Up here</h2>
            <p className="font-normal">and get started Instantly</p>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <div className={`w-full my-1 justify-start text-left`}>
                  <label
                    htmlFor="FullName"
                    className="text-left pb-2 pt-3  text-sm text-[#87AC9B] font-medium"
                  >
                    Full Name
                    <span className="text-red-500 font-bold">{"*"}</span>
                  </label>
                  <Field
                    type="text"
                    className={`${styles["text-input"]} w-full rounded-lg p-2`}
                    name="FullName"
                  />
                  <div className="text-red-600">
                    <ErrorMessage name="FullName" />
                  </div>
                  <label
                    htmlFor="Email"
                    className="text-left text-[#87AC9B] pb-2 pt-3  text-sm font-medium"
                  >
                    Email
                    <span className="text-red-500 font-bold">{"*"}</span>
                  </label>
                  <Field
                    type="text"
                    className={`${styles["text-input"]} w-full rounded-lg p-2`}
                    name="Email"
                  />
                  <div className="text-red-600">
                    <ErrorMessage name="Email" />
                  </div>
                  <label
                    htmlFor="Phone"
                    className="text-left text-[#87AC9B] pb-2 pt-3 text-sm font-medium"
                  >
                    Phone NO.
                    <span className="text-red-500 font-bold">{"*"}</span>
                  </label>
                  <Field
                    type="text"
                    className={`${styles["text-input"]} w-full rounded-lg p-2`}
                    name="Phone"
                  />
                  <div className="text-red-600">
                    <ErrorMessage name="Phone" />
                  </div>
                  <label
                    htmlFor="BusinessName"
                    className="text-left text-[#87AC9B] pb-2 pt-3  text-sm font-medium"
                  >
                    Business Name
                    <span className="text-red-500 font-bold">{"*"}</span>
                  </label>
                  <Field
                    type="text"
                    className={`${styles["text-input"]} w-full rounded-lg p-2`}
                    name="BusinessName"
                  />
                  <div className="text-red-600">
                    <ErrorMessage name="BusinessName" />
                  </div>
                  <button
                    className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-102 hover:bg-green-700 bg-green-700 duration-300 ${styles["signin-button"]} w-full text-white font-semibold mt-5 mb-3 py-3 px-4 border rounded-lg drop-shadow-lg`}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
