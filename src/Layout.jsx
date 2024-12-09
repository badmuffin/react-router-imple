import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
// the components at the top or bottom of the oulet will be same but the oulet component can be changed

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* child element include Home, about, contact, github */}
      <Footer />
    </>
  );
};

export default Layout;
