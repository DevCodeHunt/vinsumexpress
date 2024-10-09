import { X } from "lucide-react";
import { useCallback } from "react";

const Modals = ({ title, onClose, children, isOpen }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center px-4 z-[1000] ">
      <div className="max-w-xl w-full bg-white rounded-xl p-4 drop-shadow-md mx-auto relative">
        <div className="flex items-center gap-4 justify-between">
          <h1 className="text-xl font-bold">{title}</h1>
          <button
            type="submit"
            onClick={handleClose}
            className="border border-neutral-400 p-1 rounded-md flex items-center justify-center text-black"
          >
            <X size={18} />
          </button>
        </div>
        <div className="py-4">{children}</div>
      </div>
    </div>
  );
};

export default Modals;
