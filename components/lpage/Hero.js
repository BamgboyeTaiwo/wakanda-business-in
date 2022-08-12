import Image from "next/image";
import React from "react";

export default function Content() {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-4 font-sans px-4 py-12">
        <div className="flex">
          <div className="self-center">
            <h1 className="font-body leading-snug tracking-wide font-semibold text-[#163828] ">
              Organise Your Sales.
              <br /> Build Great Relationships. <br />
              Save Time.
            </h1>
            <button className="rounded-md px-8 py-3 font-body tracking-wider text-white font-semibold mt-8 bg-[#02A85A] shadow-[0_25px_60px_-18px_rgba(2,168,90,0.9)]">
              GET STARTED NOW &gt;
            </button>
          </div>
        </div>
        <div className="flex ">
          <div className="self-start">
            <Image
              src="/hero_image.png"
              alt="Header Image"
              placeholder="blur"
              blurDataURL="/hero_image.png"
              quality={75}
              width={472}
              height={560}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-body text-center pb-12 leading-snug tracking-wide font-semibold text-[#163828]">
          How can Wakanda CRM help You Grow your Business?
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 text-center">
        <div>
          <Image
            src="/global-connection.svg"
            alt="Wakanda business Logo"
            width={544}
            height={112}
            layout="responsive"
          />
          <p className="text-sm p-2 font-body font-semibold text-[#163828]">
            Build deeper connections with <br /> your customers with ease.
          </p>
        </div>
        <div>
          <Image
            src="/sales.svg"
            alt="Wakanda business Logo"
            width={544}
            height={112}
          />
          <p className="text-sm p-2 font-body font-semibold text-[#163828]">
            Manage your sales process.
          </p>
        </div>
        <div>
          <Image
            src="/email-marketing.svg"
            alt="email-marketing"
            width={544}
            height={112}
          />
          <p className="text-sm p-2 font-body font-semibold text-[#163828]">
            Automate your everyday <br /> task and save time.
          </p>
        </div>
      </div>
    </div>
  );
}
