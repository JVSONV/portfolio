"use client";

import { useContext, useRef } from "react";
import { ModalContext } from "@/app/context/ModalCtxProvider";
import { FaWindowClose } from "react-icons/fa";
import { sendEmail } from "../sendEmails";
import ContactForm from "./ContactForm";

const Modal = () => {
  const modalCtx = useContext(ModalContext);

  const modalRef = useRef<HTMLDialogElement>(null);

  if (modalCtx.modalState) {
    modalRef.current!.showModal();
    modalRef.current!.onanimationend = null;
  }

  const removeModal = () => {
    modalRef.current!.setAttribute("closing", "");
    modalRef.current!.onanimationend = () => {
      modalRef.current!.removeAttribute("closing");
      modalRef.current!.close();
      modalCtx.showModalHandler();
    };
  };

  return (
    <dialog
      className="modal"
      id="modal"
      aria-hidden="true"
      aria-modal="true"
      ref={modalRef}
      onClick={(e) => {
        if (e.target === modalRef.current) {
          removeModal();
        }
      }}
    >
      <ContactForm onClose={removeModal}/>
    </dialog>
  );
};

export default Modal;
