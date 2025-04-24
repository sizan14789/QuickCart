import Banner from "@/components/Home/Banner";
import Featured from "@/components/Home/Featured";
import Popular from "@/components/Home/Popular";
import Slider from "@/components/Home/Slider";
import Subscription from "@/components/Home/Subscription";
import 'swiper/css'

export default function Home() {
  return (
    <main className="box flex flex-col gap-8">
      <Slider />
      <Popular />
      <Featured />
      <Banner />
      <Subscription />
    </main>
  );
}
