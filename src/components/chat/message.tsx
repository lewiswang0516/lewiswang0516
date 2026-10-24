"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import type { ChatMessageView } from "@/lib/chat/useChat";

export function Message({
  message,
  streaming,
}: {
  message: ChatMessageView;
  streaming: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";

  const copy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="text-body">
      <div className="mb-1 text-caption text-sand-11">{isUser ? "You" : "Zane"}</div>
      {isUser ? (
        <p className="whitespace-pre-wrap">{message.content}</p>
      ) : (
        <div className="answer">
          <ReactMarkdown>{message.content}</ReactMarkdown>
          {message.pending && streaming ? (
            <span className="ml-0.5 inline-block h-4 w-2 bg-sand-12 align-middle" />
          ) : null}
          {message.sources && message.sources.length > 0 ? (
            <p className="mt-3 text-caption text-sand-11">
              Source: {message.sources.join(", ")}
            </p>
          ) : null}
          {!message.pending && message.content ? (
            <button
              type="button"
              onClick={copy}
              className="mt-2 text-caption text-sand-11 underline-offset-4 hover:text-sand-12 hover:underline"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
