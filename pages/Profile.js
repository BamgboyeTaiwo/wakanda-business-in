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
     

      <div>User profile  page</div>
      <div className=" lg:p-0 md:p-0 sm:p-10 sm:m-20 md:m-0 lg:m-0" />
      <Footer />
    </div>
  );
}
