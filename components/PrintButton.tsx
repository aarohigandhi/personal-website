"use client";

/* Runs the browser's print-to-PDF. The @media print styles in globals.css
   turn the resume into a clean light document. */
export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print rounded border border-rule px-3 py-1 text-sm text-muted transition-colors hover:border-link/50 hover:text-link"
    >
      download pdf ↓
    </button>
  );
}
