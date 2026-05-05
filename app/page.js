import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Knowlege from "@/components/home/Knowlege";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Knowlege/>
    </div>
  );
}
