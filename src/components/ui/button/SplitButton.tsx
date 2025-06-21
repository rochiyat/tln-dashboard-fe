import { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";

const SplitButton = ({
    handleView,
    handleEdit,
    handleDelete,
}: {
    handleView: () => void,
    handleEdit: () => void,
    handleDelete: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const actions = [
    { label: "View", icon: FiEye, onClick: handleView },
    { label: "Edit", icon: FiEdit, onClick: handleEdit },
    { label: "Delete", icon: FiTrash2, onClick: handleDelete },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-flex shadow-sm">
      <button
        onClick={handleView}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-l"
      >
        Action
      </button>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-2 bg-blue-600 hover:bg-blue-500 text-white rounded-r"
        aria-expanded={isOpen}
      >
        <HiChevronDown
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-40 bg-white rounded shadow ring-1 ring-black/10 top-full right-0">
          {actions.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <item.icon className="mr-2" />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SplitButton;
