"use client";
import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalCtxProvider";
import vetsWhoCode from "../../../public/assets/photos/companies/vetswhocode.webp";
import jason from "../../../public/assets/photos/jason_desktop.webp";
import Link from "next/link";

const About = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <section id="about" aria-label="About me">
      <div className="container--section">
        <header className="about__header">
          <h2 className="about__header header header--about">
            Me Myself &amp; I
          </h2>
        </header>
        <div className="about__me">
          <h3 className="about__title">ABOUT ME</h3>
          <p className="about__summary">
          Software Development and Marine Corps Veteran who fuses together business acumen with a drive to
succeed to deliver projects on time and above expectations. Dynamic team player who communicates
technical information articulately so the goal is understood by everyone involved. Builds partnerships with
others to meet shared objectives. Adept at collaborating with cross-functional teams to drive project
success.
          </p>
        </div>
        <div className="hotspot-container">
          <Image className="owner__photo" src={jason} alt="Jason Vallery" />
        </div>
        <div className="about__current">
          <h3 className="about__title current">CURRENTLY</h3>
          <div className="current__content">
            <Image
              className="vets-img"
              src={vetsWhoCode}
              alt="Vets Who Code logo"
            />
            <p className="current__status">
              I am currently practicing and honing my skills with #VetsWhoCode.
            </p>
            <p className="current__statement">
              Reach out to chat or grab a copy of my current resume
            </p>
            <div className="button__wrapper">
              <button
                className="button button--current"
                type="button"
                onClick={modalCtx.showModalHandler}
              >
                Reach out
              </button>
              <Link
                href="/assets/resume.pdf"
                className="button button--resume"
                download="Jason Vallery's Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
