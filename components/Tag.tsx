/** A small pill. If `color` (a CSS color/var) is passed it tints itself. */
export function Tag({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  const style = color
    ? {
        color,
        backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
        borderColor: `color-mix(in srgb, ${color} 30%, transparent)`,
      }
    : undefined;
  return (
    <span
      style={style}
      className="inline-block rounded-full border border-rule px-2.5 py-0.5 font-mono text-xs text-muted"
    >
      {children}
    </span>
  );
}
