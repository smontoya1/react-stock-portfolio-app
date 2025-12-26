import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import TransactionsPage from "./components/TransactionsPage";
import AddTransactionPage from "./components/AddTransactionPage";


function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((r) => r.json())
    .then((data) => {
      setTransactions(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching transactions:", err);
      setLoading(false);
    });
  }, []);

  function handleAdd(newTxn) {
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTxn),
    })
    .then((r) => r.json())
    .then((savedTxn) => {
      console.log(savedTxn);
      setTransactions((prev) => [...prev, savedTxn]);
    })
    .catch((err) => console.error("POST error:", err));
  }

  function handleUpdate(id, updatedFields) {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    })
    .then((r) => r.json())
    .then((updatedTxn) => {
      console.log(updatedTxn);
      setTransactions((prev) =>
        prev.map((t) => (t.id === id ? updatedTxn : t))
      );
    })
    .catch((err) => console.error("PATCH error:", err));
  }

  function handleDelete(id) {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    })
    .then((res) => {
      if (!res.ok) throw new Error("DELETE failed");
      setTransactions((prev) => prev.filter((t) => t.id !== id));
    })
    .catch((err) => console.error("DELETE error:", err));
  }


  return (
    <div className="app">
      <NavBar />
      <main>
        {loading ? (
          <p>Loading…</p>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Dashboard transactions={transactions} />}
            />
            <Route
              path="/transactions"
              element={
                <TransactionsPage
                  transactions={transactions}
                  onDeleteTransaction={handleDelete}
                  onUpdateTransaction={handleUpdate}
                />
              }
            />
            <Route
              path="/new"
              element={<AddTransactionPage onAddTransaction={handleAdd} />}
            />
          </Routes>
        )}
      </main>
    </div>
  );
}


export default App;
