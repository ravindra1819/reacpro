import QuantityCounter from './QuantityCounter';
import ToggleButton from '../atoms/ToggleButton';
import Counter from '../atoms/Counter';

const ProductCard = ({ name, price, inStock, image }) => {
  return (
    <div className="border rounded-lg shadow p-4 w-full max-w-xs bg-white">
      {/* <img src={image} alt={name} className="h-40 w-full object-cover rounded mb-3" /> */}
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-gray-700 mb-1">Price: ₹{price}</p>
      <p className={inStock ? "text-green-600" : "text-red-600"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <QuantityCounter />

      <ToggleButton label="More Info">
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </ToggleButton>

      <Counter />
    </div>
  );
};

export default ProductCard;