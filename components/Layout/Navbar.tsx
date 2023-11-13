import * as React from "react";
import DarkModeToggle from "./DarkModeToggle";
import AccountSection from "../Account/AccountSection";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-row border-b dark:border-slate-600 light:border-gray-100">
      <div className="container flex flex-row items-center py-2 ">
        <nav className="flex flex-1 space-x-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <DarkModeToggle />
          <AccountSection />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
