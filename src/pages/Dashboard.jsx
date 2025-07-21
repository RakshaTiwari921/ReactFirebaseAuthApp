import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading Dashboard...</p>;

  if (!user) {
    return <p style={{ textAlign: 'center' }}>User not found. Please login.</p>;
  }

  return (
    <div className="page-wrapper">
      <img
        className="avatar"
        src={`https://i.pravatar.cc/150?u=${user.email}`}
        alt="Avatar"
      />
      <h2>Welcome to Dashboard</h2>
      <p>
        Logged in as: <strong>{user.email}</strong>
      </p>
    </div>
  );
}

export default Dashboard;
