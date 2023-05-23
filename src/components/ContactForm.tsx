"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import SubmitMessage from "./SubmitMessage";

type FormValue = {
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const [form, setForm] = useState<FormValue>({
    email: "",
    subject: "",
    message: "",
  });

  const { email, subject, message } = form;

  const onHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    console.log(name, value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <>
      {isSuccess && (
        <SubmitMessage
          message={isSuccess ? "Success" : "Error"}
          success={true}
        />
      )}

      <form
        className='w-full flex flex-col bg-sky-900 rounded-lg p-4 my-6'
        onSubmit={onHandleSubmit}
      >
        <label className='my-2 text-white' htmlFor='email'>
          Your email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          required
          autoFocus
          value={email}
          onChange={onHandleChange}
        />

        <label className='my-2 text-white' htmlFor='subject'>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          required
          value={subject}
          onChange={onHandleChange}
        />

        <label className='my-2 text-white' htmlFor='message'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          required
          rows={10}
          value={message}
          onChange={onHandleChange}
        />

        <button
          className='font-semibold bg-yellow-400 my-4 rounded-lg hover:bg-yellow-600 py-2'
          type='submit'
        >
          Submit
        </button>
      </form>
    </>
  );
}
