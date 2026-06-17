"use client";

import { useState } from "react";

type PromptBlockProps = {
  title: string;
  description?: string;
  content: string;
  copyLabel: string;
  defaultOpen?: boolean;
};

export function PromptBlock({
  title,
  description,
  content,
  copyLabel,
  defaultOpen = true
}: PromptBlockProps) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [open, setOpen] = useState(defaultOpen);

  async function handleCopy() {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(content);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = content;
        textarea.setAttribute("readonly", "true");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setCopyFailed(false);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopyFailed(true);
      window.setTimeout(() => setCopyFailed(false), 1600);
    }
  }

  return (
    <article className="overflow-hidden border border-line bg-[#1f1d19] text-[#f8f0df] shadow-paper">
      <div className="flex flex-col gap-3 border-b border-[#4a453d] px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
        <button type="button" className="text-left" onClick={() => setOpen((value) => !value)}>
          <p className="text-xs uppercase tracking-[0.18em] text-[#cdbf9e]">
            {open ? "展开中" : "已折叠"}
          </p>
          <h3 className="mt-1 text-xl font-semibold">{title}</h3>
          {description ? <p className="mt-2 text-sm leading-6 text-[#cdbf9e]">{description}</p> : null}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="w-fit shrink-0 border border-[#7c715d] px-3 py-2 text-sm text-[#f8f0df] transition hover:bg-[#f8f0df] hover:text-[#1f1d19]"
        >
          {copyFailed ? "复制失败" : copied ? "已复制" : copyLabel}
        </button>
      </div>
      {open ? (
        <pre className="max-h-[520px] overflow-auto whitespace-pre-wrap px-5 py-5 text-sm leading-7">
          <code>{content}</code>
        </pre>
      ) : null}
    </article>
  );
}
