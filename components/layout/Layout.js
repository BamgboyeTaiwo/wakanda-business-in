import Head from "next/head";
import NavBar from "./Navbar";
import Footer from "../../components/lpage/footer";

export default function Layout({ children }) {
  return (
    <>
      <Head></Head>

      <NavBar />

      <div>{children}</div>
      <Footer />
    </>
  );
}
