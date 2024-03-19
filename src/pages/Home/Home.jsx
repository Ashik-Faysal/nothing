import React from "react";

const Home = () => {
  return (
    <div
      className="relative h-[65vh] w-full overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/m8vM71G/pexels-piotr-arnoldes-6025811.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center">
        <div className="text-center md:w-1/2">
          <h1 className="text-6xl font-extrabold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-white text-xl pt-2">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
