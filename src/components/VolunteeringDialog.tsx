import { useEffect, useId, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import TimelineList from "./TimelineList";
import {
  volunteeringHeading,
  volunteeringRoles,
} from "./data/VolunteeringData";

interface Props {
  open: boolean;
  onClose: () => void;
}

/**
 * Native <dialog> opened with showModal(), which supplies focus trapping,
 * Escape-to-close and focus restored to the trigger without any extra code.
 */
export default function VolunteeringDialog({ open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  // showModal() does not reliably stop the page behind from scrolling, so lock
  // it the same way NavBar locks it for the mobile drawer.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const previous = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = previous;
    };
  }, [open]);

  const Icon = volunteeringHeading.icon;

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      onCancel={onClose}
      // A click landing on the dialog element itself is a backdrop click; clicks
      // inside the panel hit its own subtree instead.
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
      className="modal-dialog m-auto w-[calc(100vw-2rem)] max-w-3xl rounded-2xl p-0"
      style={{
        backgroundColor: "var(--bg-primary)",
        border: "1px solid var(--card-border)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-h-[85vh] overflow-y-auto p-5 md:p-7">
        <div className="mb-6 flex items-start justify-between gap-4">
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

          <button
            type="button"
            onClick={onClose}
            aria-label="Close volunteering details"
            className="shrink-0 rounded-lg p-2 transition hover:bg-[var(--card-hover)]"
            style={{ color: "var(--text-secondary)" }}
          >
            <FaXmark aria-hidden="true" size={18} />
          </button>
        </div>

        <TimelineList
          items={volunteeringRoles}
          defaultOpen="none"
          stagger={false}
          idPrefix="volunteering"
        />
      </div>
    </dialog>
  );
}
