import logo from "../../public/assets/images.png";

const Product = ({ products, onDelete, onEdit }) => {
  if (!products.length)
    return <p className="mt-6 text-gray-600">Hozircha mahsulot yo'q.</p>;

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      {products.map((value) => (
        <div
          key={value.id}
          className="w-64 bg-white border border-gray-200 rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300"
        >
          <img
            src={logo}
            alt={value.name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-bold text-gray-800">{value.name}</h2>
          <p className="text-gray-700">Narxi: ${value.price}</p>
          <p className="text-gray-700">Soni: {value.quantity}</p>

          <div className="mt-4 space-y-2">
            <button
              onClick={() => onEdit(value)}
              className="w-full bg-blue-500 text-white rounded py-2"
            >
              Tahrirlash
            </button>
            <button
              onClick={() => onDelete(value.id)}
              className="w-full bg-red-400 text-white rounded py-2"
            >
              O'chirish
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
