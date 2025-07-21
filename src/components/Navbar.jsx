import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.info("Logged out 🏁");
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed");
      console.error("Logout error:", err);
    }
  };

  return (
    <nav className="top-bar">
      <h2>🔐 Firebase Auth App</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={handleLogout} className="add-btn">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
