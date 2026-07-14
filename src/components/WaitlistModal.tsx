"use client";

import { useWaitlistModal } from "@/components/waitlist-modal-context";

export function WaitlistModal() {
  const { isOpen, close } = useWaitlistModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-[rgba(36,16,25,0.6)] p-5"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-[440px] rounded-[22px] bg-bone p-9 px-8">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-5 top-4 cursor-pointer border-none bg-none text-[26px] text-[#9a8a80]"
        >
          &times;
        </button>
        <h3 className="font-display text-[26px] text-deep-plum">Join the waitlist</h3>
        <p className="mb-[22px] mt-2 text-[14.5px] text-[#5a5a5a]">
          Be first to know when Maavie launches. No spam, no fear — just the
          honest, science-first version.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#6a5b52]">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@email.com"
            required
            className="mb-4 w-full rounded-xl border border-[#d8cec2] bg-white px-4 py-3 font-sans text-[15px] focus:border-deep-plum focus:outline-none focus:ring-[3px] focus:ring-deep-plum/12"
          />
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#6a5b52]">
            First name{" "}
            <span className="text-[11px] font-normal normal-case tracking-normal text-[#aa9999]">
              (optional)
            </span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="mb-4 w-full rounded-xl border border-[#d8cec2] bg-white px-4 py-3 font-sans text-[15px] focus:border-deep-plum focus:outline-none focus:ring-[3px] focus:ring-deep-plum/12"
          />
          <button
            type="submit"
            className="w-full cursor-pointer rounded-full border-none bg-deep-plum px-8 py-4 text-center font-sans text-[15px] font-semibold text-bone transition-colors hover:bg-[#582546]"
          >
            Join the Waitlist
          </button>
        </form>
        <p className="mt-3.5 text-center text-[11.5px] text-[#8a8a8a]">
          We&apos;ll use your email to tell you about launch and send
          occasional waitlist updates.
        </p>
      </div>
    </div>
  );
}
