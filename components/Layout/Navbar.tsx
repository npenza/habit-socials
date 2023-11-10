import * as React from "react";
import DarkModeToggle from "./DarkModeToggle";
import AccountSection from "../Account/AccountSection";

function Navbar() {
  return (
    <div className="flex flex-row items-center space-x-2">
      <DarkModeToggle />
      <AccountSection />
    </div>
  );
}

export default Navbar;
