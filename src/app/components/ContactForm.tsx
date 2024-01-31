"use client";
import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { ContactFormData } from "../sendEmails";

type ModalProps = {
  onClose: () => void;
};

const ContactForm = (props: ModalProps) => {
  const [contactData, setContactData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const formDataHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    // if (e.target.value.length === 0) return;
    setContactData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      className="contact"
      method="dialog"
      onSubmit={async (e) => {
        e.preventDefault();
        const formResponse = await fetch("/api/send", {
          method: "POST",
          body: JSON.stringify(contactData),
        });
        setContactData({
          name: "",
          email: "",
          message: "",
        });
        console.log(formResponse);
        props.onClose();
      }}
    >
      <button
        className="close__modal-wrapper"
        type="button"
        onClick={props.onClose}
      >
        <FaWindowClose style={"z-index: -1"} />
      </button>
      <div className="input-wrapper">
        <label htmlFor="name">Name:</label>
        <input
          className="contact-name"
          type="text"
          id="name"
          name="name"
          onChange={(e) => {
            formDataHandler(e);
          }}
          value={contactData.name}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email:</label>
        <input
          className="contact-email"
          type="email"
          id="email"
          name="email"
          onChange={(e) => formDataHandler(e)}
          value={contactData.email}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={5}
          onChange={(e) => formDataHandler(e)}
          value={contactData.message}
        ></textarea>
      </div>
      <button type="submit" className="button send">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
