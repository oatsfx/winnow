import React from "react";

const routes = [
  {
    path: "/",
    key: "home",
    name: "Home",
    component: React.lazy(() => import("pages/Home")),
  },
  {
    path: "/emblem-try-on",
    key: "emblem",
    name: "Emblem Try On",
    component: React.lazy(() => import("pages/EmblemTryOn")),
  },
  {
    path: "/verity-calculator",
    key: "verity",
    name: "Verity Calculator",
    component: React.lazy(() => import("pages/VerityCalculator")),
  },
];

export default routes;
