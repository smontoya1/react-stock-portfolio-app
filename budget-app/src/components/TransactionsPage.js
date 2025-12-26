import { useState } from "react";
import TransactionList from "./TransactionList";

function TransactionsPage({
  transactions,
  onDeleteTransaction,
  onUpdateTransaction,
}) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", ...new Set(transactions.map((t) => t.Category))];

  const filtered = transactions.filter((t) => {
    const matchesSearch =
      t.Name.toLowerCase().includes(search.toLowerCase()) ||
      t.Description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || t.Category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1>Transactions</h1>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <TransactionList
        transactions={filtered}
        onDeleteTransaction={onDeleteTransaction}
        onUpdateTransaction={onUpdateTransaction}
      />
    </div>
  );
}

export default TransactionsPage;
