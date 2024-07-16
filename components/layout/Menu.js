"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainMenu() {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  useEffect(() => {
    setCurrentMenuItem(pathname);
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? "current-item" : "";
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path))
      ? "current-menu-item"
      : "";

  return (
    <>
      <ul id="menu-primary-menu" className="menu text-white">
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/home",
          ])}`}
        >
          <Link className="text-white" href="/">Home </Link>
        </li>
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/markets",
          ])}`}
        >
          <Link className="text-white" href="/markets">Markets </Link>
        </li>

        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/faq",
          ])}`}
        >
          <Link className="text-white" href="/faq">Faq</Link>
        </li>
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/about",
          ])}`}
        >
          <Link className="text-white" href="/about">About Us</Link>
        </li>
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/contact",
          ])}`}
        >
          <Link className="text-white" href="/contact">Contact Us</Link>
        </li>
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/dashboard",
          ])}`}
        >
          <Link className="text-white" href="/dashboard"> My Account </Link>
        </li>
      </ul>
    </>
  );
}
