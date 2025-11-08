import ProductCard from "../molecules/ProductCard";

const FeaturedProductsSection = ({ products }) => {
  return (
    <section className="py-8 px-6">
      <h2 className="text-2xl font-semibold mb-6">🔥 Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {
        products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))
        }

      </div>
    </section>
  );
};

export default FeaturedProductsSection;