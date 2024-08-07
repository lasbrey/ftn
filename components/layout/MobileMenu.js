'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu }) {
    const [isActive, setIsActive] = useState(0)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""
    return (
        <>
            <nav id="main-nav-mobi" className="main-nav" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
            <ul id="menu-primary-menu" className="menu">
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/home",
          ])}`}
        >
          <Link href="/">Home </Link>
        </li>
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/markets",
          ])}`}
        >
          <Link href="/markets">Markets </Link>
        </li>

        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/faq",
          ])}`}
        >
          <Link href="/faq">Faq</Link>
        </li>
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/about",
          ])}`}
        >
          <Link href="/about">About Us</Link>
        </li>
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/contact",
          ])}`}
        >
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
            </nav>

        </>
    )
}
