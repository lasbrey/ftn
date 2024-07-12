'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MainMenu() {
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

    return (
        <>
            <ul id="menu-primary-menu" className="menu">
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/",])}`}>
                    <Link href="/">Home </Link>
                </li>
                
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/faq"])}`}>
                    <Link href="#">Faq</Link>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/about"])}`}>
                    <Link href="#">About Us</Link>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/contact"])}`}>
                    <Link href="#">Contact Us</Link>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/user-profile",
                    "/login",
                    "/register",
                    "/contact",
                    "/faq"
                ])}`}>
                    <Link href="#"> Pages </Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/user-profile")}`}>
                            <Link href="/user-profile">User Profile</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/login")}`}>
                            <Link href="/login">Login</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/register")}`}>
                            <Link href="/register">Register</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/contact")}`}>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/faq")}`}>
                            <Link href="/faq">FAQ</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

