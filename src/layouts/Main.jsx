
import { useEffect, useState } from "react";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
