import React from "react";
import Navbar2 from "../components/Navbar2";
import Upload from "../components/Upload";
import Footer from "../layout/Footer";
import PendingRights from "../components/PendingRights";
export const Dashboard = () => {
  return (
    <div className="bg-black">
      <Navbar2 />
      <PendingRights />
      <Upload />
      <Footer />
    </div>
  );
};
