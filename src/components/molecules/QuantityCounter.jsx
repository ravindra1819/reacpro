import { useState } from "react";

const QuantityCounter = () => {
  const [qty, setQty] = useState(1);

  const increment = () => setQty((q) => q + 1);
  const decrement = () => setQty((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex items-center gap-2 mt-3">
      <button onClick={decrement} className="px-2 bg-gray-200 rounded">−</button>
      <span>{qty}</span>
      <button onClick={increment} className="px-2 bg-gray-200 rounded">+</button>
    </div>
  );
};

export default QuantityCounter;
