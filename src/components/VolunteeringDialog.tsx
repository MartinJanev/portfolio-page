import { useId } from "react";
import Modal from "./ui/Modal";
import TimelineList from "./TimelineList";
import { volunteeringHeading } from "./data/VolunteeringData";
import type { ExperienceItem } from "../types/content";

interface Props {
  /** The role to show; null keeps the dialog closed. */
  role: ExperienceItem | null;
  onClose: () => void;
}

export default function VolunteeringDialog({ role, onClose }: Props) {
  const titleId = useId();
  const Icon = volunteeringHeading.icon;

  return (
    <Modal
      open={role !== null}
      onClose={onClose}
      titleId={titleId}
      closeLabel="Close volunteering details"
      header={
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <Icon style={{ color: "var(--kind-community)" }} size={18} />
          </span>
          <h2
            id={titleId}
            className="text-xl font-bold md:text-2xl"
            style={{ color: "var(--text-primary)" }}
          >
            {volunteeringHeading.title}
          </h2>
        </div>
      }
    >
      {role && (
        // Keyed so switching roles remounts the list and re-applies defaultOpen.

        <TimelineList
          key={`${role.title}-${role.start}`}
          items={[role]}
          defaultOpen="first"
          stagger={false}
          markers={false}
          idPrefix="volunteering"
        />
      )}
    </Modal>
  );
}
