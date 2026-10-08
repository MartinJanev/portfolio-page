import { useId } from "react";
import Modal from "./ui/Modal";
import TimelineList from "./TimelineList";
import {
  volunteeringHeading,
  volunteeringRoles,
} from "./data/VolunteeringData";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function VolunteeringDialog({ open, onClose }: Props) {
  const titleId = useId();
  const Icon = volunteeringHeading.icon;

  return (
    <Modal
      open={open}
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
          <div>
            <h2
              id={titleId}
              className="text-xl font-bold md:text-2xl"
              style={{ color: "var(--text-primary)" }}
            >
              {volunteeringHeading.title}
            </h2>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              {volunteeringRoles.length} commitments
            </p>
          </div>
        </div>
      }
    >
      <TimelineList
        items={volunteeringRoles}
        defaultOpen="none"
        stagger={false}
        idPrefix="volunteering"
      />
    </Modal>
  );
}
