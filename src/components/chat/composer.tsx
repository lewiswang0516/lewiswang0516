"use client";

import { useState } from "react";

export function Composer({
  onSubmit,
  disabled,
}: {
  onSubmit: (q: string) => void;
  disabled: boolean;
}) {
  const [value, setValue] = useState("");

  const submit = () => {
    if (!value.trim() || disabled) return;
    onSubmit(value);
    setValue("");
  };

  return (
    <div className="border-thin flex items-end gap-2 rounded-2xl border-sand-7 bg-sand-1 px-4 py-3 transition-colors focus-within:border-indigo-8">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            submit();
          }
        }}
        rows={1}
        maxLength={500}
        placeholder="Ask me anything about Zane"
        className="max-h-40 flex-1 resize-none bg-transparent text-body text-sand-12 outline-none placeholder:text-sand-11"
      />
      <button
        type="button"
        onClick={submit}
        disabled={disabled || !value.trim()}
        className="shrink-0 rounded-full bg-indigo-9 px-4 py-1.5 text-body font-semibold text-indigo-contrast transition-colors hover:bg-indigo-10 disabled:opacity-40"
      >
        Send
      </button>
    </div>
  );
}
