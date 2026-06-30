import type { ComparisonPoint } from "../types";

interface TopicSelectorProps {
  topics: ComparisonPoint[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function TopicSelector({ topics, activeId, onSelect }: TopicSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {topics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => onSelect(topic.id)}
          className={
            "px-4 py-2 rounded-full border text-sm " +
            (topic.id === activeId
              ? "bg-emerald text-parchment border-emeraldDark"
              : "bg-parchmentDark border-gold text-ink")
          }
        >
          {topic.title}
        </button>
      ))}
    </div>
  );
}
