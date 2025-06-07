import { useEffect, useState } from 'react';
import axios from 'axios';

const token = localStorage.getItem('token');

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ title: '', amount: '', category: '' });

  useEffect(() => {
    axios.get('/api/expenses', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setExpenses(res.data));
  }, []);

  const addExpense = async (e) => {
    e.preventDefault();
    await axios.post('/api/expenses', form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    location.reload();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Dashboard</h1>
      <form onSubmit={addExpense} className="mb-4">
        <input className="border p-1 mr-2" placeholder="Title" value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className="border p-1 mr-2" placeholder="Amount" value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })} />
        <input className="border p-1 mr-2" placeholder="Category" value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <button className="bg-green-600 text-white px-2 py-1">Add</button>
      </form>
      <ul>
        {expenses.map(exp => (
          <li key={exp._id} className="border-b py-2">{exp.title} - ₹{exp.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
