import { useState } from "react";
import Router, { useRouter } from "next/router";
// import "firebase/firestore";
import Image from "next/image";
// import GHflag from "../../assets/flags/ghana.png";

// import { signInWithCustomToken } from "firebase/auth";
// import { FBauth } from "../../configs/firebase-config";
import styles from "./Signin.module.css";
import fstyles from "./Forms.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSpinner,
//   faTriangleExclamation,
// } from "@fortawesome/free-solid-svg-icons";
let cloudFunctionURL = "https://us-central1-afbase-7ee60.cloudfunctions.net/";
// const FLAGS = {
//   "+234": NGflag,
//   "+233": GHflag,
// };
function Signincard() {
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [countryCode, setCountryCode] = useState("+233");
  const [errormessage, setErrorMessage] = useState("");
  const focusedClass = `transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-102  duration-300`;
  // const signin = async () => {
  //   if (!countryCode) return;
  //   if (!phone) return;
  //   setLoading(true);
  //   setErrorMessage("");
  //   setMessage("PLEASE CHECK THE WAKANDA APP ON YOUR PHONE TO AUTHORIZE...");
  //   try {
  //     const r = await fetch(cloudFunctionURL + "crmSignin", {
  //       method: "POST",
  //       //mode: 'no-cors',
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         phoneNumber: countryCode + phone,
  //       }),
  //     });
  //     let r2 = await r.json();
  //     console.log("signin response is ", r2);
  //     if (r2.msg === "SUCCESS") {
  //       signInWithCustomToken(FBauth, r2.token)
  //         .then(async (userCredential) => {
  //           console.log("userCredential created is ", userCredential);
  //           const idToken = await userCredential.user.getIdToken();
  //           console.log("idToken received is ", idToken);
  //           if (idToken) {
  //             await localStorage.setItem("idToken", idToken);
  //             Router.push("/customers");
  //           }
  //         })
  //         .catch((err) => {
  //           console.log("firebase error signing in ", err);
  //         });
  //       console.log("communities i manage are ", r2.communities);
  //       setLoading(false);
  //     } else if (r2.msg === "DECLINED") {
  //       setLoading(false);
  //       setErrorMessage("Signin declined.");
  //     } else if (r2.msg === "NOT_ON_WAKANDA") {
  //       setLoading(false);
  //       setErrorMessage("Not a registered phone number.");
  //     } else if (r2.msg === "NOT_A_MANAGER") {
  //       setLoading(false);
  //       setErrorMessage("Not a CRM manager");
  //     } else if (r2.msg === "TIMEOUT") {
  //       setLoading(false);
  //       setErrorMessage("Signin timed out");
  //     } else {
  //       setLoading(false);
  //       setErrorMessage("Signin not successful. pls try again later");
  //     }
  //     //Router.push('/verify-otp');
  //   } catch (err) {
  //     console.log("somehting went wrong loggin in...", err);
  //   }
  // };
  return (
    <div
      className={`${styles["card-body"]} overflow-hidden w-full flex flex-col rounded-2xl shadow-lg bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-102  duration-300 `}
    >
      <div className={`ml-6  w-full mt-8`}>
        <div>
          <p
            className={
              focusedClass +
              `transition ease-in-out font-normal text-lg ${fstyles["signin-title"]} `
            }
          >
            Log In
          </p>
        </div>
      </div>
      <div className="py-2 px-2 mt-8 ml-1">
        <label className="text-left pl-2 ml-1  font-thin">Phone Number</label>
        <div
          className={`relative flex justify-between items-center pl-2 ${styles["signin-input"]}`}
        >
          <input
            placeholder="phone number"
            className={`border-b-2  p-2 pb-1 mb-2 w-11/12 pl-20 text-sm focus:outline-none  `}
            onChange={(e) => {
              console.log("e.target.value ", e.target.value);
              setPhone(e.target.value);
            }}
          />
          <span className="flex items-center justify-center font-thin absolute left-0 bottom-4 pl-2 text-sm">
            {/* <Image
              alt="logo"
              width={20}
              height={15}
              className={` w-full object-cover grow-0 mt-1`}
              src={FLAGS[countryCode]}
            />
            <select
              name="code"
              id="code"
              className="text-sm focus:outline-none  "
              value={countryCode}
              onChange={(e) => {
                console.log("onchange ", e.target.value);
                setCountryCode(e.target.value);
              }}
            >
              <option value={"+234"} className="text-sm">
                +234
              </option>
              <option value={"+233"} className="text-sm">
                +233
              </option>
            </select> */}
          </span>
        </div>
      </div>
      <div className="py-2 mt-4 w-11/12 ml-2">
        <button
          onClick={() => {
            if (loading) return;
            signin();
          }}
          className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-102 hover:bg-green-700 duration-300 ${styles["signin-button"]} w-full ml-2 font-semibold  py-3 px-4 border rounded-lg drop-shadow-lg`}
        >
          {/* {loading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className={`${styles["spinner"]}`}
              style={{
                fontSize: 30,
                color: "#fff",
              }}
            />
          ) : (
            <span className="text-left">Log in</span>
          )} */}
        </button>
        {/* {!!errormessage && (
          <div className="text-red-600 font-normal text-sm ml-3 justify-start w-full px-2 flex flex-row">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              style={{
                fontSize: 24,
              }}
              className={`text-red-500 ${styles["alert-shadow"]} motion-safe:animate-bounce`}
            />
            <div className="ml-2 mt-1 line-height-2 text-xs">
              {errormessage}
            </div>
          </div>
        )} */}
      </div>
      {loading && (
        <div
          className={`${styles["loader"]} p-4 flex-col flex-wrap pr-8 pt-0 h-full absolute bottom-0 bg-white flex justify-center items-center opacity-90`}
        >
          {/* <FontAwesomeIcon
            icon={faSpinner}
            className={`${styles["spinner"]}`}
            style={{
              fontSize: 50,
              color: "#00a85a",
              alignSelf: "center",
            }}
          /> */}
          <div className="mt-12 font-light text-sm text-[#00a85a] bg-white ">
            {message}
          </div>
        </div>
      )}
    </div>
  );
}

export default Signincard;
