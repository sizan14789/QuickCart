import { JellyTriangle } from "ldrs/react";
import "ldrs/react/JellyTriangle.css";

const Loader = () => {
  return (
    <div className="flex grow justify-center items-center"  >
      <JellyTriangle size="30" speed="1.75" color="#f54a00" />
    </div>
  );
};

export default Loader;
