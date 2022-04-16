import Head from "next/head";
import NavBar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
            
      </Head>

      <div>
        <NavBar />
      </div>

      <div>{children}</div>
    </div>
  );
}
