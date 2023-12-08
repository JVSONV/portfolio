"use client";
// import Image from "next/image";
import Link from "next/link";
import { links } from "../../lib/data";
import { useContext, useRef, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { ModalContext } from "@/app/context/ModalCtxProvider";
import { v4 as uuidv4 } from "uuid";

const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const modalCtx = useContext(ModalContext);

  const navToggleHandler = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const onOpenHandler = () => {
    navRef.current!.onanimationend = null;
    navRef.current!.classList.add("open");
    navToggleHandler();
  };

  const onCloseHandler = () => {
    navRef.current!.classList.remove("open");
    navRef.current!.classList.add("closing");
    navRef.current!.onanimationend = () => {
      navRef.current!.classList.remove("closing");
    };
    navToggleHandler();
  };

  const navigationHandler = () => onCloseHandler();

  return (
    <header className="primary-header">
      <div className="container--section">
        <div className="nav-wrapper">
          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded={isMobileNavOpen}
            aria-label="Menu button"
            onClick={isMobileNavOpen ? onCloseHandler : onOpenHandler}
          >
            {isMobileNavOpen ? <FaWindowClose /> : <RiMenu2Line />}
            <span className="sr-only">
              {isMobileNavOpen ? "Close Menu" : "Open Menu"}
            </span>
          </button>
          <nav
            className="primary-navigation"
            id="primary-navigation"
            ref={navRef}
            onClick={navigationHandler}
          >
            <ul className="nav__list" aria-label="Primary Navigation">
              {links.map((section) => {
                return (
                  <li className="list__item" key={uuidv4()}>
                    <Link href={section.hash} className="nav__link">
                      {section.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            id="contact-me"
            className="button"
            type="button"
            aria-controls="modal"
            onClick={modalCtx.showModalHandler}
          >
            Reach Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
