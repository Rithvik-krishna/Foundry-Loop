"use client";

import { FormEvent, useState } from "react";
import { contactFormSchema, type ContactFormData } from "../lib/contact";
import { Button } from "./Button";

type FormStatus = { type: "success" | "error"; message: string } | null;
type FieldErrors = Partial<Record<keyof ContactFormData, string[]>>;

const initialValues: ContactFormData = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormData>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateValue = (field: keyof ContactFormData, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: [] }));
    setStatus(null);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors as FieldErrors);
      setStatus({ type: "error", message: "Please check the highlighted fields and try again." });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result: { success?: boolean; message?: string; errors?: FieldErrors } = await response.json();

      if (!response.ok || !result.success) {
        setErrors(result.errors ?? {});
        setStatus({ type: "error", message: result.message ?? "We could not send your message. Please try again." });
        return;
      }

      setValues(initialValues);
      setErrors({});
      setStatus({ type: "success", message: result.message ?? "Thanks - your message is on its way." });
    } catch {
      setStatus({ type: "error", message: "We could not send your message. Please try again or email us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldError = (field: keyof ContactFormData) => errors[field]?.[0];

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <label htmlFor="contact-name">Name
        <input id="contact-name" required name="name" value={values.name} onChange={(event) => updateValue("name", event.target.value)} placeholder="Your name" aria-invalid={Boolean(fieldError("name"))} aria-describedby={fieldError("name") ? "contact-name-error" : undefined} />
        {fieldError("name") && <span id="contact-name-error" className="field-error">{fieldError("name")}</span>}
      </label>
      <label htmlFor="contact-email">Email
        <input id="contact-email" required type="email" name="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} placeholder="you@company.com" aria-invalid={Boolean(fieldError("email"))} aria-describedby={fieldError("email") ? "contact-email-error" : undefined} />
        {fieldError("email") && <span id="contact-email-error" className="field-error">{fieldError("email")}</span>}
      </label>
      <label htmlFor="contact-company">Company <span className="optional-field">Optional</span>
        <input id="contact-company" name="company" value={values.company} onChange={(event) => updateValue("company", event.target.value)} placeholder="Your company" aria-invalid={Boolean(fieldError("company"))} aria-describedby={fieldError("company") ? "contact-company-error" : undefined} />
        {fieldError("company") && <span id="contact-company-error" className="field-error">{fieldError("company")}</span>}
      </label>
      <label htmlFor="contact-subject">Subject
        <input id="contact-subject" required name="subject" value={values.subject} onChange={(event) => updateValue("subject", event.target.value)} placeholder="What would you like to discuss?" aria-invalid={Boolean(fieldError("subject"))} aria-describedby={fieldError("subject") ? "contact-subject-error" : undefined} />
        {fieldError("subject") && <span id="contact-subject-error" className="field-error">{fieldError("subject")}</span>}
      </label>
      <label htmlFor="contact-message">How can we help?
        <textarea id="contact-message" required name="message" rows={5} value={values.message} onChange={(event) => updateValue("message", event.target.value)} placeholder="A few words about your idea..." aria-invalid={Boolean(fieldError("message"))} aria-describedby={fieldError("message") ? "contact-message-error" : undefined} />
        {fieldError("message") && <span id="contact-message-error" className="field-error">{fieldError("message")}</span>}
      </label>
      <Button arrow disabled={isSubmitting} aria-busy={isSubmitting}>{isSubmitting ? "Sending..." : "Send message"}</Button>
      <p className="form-note">Prefer email? <a href="mailto:hello@foundryandloop.com">hello@foundryandloop.com</a></p>
      <p className={`form-status ${status ? `form-status-${status.type}` : ""}`} aria-live="polite" role={status?.type === "error" ? "alert" : undefined}>{status?.message}</p>
    </form>
  );
}
