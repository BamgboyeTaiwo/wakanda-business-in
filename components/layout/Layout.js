import Head from "next/head";
import NavBar from "./Navbar";
import Footer from "../../components/lpage/footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head></Head>
      <div>
        <NavBar />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
