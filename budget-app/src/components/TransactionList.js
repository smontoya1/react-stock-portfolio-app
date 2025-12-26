import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onDeleteTransaction, onUpdateTransaction }) {
  if (transactions.length === 0) return <p>No transactions found.</p>;

  return (
    <table width="75%" border="1" cellPadding="8" style={{ margin: "0 auto" }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((txn) => (
          <TransactionItem
            key={txn.id}
            transaction={txn}
            onDeleteTransaction={onDeleteTransaction}
            onUpdateTransaction={onUpdateTransaction}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionList;
