import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center h-60">
        <button
          className="px-6 py-3 text-purple-100 bg-purple-600 rounded-md"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
      </div>
    </>
  );
}
