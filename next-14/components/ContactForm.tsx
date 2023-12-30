"use client";
import React from "react";

const ContactForm = () => {
  const handleFormSubmit = () => {
    const email = "gujaratirutvik007@gmail.com";
    const subject = "Contact For Another Details";
    const body = "Hello, I'd like to get in touch.";
  
    // Construct the Gmail compose link
    const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  
    // Open the Gmail compose window in a new tab
    window.open(gmailLink, "_blank");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button
        className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
        onClick={handleFormSubmit}
      >
        Send a message
      </button>
    </div>
  );
};

export default ContactForm;
