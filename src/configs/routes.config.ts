import React from "react";

const routes = [
  {
    path: "/emblem-try-on",
    key: "emblem",
    name: "Emblem Try On",
    component: React.lazy(() => import("pages/EmblemTryOn")),
  },
  {
    path: "/verity-callouts",
    key: "verity",
    name: "Verity Callouts",
    component: React.lazy(() => import("pages/VerityCallouts")),
  },
];

export default routes;
