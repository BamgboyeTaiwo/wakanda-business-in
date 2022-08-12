import Head from "next/head";
import NavBar from "./Navbar";
import Footer from "../../components/lpage/footer";

export default function Layout({ children }) {
  return (
    // sm:justify-items-center content-center grid
    <div className="w-full items-center sm:justify-center ">
      <Head></Head>
      <div className="w-full items-center ">
        <NavBar />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
