import { Mulish } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import Expertise from "./expertise";
import LandingPage from "./landingPage";

const mulish = Mulish({ subsets: ["latin"] });

export default function Home() {
  return (
    <div id="home" className={mulish.className} style={{ height: "100%" }}>
      <Header></Header>
      <LandingPage />
      <Expertise />
      <Footer />
    </div>
  );
}
