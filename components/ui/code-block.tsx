"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children: string; // Nội dung code là chuỗi
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset icon sau 2s
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group my-4 rounded-lg overflow-hidden">
      {/* Nút Copy - Hiện khi hover vào khung code */}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        title="Copy to clipboard"
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>

      {/* Nội dung Code */}
      <pre
        className={cn(
          "bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto font-mono text-sm leading-relaxed",
          className,
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
