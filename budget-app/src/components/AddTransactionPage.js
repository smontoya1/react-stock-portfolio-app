import { useState } from "react";

function AddTransactionPage({ onAddTransaction }) {
  const [form, setForm] = useState({
    Date: "",
    Name: "",
    Description: "",
    Category: "",
    Amount: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "Amount" ? Number(value) : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTxn = {
      ...form
    };

    onAddTransaction(newTxn);

    setForm({
      Date: "",
      Name: "",
      Description: "",
      Category: "",
      Amount: "",
    });
  }

  return (
    <div>
      <h1>Add Transaction</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "50%", margin: "0 auto",}}
      >
        <input
          name="Date"
          placeholder="Date (MM/DD/YY)"
          value={form.Date}
          onChange={handleChange}
        />
        <input
          name="Name"
          placeholder="Name"
          value={form.Name}
          onChange={handleChange}
        />
        <input
          name="Description"
          placeholder="Description"
          value={form.Description}
          onChange={handleChange}
        />
        <input
          name="Category"
          placeholder="Category"
          value={form.Category}
          onChange={handleChange}
        />
        <input
          name="Amount"
          type="number"
          placeholder="Amount"
          value={form.Amount}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTransactionPage;
