"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Message vitrine — ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}\n${String(data.get("phone") ?? "").trim()}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="border border-mp-line bg-[rgba(255,252,247,0.72)] p-6">
        <p className="font-display text-2xl">Message prêt à partir</p>
        <p className="mt-3 text-sm leading-relaxed text-mp-muted">
          Votre client mail s’ouvre avec le message à envoyer à {site.email}. Vous
          pouvez aussi nous écrire directement ou passer à l’officine.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-mp-accent hover:text-mp-accent-hover"
          onClick={() => setStatus("idle")}
        >
          Rédiger un autre message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Nom
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1 w-full border border-mp-line-strong bg-[#fffcf7] px-3 py-2.5 text-sm outline-none focus:border-mp-accent focus:ring-2 focus:ring-mp-accent-soft"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full border border-mp-line-strong bg-[#fffcf7] px-3 py-2.5 text-sm outline-none focus:border-mp-accent focus:ring-2 focus:ring-mp-accent-soft"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium">
          Téléphone <span className="text-mp-faint">(facultatif)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full border border-mp-line-strong bg-[#fffcf7] px-3 py-2.5 text-sm outline-none focus:border-mp-accent focus:ring-2 focus:ring-mp-accent-soft"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full border border-mp-line-strong bg-[#fffcf7] px-3 py-2.5 text-sm outline-none focus:border-mp-accent focus:ring-2 focus:ring-mp-accent-soft"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center bg-mp-accent px-5 py-2.5 text-sm font-semibold text-[#f7f4ef] transition-colors hover:bg-mp-accent-hover"
      >
        Envoyer
      </button>
    </form>
  );
}
