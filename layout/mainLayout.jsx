import Navbar from "../components/navigation/navbar";
import Head from "next/head";

export default function MainLayout({ children }) {
  return (
    <div>
      <Head>
        {/* <script
          async
          defer
          data-website-id="0623848d-93db-4e7d-ae28-b82ed7475b95"
          src="https://app.usehardal.com/hardal.js"
        ></script> */}
      </Head>
      <Navbar />
      {children}
    </div>
  );
}
