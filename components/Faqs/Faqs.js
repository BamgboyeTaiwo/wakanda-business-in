import React from "react";
import Image from "next/image";
import styles from "./Faqs.module.css";
import { useState } from "react";

export default function Faqs() {
  const [clicked, setclicked] = useState(0);
  const [toggle, settoggle] = useState(false);
  const [toggle2, settoggle2] = useState(false);
  const [toggle3, settoggle3] = useState(false);
  const [toggle5, settoggle5] = useState(false);
  const [toggle6, settoggle6] = useState(false);
  const [toggle7, settoggle7] = useState(false);
  const [toggle8, settoggle8] = useState(false);
  const [toggle9, settoggle9] = useState(false);
  const [toggle10, settoggle10] = useState(false);

  return (
    <>
      <div className={` ${styles.img}`}>
        <div
          className={`relative flex container max-w-[90%] mx-auto font-body rounded-md ${styles.input_div}`}
        >
          <img src="/search.svg" className=" lg:pl-5" />
          <input
            className={`w-[80%] py-3 px-3  ${styles.input}`}
            type="text"
            placeholder={`Search for enquiries…`}
          />
        </div>
      </div>

      <div
        className={`container font-body sm:mt-11  ${styles.container} mb-15`}
      >
        <p></p>

        <div className="max-w-[90%] sm:max-w-[100%] lg:mt-[3.75rem] mx-auto text-[#163828]  w-100 ">
          <>
            <div
              className={`lg:py-8 ${
                clicked === 0 ? "flex" : "hidden"
              } flex justify-between sm:px-5 md:px-5 lg:px-8 sm:py-7 mb-3 my-auto ${
                styles.cont_div
              }`}
            >
              <span className="sm:font-semibold md:font-bold sm:text-xs md:text-lg ">
                {" "}
                What is a CRM?
              </span>

              <Image
                src="/polygon -12.svg"
                alt="seach logo"
                width={30}
                height={20}
                onClick={() => {
                  if (clicked === 0) {
                    setclicked(1);
                  } else {
                    setclicked(0);
                  }
                }}
              />
            </div>
            {/* Onclicked details */}
            <div
              className={`lg:py-8 justify-between sm:px-5 md:px-5 lg:px-11 mb-2 my-auto ${
                clicked === 1 ? "block" : "hidden"
              }
               ${styles.cont_div}`}
            >
              <>
                <div
                  className={`  flex sm:pt-3 justify-between font-body text-[#163828] mb-3 my-auto `}
                >
                  <div>
                    <span className="leading-[1.12px] sm:text-sm md:font-bold sm:font-semibold  ">
                      What is a CRM?
                    </span>
                  </div>

                  <Image
                    src="/polygon -20.svg"
                    alt="search logo"
                    width={30}
                    height={18}
                    onClick={() => {
                      if (clicked === 1) {
                        setclicked(0);
                      } else {
                        setclicked(1);
                      }
                    }}
                  />
                </div>
              </>
              <div className="sm:pb-3 ">
                <span className=" text-sm tracking-[0.77pxs]  text-[#163828]">
                  <div className="mb-2">
                    <p
                      className={`text-left text-[12px! important] ${styles.open_text}`}
                    >
                      CRM system is a software that manages the relationship
                      between an organization and its customers. The
                      abbreviation CRM stands for Customer Relationship
                      Management. The main goal of any CRM is to ensure sales
                      increase by optimizing business processes, improving the
                      quality of goods and services, and effectively
                      communicating with customers. Using Wakanda CRM, it
                      becomes much easier to communicate with customers, find
                      new customers, win their trust, provide qualified support,
                      and provide additional services throughout the
                      relationship.
                    </p>
                  </div>
                </span>
              </div>
            </div>
          </>

          <>
            <div
              className={`lg:py-8 justify-between sm:px-5 md:px-5 lg:px-8 sm:py-7 mb-3 my-auto
            ${toggle === false ? "flex" : "hidden"}
             ${styles.cont_div}`}
              id="Faqs_div2"
            >
              <span className=" sm:font-semibold md:font-bold  sm:text-xs md:text-lg">
                What are the benefits of{" "}
                <br className="sm:block md:hidden lg:hidden" /> Wakanda CRM
                System?
              </span>

              <Image
                onClick={(e) => {
                  settoggle(true);
                }}
                src="/polygon -12.svg"
                alt="seach logo"
                width={30}
                height={20}
              />
            </div>
            {/* Onclicked details Div 2 */}
            <div
              className={`lg:py-8 justify-between sm:px-5 md:px-5 lg:px-11   my-auto ${
                toggle === true ? "block" : "hidden"
              }
               ${styles.cont_div}`}
            >
              <>
                <div
                  className={`  flex sm:pt-3 justify-between font-body text-[#163828] sm:pt-2s mb-3 my-auto `}
                >
                  <div>
                    <span className="leading-[1.12px] sm:text-sm md:font-bold sm:font-semibold ">
                      {" "}
                      What are the benefits of Wakanda CRM System?
                    </span>
                  </div>

                  <Image
                    src="/polygon -20.svg"
                    alt="search logo"
                    width={30}
                    height={18}
                    onClick={() => {
                      if (toggle == true) {
                        settoggle(false);
                      } else {
                        settoggle(true);
                      }
                    }}
                  />
                </div>
              </>
              <span className=" text-sm tracking-[0.77pxs] text-[#163828]">
                <div className="mb-2">
                  <strong className="font-semibold text-sm">
                    Improved Customer Service:
                  </strong>
                  <p
                    className={`text-left text-[12px! important] ${styles.open_text}`}
                  >
                    It helps you enhance your interaction with customer’s
                    thereby boosting customer satisfaction and trust. Using our
                    CRM system, it is possible to make relationships with
                    customers the first priority for your company.
                  </p>
                </div>

                <div>
                  <strong className="font-semibold text-sm">
                    {" "}
                    Streamlined Workflow:
                  </strong>
                  <p
                    className={`text-left text-[12px! important] ${styles.open_text}`}
                  >
                    It helps you run your business more efficiently to enhance
                    productivity, efficiency and effectiveness.
                  </p>
                </div>

                <div>
                  <strong className="font-semibold text-sm">
                    Cost Reduction:
                  </strong>

                  <p
                    className={`text-left text-[12px! important] ${styles.open_text}`}
                  >
                    Automated and regulated business processes allow you to
                    reduce operational costs by decreasing the number of routine
                    operations, which your employees were initially to perform
                    manually.
                  </p>
                </div>

                <div>
                  <strong className="font-semibold text-sm">
                    Increased customer Loyalty:
                  </strong>
                  <p
                    className={`text-left text-[12px! important] ${styles.open_text}`}
                  >
                    Complete information on each client will enable marketing,
                    sales and service agents to deliver truly personalized
                    customer experience, which leads to increased customer
                    loyalty and more sales. Having loyal customers,
                  </p>
                </div>

                <div>
                  <strong className="font-semibold text-sm">
                    Increased number of customers:
                  </strong>
                  <p
                    className={`text-left text-[12px! important] ${styles.open_text}`}
                  >
                    you can be sure that they will recommend your company to
                    their friends or partners.
                  </p>
                </div>
              </span>
            </div>
          </>

          <>
            <div
              className={`lg:py-8 justify-between sm:px-5 sm:py-7  md:px-5 lg:px-8 mb-3 my-auto
                ${toggle2 === false ? "flex" : "hidden"}
                ${styles.cont_div}`}
              id="Faqs_div2"
            >
              <span className="sm:font-semibold md:font-bold sm:text-xs md:text-lg">
                {" "}
                How Does CRM Work?
              </span>

              <Image
                onClick={(e) => {
                  settoggle2(true);
                }}
                src="/polygon -12.svg"
                alt="seach logo"
                width={30}
                height={20}
              />
            </div>
            {/* Onclicked details Div 3 */}
            <div
              className={`lg:py-8 justify-between sm:px-5 md:px-5 lg:px-11  my-auto ${
                toggle2 === true ? "block" : "hidden"
              }
            ${styles.cont_div}`}
            >
              <>
                <div
                  className={` sm:pt-2 flex justify-between font-body text-[#163828] mb-3 my-auto `}
                >
                  <div>
                    <span className="leading-[1.12px] sm:text-sm md:font-bold sm:font-semibold ">
                      {" "}
                      How Does CRM Work?
                    </span>
                  </div>

                  <Image
                    src="/polygon -20.svg"
                    alt="search logo"
                    width={30}
                    height={18}
                    onClick={() => {
                      if (toggle2 == true) {
                        settoggle2(false);
                      } else {
                        settoggle2(true);
                      }
                    }}
                  />
                </div>
              </>
              <span className=" text-sm tracking-[0.77pxs] text-[#163828]">
                <div className="mb-2 sm:pb-2">
                  <p
                    className={`text-left text-[12px! important] tracking-[0.77px] leading-[20px] ${styles.open_text}`}
                  >
                    Waknada CRM solutions include functionalities that allow
                    users to track customer and company interactions through
                    various available channels. These channels include contact
                    forms, emails, phone calls, and more.
                    <br />
                    CRM software provides sales and marketing teams with a set
                    of tools to manage the entire sales and marketing funnel,
                    from lead qualification to opportunity management,
                    forecasting, and deal closure. It enables customer service
                    teams to manage customer requests and automate service
                    operations by following pre-defined processes for customer
                    care excellence.
                  </p>
                </div>
              </span>
            </div>
          </>

          <>
            <div
              className={`lg:py-8 justify-between sm:px-5 sm:py-7  md:px-5 lg:px-8 mb-3 my-auto
                ${toggle3 === false ? "flex" : "hidden"}
                ${styles.cont_div}`}
              id="Faqs_div2"
            >
              <span className="sm:font-semibold md:font-bold sm:text-xs md:text-lg">
                {" "}
                How can Wakanda CRM improve my business process?
              </span>

              <Image
                onClick={(e) => {
                  settoggle3(true);
                }}
                src="/polygon -12.svg"
                alt="seach logo"
                width={30}
                height={20}
              />
            </div>
            {/* Onclicked details Div 4 */}
            <div
              className={`lg:py-8 justify-between sm:px-5 md:px-5 lg:px-11  my-auto ${
                toggle3 === true ? "block" : "hidden"
              }
            ${styles.cont_div}`}
            >
              <>
                <div
                  className={` sm:pt-2 flex justify-between font-body text-[#163828] mb-3 my-auto `}
                >
                  <div>
                    <span className="leading-[1.12px] sm:text-sm md:font-bold sm:font-semibold ">
                      How can Wakanda CRM improve my business process?
                    </span>
                  </div>

                  <Image
                    src="/polygon -20.svg"
                    alt="search logo"
                    width={30}
                    height={18}
                    onClick={() => {
                      if (toggle3 == true) {
                        settoggle3(false);
                      } else {
                        settoggle3(true);
                      }
                    }}
                  />
                </div>
              </>
              <span className=" text-sm tracking-[0.77pxs] text-[#163828]">
                <div className="mb-2 pb-2">
                  <p
                    className={`text-left text-[12px! important] tracking-[0.77px] leading-[20px] ${styles.open_text}`}
                  >
                    CRM enhances your overall business efficiency and improves
                    the productivity of your marketing, sales, and customer
                    support teams.
                  </p>
                </div>
              </span>
            </div>
          </>

          <>
            <div
              className={`lg:py-8 justify-between sm:px-5 sm:py-7  md:px-5 lg:px-8 mb-3 my-auto
                ${toggle5 === false ? "flex" : "hidden"}
                ${styles.cont_div}`}
              id="Faqs_div2"
            >
              <span className="sm:font-semibold md:font-bold sm:text-xs md:text-lg">
                {" "}
                What are examples of Wakanda CRM processes in sales, <br />
                marketing and service?
              </span>

              <Image
                onClick={(e) => {
                  settoggle5(true);
                }}
                src="/polygon -12.svg"
                alt="seach logo"
                width={30}
                height={20}
              />
            </div>
            {/* Onclicked details Div 5 */}
            <div
              className={`lg:py-8 justify-between sm:px-5 md:px-5 lg:px-11  my-auto ${
                toggle5 === true ? "block" : "hidden"
              }
            ${styles.cont_div}`}
            >
              <>
                <div
                  className={` sm:pt-2 flex justify-between font-body text-[#163828] mb-3 my-auto `}
                >
                  <div>
                    <span className="leading-[1.12px] sm:text-sm md:font-bold sm:font-semibold ">
                      What are examples of Wakanda CRM processes in sales,{" "}
                      <br />
                      marketing and service?
                    </span>
                  </div>

                  <Image
                    src="/polygon -20.svg"
                    alt="search logo"
                    width={30}
                    height={18}
                    onClick={() => {
                      if (toggle5 == true) {
                        settoggle5(false);
                      } else {
                        settoggle5(true);
                      }
                    }}
                  />
                </div>
              </>
              <span className=" text-sm tracking-[0.77pxs] text-[#163828]">
                <div className="mb-2 pb-1">
                  <p
                    className={`text-left text-[12px! important] tracking-[0.77px] leading-[20px] ${styles.open_text}`}
                  >
                    Customer database management Social media integration
                    Leadmanagement Sales forecasting tools Opportunity
                    management Field force automation Document management Mobile
                    sales capabilities Complex data analyticsLead generation and
                    distribution Event management Collaboration tools Knowledge
                    management Integration capabilities 360°view of customer
                    database
                  </p>
                </div>
              </span>
            </div>
          </>

          <>
            <div
              className={`lg:py-8 justify-between sm:px-5 sm:py-7  md:px-5 lg:px-8 mb-3 my-auto
                ${toggle6 === false ? "flex" : "hidden"}
                ${styles.cont_div}`}
              id="Faqs_div2"
            >
              <span className="sm:font-semibold md:font-bold sm:text-xs md:text-lg">
                How can CRM help me keep my customers happy?
              </span>

              <Image
                onClick={(e) => {
                  settoggle6(true);
                }}
                src="/polygon -12.svg"
                alt="seach logo"
                width={30}
                height={20}
              />
            </div>
            {/* Onclicked details Div 6 */}
            <div
              className={`lg:py-8 justify-between sm:px-5 md:px-5 lg:px-11  my-auto ${
                toggle6 === true ? "block" : "hidden"
              }
            ${styles.cont_div}`}
            >
              <>
                <div
                  className={` sm:pt-2 flex justify-between font-body text-[#163828] mb-3 my-auto `}
                >
                  <div>
                    <span className="leading-[1.12px] sm:text-sm md:font-bold sm:font-semibold ">
                      What are examples of Wakanda CRM processes in sales,{" "}
                      <br />
                      marketing and service?
                    </span>
                  </div>

                  <Image
                    src="/polygon -20.svg"
                    alt="search logo"
                    width={30}
                    height={18}
                    onClick={() => {
                      if (toggle6 == true) {
                        settoggle6(false);
                      } else {
                        settoggle6(true);
                      }
                    }}
                  />
                </div>
              </>
              <span className=" text-sm tracking-[0.77pxs] text-[#163828]">
                <div className="mb-2 pb-1">
                  <p
                    className={`text-left text-[12px! important] tracking-[0.77px] leading-[20px] ${styles.open_text}`}
                  >
                    Customer database management Social media integration
                    Leadmanagement Sales forecasting tools Opportunity
                    management Field force automation Document management Mobile
                    sales capabilities Complex data analyticsLead generation and
                    distribution Event management Collaboration tools Knowledge
                    management Integration capabilities 360°view of customer
                    database
                  </p>
                </div>
              </span>
            </div>
          </>

          <>
            <div
              className={`lg:py-8 justify-between sm:px-5 sm:py-7  md:px-5 lg:px-8 mb-3 my-auto
                ${toggle7 === false ? "flex" : "hidden"}
                ${styles.cont_div}`}
              id="Faqs_div2"
            >
              <span className="sm:font-semibold md:font-bold sm:text-xs md:text-lg">
                Is Wakanda CRM worth it if I have a small customer base?
              </span>

              <Image
                onClick={(e) => {
                  settoggle7(true);
                }}
                src="/polygon -12.svg"
                alt="seach logo"
                width={30}
                height={20}
              />
            </div>
            {/* Onclicked details Div 7 */}
            <div
              className={`lg:py-8 justify-between sm:px-5 md:px-5 lg:px-11  my-auto ${
                toggle7 === true ? "block" : "hidden"
              }
            ${styles.cont_div}`}
            >
              <>
                <div
                  className={` sm:pt-2 flex justify-between font-body text-[#163828] mb-3 my-auto `}
                >
                  <div>
                    <span className="leading-[1.12px] sm:text-sm md:font-bold sm:font-semibold ">
                      Is Wakanda CRM worth it if I have a small customer base?
                    </span>
                  </div>

                  <Image
                    src="/polygon -20.svg"
                    alt="search logo"
                    width={30}
                    height={18}
                    onClick={() => {
                      if (toggle7 == true) {
                        settoggle7(false);
                      } else {
                        settoggle7(true);
                      }
                    }}
                  />
                </div>
              </>
              <span className=" text-sm tracking-[0.77pxs] text-[#163828]">
                <div className="mb-2 pb-1">
                  <p
                    className={`text-left text-[12px! important] tracking-[0.77px] leading-[20px] ${styles.open_text}`}
                  >
                    <strong>Yes.</strong> If you have customers, you can benefit
                    from CRM. Even if your customer base is small, no one can
                    keep every interaction memorized and organized. It’s a
                    powerful business tool that streamlines processes, gives
                    valuable business insights, and virtually connects employees
                    at your company so they can collaborate as a team, in real
                    time. That’s something businesses of any size can use.
                  </p>
                </div>
              </span>
            </div>
          </>

          <>
            <div
              className={`lg:py-8 justify-between sm:px-5 sm:py-7  md:px-5 lg:px-8 mb-3 my-auto
                ${toggle8 === false ? "flex" : "hidden"}
                ${styles.cont_div}`}
              id="Faqs_div2"
            >
              <span className="sm:font-semibold md:font-bold sm:text-xs md:text-lg">
                Does CRM help my teams work better together?
              </span>

              <Image
                onClick={(e) => {
                  settoggle8(true);
                }}
                src="/polygon -12.svg"
                alt="seach logo"
                width={30}
                height={20}
              />
            </div>
            {/* Onclicked details Div 8 */}
            <div
              className={`lg:py-8 justify-between sm:px-5 md:px-5 lg:px-11  my-auto ${
                toggle8 === true ? "block" : "hidden"
              }
            ${styles.cont_div}`}
            >
              <>
                <div
                  className={` sm:pt-2 flex justify-between font-body text-[#163828] mb-3 my-auto `}
                >
                  <div>
                    <span className="leading-[1.12px] sm:text-sm md:font-bold sm:font-semibold ">
                      Does CRM help my teams work better together?
                    </span>
                  </div>

                  <Image
                    src="/polygon -20.svg"
                    alt="search logo"
                    width={30}
                    height={18}
                    onClick={() => {
                      if (toggle8 == true) {
                        settoggle8(false);
                      } else {
                        settoggle8(true);
                      }
                    }}
                  />
                </div>
              </>
              <span className=" text-sm tracking-[0.77pxs] text-[#163828]">
                <div className="mb-2 pb-1">
                  <p
                    className={`text-left text-[12px! important] tracking-[0.77px] leading-[20px] ${styles.open_text}`}
                  >
                    Wakanda CRM solution makes information accessible
                    companywide. This means almost any customer-focused activity
                    can be better and more easily coordinated within and across
                    departments, from sales to customer service. Every team
                    member is always working with up-to-the-minute information
                    on customers and your company’s interactions with them.
                  </p>
                </div>
              </span>
            </div>
          </>

          <>
            <div
              className={`lg:py-8 justify-between sm:px-5 sm:py-7  md:px-5 lg:px-8 mb-3 my-auto
                ${toggle9 === false ? "flex" : "hidden"}
                ${styles.cont_div}`}
              id="Faqs_div2"
            >
              <span className="sm:font-semibold md:font-bold sm:text-xs md:text-lg">
                Is Wakanda CRM customizable for my business?
              </span>

              <Image
                onClick={(e) => {
                  settoggle9(true);
                }}
                src="/polygon -12.svg"
                alt="seach logo"
                width={30}
                height={20}
              />
            </div>
            {/* Onclicked details Div 9 */}
            <div
              className={`lg:py-8 justify-between sm:px-5 md:px-5 lg:px-11  my-auto ${
                toggle9 === true ? "block" : "hidden"
              }
            ${styles.cont_div}`}
            >
              <>
                <div
                  className={` sm:pt-2 flex justify-between font-body text-[#163828] mb-3 my-auto `}
                >
                  <div>
                    <span className="leading-[1.12px] sm:text-sm md:font-bold sm:font-semibold ">
                      Is Wakanda CRM customizable for my business?
                    </span>
                  </div>

                  <Image
                    src="/polygon -20.svg"
                    alt="search logo"
                    width={30}
                    height={18}
                    onClick={() => {
                      if (toggle9 == true) {
                        settoggle9(false);
                      } else {
                        settoggle9(true);
                      }
                    }}
                  />
                </div>
              </>
              <span className=" text-sm tracking-[0.77pxs] text-[#163828]">
                <div className="mb-2 pb-1">
                  <p
                    className={`text-left text-[12px! important] tracking-[0.77px] leading-[20px] ${styles.open_text}`}
                  >
                    <strong>Yes</strong> , because we understand that every
                    business runs differently, with different processes and
                    ideas of success
                  </p>
                </div>
              </span>
            </div>
          </>

          <>
            <div
              className={`lg:py-8 justify-between sm:px-5 sm:py-7  md:px-5 lg:px-8 sm:mb-3 lg:mb-7 my-auto
                ${toggle10 === false ? "flex" : "hidden"}
                ${styles.cont_div}`}
              id="Faqs_div2"
            >
              <span className="sm:font-semibold md:font-bold sm:text-xs md:text-lg">
                Signs that you need CRM
              </span>

              <Image
                onClick={(e) => {
                  settoggle10(true);
                }}
                src="/polygon -12.svg"
                alt="seach logo"
                width={30}
                height={20}
              />
            </div>
            {/* Onclicked details Div 10 */}
            <div
              className={`lg:py-8 justify-between sm:px-5 md:px-5 lg:px-11  my-auto ${
                toggle10 === true ? "block" : "hidden"
              }
            ${styles.cont_div}`}
            >
              <>
                <div
                  className={` sm:pt-2 flex justify-between font-body text-[#163828] mb-3 my-auto `}
                >
                  <div>
                    <span className="leading-[1.12px] sm:text-sm md:font-bold sm:font-semibold ">
                      Signs that you need CRM
                    </span>
                  </div>

                  <Image
                    src="/polygon -20.svg"
                    alt="search logo"
                    width={30}
                    height={18}
                    onClick={() => {
                      if (toggle10 == true) {
                        settoggle10(false);
                      } else {
                        settoggle10(true);
                      }
                    }}
                  />
                </div>
              </>
              <span className=" text-sm tracking-[0.77pxs] text-[#163828]">
                <div className="mb-2 pb-1">
                  <p
                    className={`text-left text-[12px! important] tracking-[0.77px] leading-[20px] ${styles.open_text}`}
                  >
                    1. You have teams that work closely together, even when not
                    actually together  <br/>
                    2. Your sales teams are often on the road  <br/>
                    3. You are unable to quickly find customer data to make
                    decisions fast <br/>
                    4. You feel deals are falling through the
                    cracks because you are managing things in spreadsheets and
                    notebooks  <br/>
                    5. You have a patchwork of apps that you call CRM
                    but they are not really connected on top of a single
                    database or “system of record”  <br/>
                    6. Your business is growing
                    more quickly than you feel ready for <br/>
                    7. You know that your
                    business customer service experience is lacking or you are
                    losing more customers because of service issues. <br/>
                    8. You or
                    your IT department is buried with maintenance requests <br/>
                  </p>
                </div>
              </span>
            </div>
          </>
        </div>
      </div>
    </>
  );
}
