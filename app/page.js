import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Knowlege from "@/components/home/Knowlege";
import QualificationPage from "@/components/home/Qualification";
import TimeLine from "@/components/TimeLine";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Knowlege/>
      <QualificationPage/>
      <TimeLine/>
    </div>
  );
}
