import { Zoomies } from "ldrs/react";
import "ldrs/react/Zoomies.css";

const Loader = () => {
  return (
    <div className="flex grow justify-center items-center min-h-[70svh]">
      <Zoomies
        size="80"
        stroke="5"
        bgOpacity="0.1"
        speed="1.2"
        color="#FF4A00"
      />
    </div>
  );
};

export default Loader;
