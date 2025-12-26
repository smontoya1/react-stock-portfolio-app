import { useState } from "react";

function TransactionItem({ transaction, onDeleteTransaction, onUpdateTransaction }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({
    Name: transaction.Name,
    Description: transaction.Description,
    Category: transaction.Category,
    Amount: transaction.Amount,
  });

  function handleChange(e) {
    setEditFields({
      ...editFields,
      [e.target.name]:
        e.target.name === "Amount" ? Number(e.target.value) : e.target.value,
    });
  }

  function saveEdit() {
    onUpdateTransaction(transaction.id, editFields);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <tr>
        <td>{transaction.Date}</td>
        <td>
          <input name="Name" value={editFields.Name} onChange={handleChange} />
        </td>
        <td>
          <input
            name="Description"
            value={editFields.Description}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            name="Category"
            value={editFields.Category}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            name="Amount"
            type="number"
            value={editFields.Amount}
            onChange={handleChange}
          />
        </td>
        <td>
          <button onClick={saveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{transaction.Date}</td>
      <td>{transaction.Name}</td>
      <td>{transaction.Description}</td>
      <td>{transaction.Category}</td>
      <td style={{ color: transaction.Amount < 0 ? "green" : "red" }}>
        ${transaction.Amount.toFixed(2)}
      </td>
      <td>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => onDeleteTransaction(transaction.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TransactionItem;
