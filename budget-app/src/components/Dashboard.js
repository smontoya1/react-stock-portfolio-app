function Dashboard({ transactions }) {

  const totalOutflow = transactions
    .filter((tran) => tran.Amount > 0)
    .reduce((sum, tran) => sum + tran.Amount, 0);

  const totalInflow = transactions
    .filter((tran) => tran.Amount < 0)
    .reduce((sum, tran) => sum + Math.abs(tran.Amount), 0);

  const net = totalInflow - totalOutflow;

  return (
    <div>
      <h1>Budget Summary</h1>

      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
        <div>
          <h3>Total Inflow</h3>
          <p style={{ color: "green" }}>${totalInflow.toFixed(2)}</p>
        </div>

        <div>
          <h3>Total Outflow</h3>
          <p style={{ color: "red" }}>${totalOutflow.toFixed(2)}</p>
        </div>

        <div>
          <h3>Net Cashflow</h3>
          <p style={{ color: net >= 0 ? "green" : "red" }}>
            ${net.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
