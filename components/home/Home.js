/* ./pages/index.js               */
import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.css";
import React, { useState } from "react";
import { Layout } from "../layout";
import Hero from "../lpage/Hero";
import About from "../About/About";
import Offers from "../lpage/Offers";
import CustomerEmpowerment from "../lpage/customerEmpower";
import StaffMang from "../lpage/staffManagement";
import Footer from "../lpage/footer";
import Ebook from "../lpage/ebook";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.container}>
          <Head>
            <title>Wakanda Business</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Hero />
            {/* <About/> */}
            <Offers />
            <CustomerEmpowerment />
            <StaffMang />
            <Ebook/>

          </main>
          <Footer />

          {/* <footer className={styles.footer}>
            <a>Footer here... </a>
          </footer> */}
        </div>
      </Layout>
    </div>
  );
}
