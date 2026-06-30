import { Link } from "react-router-dom";
import type { Tab } from "../shared/types/navigation";

interface NavbarProps {
  activeTab: Tab;
}

const linkClasses = (active: boolean) =>
  "px-5 py-2 rounded border-2 border-gold inline-block " +
  (active ? "bg-gold text-ink" : "bg-emeraldDark text-parchment");

export default function Navbar({ activeTab }: NavbarProps) {
  return (
    <nav className="flex justify-center gap-3">
      <Link to="/" className={linkClasses(activeTab === "dashboard")}>
        Dashboard
      </Link>
      <Link to="/quest" className={linkClasses(activeTab === "game")}>
        Official Quest
      </Link>
    </nav>
  );
}
