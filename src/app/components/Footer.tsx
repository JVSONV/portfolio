// import Image from "next/image";
import { links } from "@/lib/data";
import Link from "next/link";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

const Footer = () => {
  return (
    <footer className="container--section footer">
      <ul className="footer__nav" role="list" aria-label="Social links">
        {links.map((section) => {
          return (
            <li className="list__item footer__item" key={uuidv4()}>
              <Link
                href={section.hash}
                className="footer__link"
                title={section.name}
              >
                {section.name}
              </Link>
            </li>
          );
        })}

        <li className="list__item footer__item">
          <Link
            className="footer__link"
            href="https://github.com/JVSONV"
            title="GitHub"
          >
            <FaSquareGithub />
          </Link>
        </li>
        <li className="list__item footer__item">
          <Link
            className="footer__link"
            href="https://www.linkedin.com/in/jasonvallery/"
            title="LinkedIn"
          >
            <IoLogoLinkedin />
          </Link>
        </li>
        <li className="list__item footer__item">
          <Link
            href="/assets/resume.pdf"
            className="footer__link"
            download="Jason Vallery's Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoDocument />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
