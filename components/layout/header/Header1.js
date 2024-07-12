import { Menu } from "@headlessui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import MainMenu from "../Menu";
import MobileMenu from "../MobileMenu";
const ThemeSwitch = dynamic(() => import("@/components/elements/ThemeSwitch"), {
  ssr: false,
});
export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header
        id="header_main"
        className={`header ${scroll ? "is-fixed is-small" : ""}`}
      >
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-12">
              <div className="header__body d-flex justify-content-between">
                <div className="header__left">
                  <div className="logo-container">
                    <Link className="light" href="/">
                      <img
                        src="/assets/images/logo/logo.png"
                        alt=""
                        width={70}
                        height={40}
                        data-retina="assets/images/logo/logo@2x.png"
                        data-width={118}
                        data-height={32}
                      />
                    </Link>
                    <span className="network-text">
                      Financial Trade Network
                    </span>
                  </div>

                  <div className="left__main">
                    <div className="d-none d-lg-block">
                      <nav id="main-nav" className="main-nav">
                        <MainMenu />
                      </nav>
                      {/* #main-nav */}
                    </div>
                  </div>
                </div>
                <div className="header__right">
                  <div className="wallet">
                    <Link href="/login"> Register/Login </Link>
                  </div>
                  <div className="d-block d-lg-none">
                    <div
                      className={`mobile-button d-block ${
                        isMobileMenu ? "active" : ""
                      }`}
                      onClick={handleMobileMenu}
                    >
                      <span />
                    </div>
                    {/* /.mobile-button */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu isMobileMenu={isMobileMenu} />
      </header>
    </>
  );
}
