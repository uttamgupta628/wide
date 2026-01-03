import React from "react";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ScrollToTopButton from "../sections/ScrollToTopButton";

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTopButton />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
