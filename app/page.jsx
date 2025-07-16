export const dynamic = "force-dynamic";

import Banner from "@/app/(customer)/components/Banner";
import Featured from "@/app/(customer)/components/featured/Featured";
import Popular from "@/app/(customer)/components/popular/Popular";
import Slider from "@/app/(customer)/components/Slider";
import Subscription from "@/app/(customer)/components/subscription/Subscription";
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
