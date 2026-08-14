import { useEffect } from "react";
import { X } from "lucide-react";

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, visible, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [visible, onClose, duration]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-nav-safe right-4 z-50 lg:bottom-4 animate-in fade-in slide-in-from-bottom-2 rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white shadow-lg flex items-center gap-2">
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 inline-flex text-gray-400 hover:text-white"
      >
        <X size={16} />
      </button>
    </div>
  );
}
