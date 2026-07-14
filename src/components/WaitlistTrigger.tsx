"use client";

import { useWaitlistModal } from "@/components/waitlist-modal-context";

type WaitlistTriggerProps = {
  label: string;
  className?: string;
};

export function WaitlistTrigger({ label, className = "" }: WaitlistTriggerProps) {
  const { open } = useWaitlistModal();

  return (
    <button
      type="button"
      onClick={open}
      className={`inline-block cursor-pointer rounded-full border-none font-sans font-semibold transition-transform duration-150 hover:-translate-y-0.5 ${className}`}
    >
      {label}
    </button>
  );
}
