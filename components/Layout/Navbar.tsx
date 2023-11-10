import * as React from "react";
import DarkModeToggle from "./DarkModeToggle";
import AccountSection from "../Account/AccountSection";
import Link from "next/link";

function Navbar() {
  return (
    <div className="container flex flex-row items-center space-x-2 py-2 border-b dark:border-slate-600 light:border-gray-100">
      <nav className="flex flex-1 space-x-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
      </nav>
      <DarkModeToggle />
      <AccountSection />
    </div>
  );
}

export default Navbar;
