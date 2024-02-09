import React from "react";
import Navbar2 from "../components/Navbar2";
import Upload from "../components/Upload";
import Footer from "../layout/Footer";
export const Dashboard = () => {
  return (
    <div className="bg-black">
      <Navbar2 />
      <Upload />
      <Footer />
    </div>
  );
};
