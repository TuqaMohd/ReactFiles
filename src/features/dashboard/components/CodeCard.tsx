interface CodeCardProps {
  label: string;
  code: string;
  badgeClassName: string;
}

export default function CodeCard({ label, code, badgeClassName }: CodeCardProps) {
  return (
    <div className="bg-ink rounded-lg p-4">
      <span className={"inline-block text-xs font-semibold px-2 py-1 rounded mb-2 " + badgeClassName}>
        {label}
      </span>
      <pre className="text-parchment text-sm whitespace-pre-wrap font-mono">{code}</pre>
    </div>
  );
}
