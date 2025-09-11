import "../styles/globals.css";
import Layout from "../components/layout/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#0B0E12] text-[#E8ECF1] min-h-screen">
      {" "}
      {/* global dark */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

