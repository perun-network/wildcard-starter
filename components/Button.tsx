// components/Button.tsx
import React from "react";

export function Button({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: "0.5rem 1rem", borderRadius: 4, border: "1px solid #333", cursor: "pointer" }}
    >
      {children}
    </button>
  );
}
