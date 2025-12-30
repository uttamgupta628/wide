import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="w-full bg-[#3C3533]">
      <div className="max-w-7xl mx-auto p-6">
        <nav className="text-white text-lg font-medium">
          {items.map((item, index) => (
            <span key={index}>
              {item.href ? (
                <Link to={item.href} className="hover:underline transition">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}

              {index < items.length - 1 && <span className="mx-2">{">"}</span>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
