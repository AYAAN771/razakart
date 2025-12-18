"use client";

import { Home, IndianRupee, Laptop, Cpu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileBottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    {
      icon: Home,
      label: "Home",
      href: "/",
      active: pathname === "/"
    },
    {
      icon: IndianRupee,
      label: "Price",
      href: "/category/price/under-20000",
      active: pathname.startsWith("/category/price")
    },
    {
      icon: Laptop,
      label: "Brands",
      href: "/category/brand/hp",
      active: pathname.startsWith("/category/brand")
    },
    {
      icon: Cpu,
      label: "Processor",
      href: "/category/processor/intel-core-i5",
      active: pathname.startsWith("/category/processor")
    }
  ];

  return (
    <>
      {/* Mobile Bottom Navigation - Only visible on screens smaller than md (768px) */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-lg block md:hidden">
        <div className="flex items-center justify-around py-2 px-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center py-2 px-2 min-w-0 flex-1 transition-colors ${
                  item.active
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className={`w-5 h-5 mb-1 ${item.active ? "text-blue-600" : ""}`} />
                <span className={`text-xs font-medium ${item.active ? "text-blue-600" : ""}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileBottomNav;