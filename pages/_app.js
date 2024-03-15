import CustomFooter from "@/components/CustomFooter";
import CustomeNavbar from "@/components/CustomeNavbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
  <CustomeNavbar/>
  <Component {...pageProps} />;
  <CustomFooter/>
  </>
}
