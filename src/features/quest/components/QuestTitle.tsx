import type { TrialLevel } from "../types";

interface QuestTitleProps {
  level: TrialLevel;
}

export default function QuestTitle({ level }: QuestTitleProps) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold text-emeraldDark mb-1">{level.title}</h2>
      <p className="text-ink mb-4">{level.description}</p>
      <pre className="bg-ink text-parchment text-sm whitespace-pre-wrap font-mono p-4 rounded mb-4">
        {level.brokenCode}
      </pre>
      <p className="font-semibold text-ink">{level.question}</p>
    </div>
  );
}
