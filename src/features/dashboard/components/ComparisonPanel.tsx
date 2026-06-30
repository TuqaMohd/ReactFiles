import type { ComparisonPoint } from "../types";
import CodeCard from "./CodeCard";

interface ComparisonPanelProps {
  comparison: ComparisonPoint;
}

export default function ComparisonPanel({ comparison }: ComparisonPanelProps) {
  return (
    <div className="bg-white border border-parchmentDark rounded-lg p-5">
      <div className="grid md:grid-cols-2 gap-4">
        <CodeCard
          label="JavaScript"
          code={comparison.js}
          badgeClassName="bg-goldBright text-ink"
        />
        <CodeCard
          label="TypeScript"
          code={comparison.ts}
          badgeClassName="bg-runeBlue text-white"
        />
      </div>
      <p className="mt-4 border-l-4 border-gold pl-3 text-ink">{comparison.note}</p>
    </div>
  );
}
