import {
  useEffect,
  useRef,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { FaXmark } from "react-icons/fa6";

interface Props extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  /** id of the heading inside `header`, used as the dialog's accessible name. */
  titleId: string;
  header: ReactNode;
  closeLabel: string;
  /** Inner padding; override for roomier panels. */
  padding?: string;
}

/**
 * Native <dialog> opened with showModal(), which supplies focus trapping,
 * Escape-to-close and focus restored to the trigger without any extra code.
 */
export default function Modal({
  open,
  onClose,
  titleId,
  header,
  closeLabel,
  padding = "p-5 md:p-7",
  children,
}: Props) {
  const ref = useRef<HTMLDialogElement | null>(null);

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
      <div className={`max-h-[85vh] overflow-y-auto ${padding}`}>
        <div className="mb-6 flex items-start justify-between gap-4">
          {header}
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="shrink-0 rounded-lg p-2 transition hover:bg-[var(--card-hover)]"
            style={{ color: "var(--text-secondary)" }}
          >
            <FaXmark aria-hidden="true" size={18} />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}
