"use client";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function DynamicNav() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}

export default DynamicNav;
