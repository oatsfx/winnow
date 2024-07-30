import React from "react";
import { Header } from "../Header";
import { PageView } from "components/PageView";
import { Footer } from "components/Footer";
import { Link } from "react-router-dom";
import Banner from "components/Banner/Banner";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-primary/10 to-[8rem]">
      <Header />
      <PageView />
      <Footer />
    </div>
  );
};

export default Layout;
