/* ./pages/index.js               */
import Head from "next/head";
import React, { useState } from "react";
import { Layout } from "../layout";
import { Form } from "./Form";
import { ExchangeInfo } from "./Exchange";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="grid grid-cols-1   md:grid-cols-2  space-y-32  md:space-y-2 gap-8 place-items-center ">
          <div className=" md:justify-self-start md:ml-16">
            <Form />
          </div>
          <div className=" justify-self-center mx-8 md:mx-0 md:justify-self-start">
            <ExchangeInfo />
          </div>
        </div>
      </Layout>
    </div>
  );
}
