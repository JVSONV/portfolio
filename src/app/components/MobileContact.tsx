"use client";
// import Image from "next/image";
import { useContext } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { ModalContext } from "@/app/context/ModalCtxProvider";

const MobileContactButton = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <button
      id="contact-mobile"
      className="button button--mobile button--cta"
      type="button"
      aria-controls="modal"
      onClick={modalCtx.showModalHandler}
    >
      <RiMailSendLine />
      <span className="sr-only">Contact me</span>
    </button>
  );
};

export default MobileContactButton;
