import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.variable}>
      {" "}
      {/* global dark */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

