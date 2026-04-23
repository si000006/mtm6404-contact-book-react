import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Contact Book</h1>

        <nav>
          <NavLink to="/">Contacts</NavLink>
          <NavLink to="/new">New Contact</NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
