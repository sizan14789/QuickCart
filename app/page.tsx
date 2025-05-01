export const dynamic = "force-dynamic";

import Banner from "@/components/Home/Banner";
import Featured from "@/components/Home/featured/Featured";
import Popular from "@/components/Home/popular/Popular";
import Slider from "@/components/Home/Slider";
import Subscription from "@/components/Home/subscription/Subscription";
import "swiper/css";
import "ldrs/ring";


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
