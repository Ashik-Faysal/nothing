import { BounceLoader, DotLoader } from "react-spinners";
const Loader = () => {
  return (
    <div
      className="
      h-[98vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <DotLoader
        color="#36d6c3"
        cssOverride={null}
        loading
        size={120}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;
