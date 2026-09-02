"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/dictionaries";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({ dict }: { dict: Dictionary }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? dict.waitlist.errorGeneric);
        return;
      }

      setStatus("success");
      setMessage(dict.waitlist.successMessage);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(dict.waitlist.errorNetwork);
    }
  }

  return (
    <div className="mx-auto mb-7 max-w-[420px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-2.5">
        <label htmlFor="waitlist-email" className="sr-only">
          {dict.waitlist.emailLabel}
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          placeholder={dict.waitlist.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-[50px] flex-1 rounded-[12px] border-[1.5px] border-black/[0.18] bg-white px-[18px] text-[15px] focus:border-(--color-ocean-teal) focus:outline-none"
        />
        <Button
          type="submit"
          variant="primary"
          className="h-[50px]"
          disabled={status === "loading"}
        >
          {status === "loading" ? dict.waitlist.submitting : dict.waitlist.submit}
        </Button>
      </form>
      {message ? (
        <p
          role="status"
          className={`mt-3 text-sm ${
            status === "error" ? "text-(--color-error)" : "text-(--color-ocean-teal)"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
