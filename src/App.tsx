// import { useState } from 'react'
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./config/routes";
// import { HomePage } from "./pages/HomePage";
// import { LoginPage } from "./views/LoginPage/LoginPage";
// import { NotFoundPage } from "./views/NotFoundPage/NotFoundPage";
// import { NavbarComponent } from "./components/NavbarComponent";
// import { FooterComponent } from "./components/FooterComponent";

// 加載中組件
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
  </div>
);

export const App: React.FC = () => {
  return (
    <>
      <div className="App">
        {/* <NavbarComponent /> */}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
        {/* <FooterComponent /> */}
      </div>
    </>
  );
};
