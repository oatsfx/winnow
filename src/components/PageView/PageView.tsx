import React, { LazyExoticComponent, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "configs/routes.config";

const ViewPort: React.FC<{ Component: LazyExoticComponent<React.FC> }> = ({
  Component,
}) => {
  return (
    <div className="w-full h-full flex justify-center py-6">
      <div className="flex-grow container">
        <Component />
      </div>
    </div>
  );
};

const AllRoutes: React.FC = () => (
  <Routes>
    {routes.map((route) => (
      <Route
        key={route.key}
        path={route.path}
        element={<ViewPort Component={route.component} />}
      />
    ))}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

const PageView: React.FC = () => {
  return (
    <Suspense fallback={<></>}>
      <AllRoutes />
    </Suspense>
  );
};

export default PageView;
