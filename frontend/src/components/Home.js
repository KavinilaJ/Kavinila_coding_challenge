import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="text-center">

      {/* IMAGE */}
      <img
        src="https://tse3.mm.bing.net/th/id/OIP.nJXFMKyVCi173EfFMQFrTgHaFS?pid=Api&P=0&h=180"
        alt="Cricket"
        className="img-fluid rounded mb-4"
        style={{ height: "300px", objectFit: "cover", width: "100%" }}
      />

      {/* CARD */}
      <div className="card shadow p-4">

        <h2>🏏 Cricket Team Management System</h2>

        <p className="text-muted">
          Manage your players, teams and performance easily.
        </p>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/players")}
        >
          View Players
        </button>

      </div>

    </div>
  );
}

export default Home;