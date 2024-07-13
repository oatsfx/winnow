import React from "react";
import { Header } from "../Header";
import { PageView } from "components/PageView";
import { Footer } from "components/Footer";
import { Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-primary/10 to-[8rem]">
      <Header />
      <div className="bg-primary/30 items-center text-center p-1">
        <Link
          to="https://donate.tiltify.com/dac29dad-5433-4ac2-9417-b3b5f832fec2"
          target="_blank"
          className="text-accent underline hover:text-white"
        >
          Support the Bungie Foundation!
        </Link>
      </div>
      <PageView />
      <Footer />
    </div>
  );
};

export default Layout;
