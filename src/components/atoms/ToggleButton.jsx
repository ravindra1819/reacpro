import { useState } from "react";

const ToggleButton = ({ label = "Toggle Info", children }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-3">
      <button
        onClick={() => setShow(!show)}
        className="text-sm text-blue-600 hover:underline"
      >
        {label}
      </button>
      {show && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default ToggleButton;