import routes from "configs/routes.config";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 flex items-center justify-between w-full z-[55] pl-10 py-4 shadow bg-base-100 outline outline-1 outline-primary gap-6">
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1540 747"
          className="mb-1 w-16"
          fill="currentColor"
        >
          <path d="M1019.52,224.28c98.97,123.27,93.79,314-35.72,431.94-129.07,117.53-327.83,108.76-447.08-20.42-115.54-125.15-103.38-304.78-15.2-411.29,64.95,77.32,147.41,119.44,248.85,119.46,101.46.02,183.94-42.07,249.15-119.69Z" />
          <path d="M504.86,688.23c-111.45,19.65-222.13,39.16-333.26,58.76-2.46-13.82-4.8-26.88-7.11-39.95-10.56-59.82-21.1-119.64-31.65-179.46-10.46-59.33-20.91-118.66-31.37-177.98-.81-4.59-.21-10.53-2.88-13.35-2.46-2.6-8.45-1.89-12.9-2.54-44.09-6.47-76.52-36.93-83.65-80.78-9.44-57.99,32.03-105.12,81.88-111.59,54.96-7.13,102.38,28.7,110.07,83.37,3.8,26.97-3.37,51.5-20.42,73.51,2.06,1.48,4.04,2.94,6.05,4.34,66.43,46.53,132.85,93.08,199.33,139.53,3.01,2.1,4.33,4.25,4.5,8.05,4.08,87.94,38.7,161.8,102.85,221.91,5.79,5.42,11.96,10.44,18.57,16.18Z" />
          <path d="M1366.98,298.45c-24.84-35.67-28.77-72.45-7.46-110.28,19.93-35.4,61.77-54.07,100.96-46.41,41.51,8.11,72.85,40.46,78.79,81.34,8.37,57.61-34.81,109.27-93.07,111.25-2.96.1-4.31.72-4.88,3.98-13.58,77.7-27.29,155.38-40.98,233.06-10.02,56.87-20.04,113.74-30.08,170.61-.25,1.44-.66,2.85-1.16,4.97-110.97-19.57-221.64-39.08-333.09-58.73,6.4-5.54,12.28-10.38,17.87-15.53,56.88-52.47,90.69-117.07,101.32-193.72,1.3-9.38,1.81-18.9,2.23-28.38.17-3.86,1.29-6.28,4.54-8.55,67.04-46.81,134-93.75,200.97-140.66,1.35-.94,2.66-1.93,4.05-2.95Z" />
          <path d="M770.27.03c73.19-1.44,140.37,58.71,140.67,140.05.29,77.47-62.52,140.41-140.33,140.64-77.55.22-140.58-62.51-140.63-140.3C629.92,59.03,697.14-1.25,770.27.03Z" />
        </svg>
        <h2 className="font-display font-bold text-xl text-white">winnow</h2>
        {routes.map((route) => (
          <Link
            to={route.path}
            key={route.key}
            className={
              "py-2 px-2 transition ease-in-out rounded-lg outline-1 bg-black hover:bg-opacity-70 hover:text-accent" +
              (location.pathname === route.path
                ? " bg-black bg-opacity-40 text-primary"
                : " bg-opacity-0")
            }
          >
            {route.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-2 pr-6">
        <Link
          to={"https://ko-fi.com/oatsfx"}
          target="_blank"
          className={
            "py-2 px-2 transition ease-in-out rounded-lg outline-1 bg-black hover:bg-opacity-70 hover:text-accent bg-opacity-0"
          }
        >
          Support Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
