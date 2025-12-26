import { NavLink } from "react-router-dom";

function NavBar() {
    const linkStyle = {
    marginRight: "1rem",
    textDecoration: "none",
  };

  return (
    <nav style={{ marginBottom: "1.5rem" }}>
      <NavLink to="/" style={linkStyle}>
        Dashboard
      </NavLink>
      <NavLink to="/transactions" style={linkStyle}>
        Transactions
      </NavLink>
      <NavLink to="/new" style={linkStyle}>
        Add Transaction
      </NavLink>
    </nav>
  );
}

export default NavBar;
