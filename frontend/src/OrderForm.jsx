import React, { useState } from 'react';

export default function OrderForm() {
  const [form, setForm] = useState({ vehicle: '', weight: '', from: '', to: '', contact: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2)); // замінити на реальну відправку
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-xl space-y-4">
        <h2 className="text-xl font-bold">Оформлення заявки</h2>
        <select name="vehicle" onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">Оберіть авто</option>
          <option value="вантажівка">Вантажівка</option>
          <option value="мікроавтобус">Мікроавтобус</option>
        </select>
        <input type="text" name="weight" placeholder="Вага (кг)" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="from" placeholder="Звідки" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="to" placeholder="Куди" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="contact" placeholder="Контакт (телефон, імʼя)" onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Надіслати</button>
      </form>
    </div>
  );
}
