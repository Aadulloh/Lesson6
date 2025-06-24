import { useState } from 'react';
import './App.css';
import Product from './components/Product';
import Modal from './components/Modal';

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editId, setEditId] = useState(null);

  function handleDelete(idToDelete) {
    const updatedProducts = products.filter(item => item.id !== idToDelete);
    setProducts(updatedProducts);
  }

  function openEditModal(product) {
    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
    setOpenModal(true);
  }

  function addOrEditProduct(e) {
    e.preventDefault();

    const updatedProduct = {
      id: editId ?? Date.now(),
      name,
      price,
      quantity,
    };

    if (editId) {
      setProducts(prev =>
        prev.map(p => (p.id === editId ? updatedProduct : p))
      );
    } else {
      setProducts(prev => [...prev, updatedProduct]);
    }

    setName("");
    setPrice("");
    setQuantity("");
    setEditId(null);
    setOpenModal(false);
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mahsulotlar</h2>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setEditId(null);
          setName("");
          setPrice("");
          setQuantity("");
          setOpenModal(true);
        }}
      >
        Mahsulot qo'shish
      </button>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <form onSubmit={addOrEditProduct}>
          <label className="block mb-1">Mahsulot nomi:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder='Product Name'
            value={name}
            required
            className="w-full mb-3 p-2 border rounded"
          />

          <label className="block mb-1">Narxi:</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder='Product Price'
            value={price}
            required
            className="w-full mb-3 p-2 border rounded"
          />

          <label className="block mb-1">Soni:</label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="text"
            placeholder='Product Quantity'
            value={quantity}
            required
            className="w-full mb-3 p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            {editId ? "Saqlash" : "Qo'shish"}
          </button>
        </form>
      </Modal>

      <Product
        products={products}
        onDelete={handleDelete}
        onEdit={openEditModal}
      />
    </div>
  );
}

export default App;
