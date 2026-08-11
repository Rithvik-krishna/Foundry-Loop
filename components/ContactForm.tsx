"use client";

import { useState } from "react";
import { Button } from "./Button";
import { pagesContent } from "../constants/content";

export function ContactForm() {
  const fields = pagesContent.contact.fields;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-success" style={{ padding: "40px", borderRadius: "16px", background: "var(--surface)", border: "1px solid var(--line)" }}>
        <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>Thank you for reaching out.</h3>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.5 }}>
          Your message has been received. A member of the Foundry &amp; Loop team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">{fields.name}</label>
        <input id="name" type="text" placeholder={fields.namePlaceholder} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">{fields.email}</label>
        <input id="email" type="email" placeholder={fields.emailPlaceholder} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">{fields.message}</label>
        <textarea id="message" rows={4} placeholder={fields.messagePlaceholder} required />
      </div>
      <Button type="submit" variant="primary">
        Send message
      </Button>
    </form>
  );
}
