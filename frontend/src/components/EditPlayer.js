import React, { useEffect, useState } from "react";
import { getPlayer, updatePlayer } from "../services/playerService";
import { useNavigate, useParams } from "react-router-dom";

function EditPlayer() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  useEffect(() => {
    loadPlayer();
  }, []);

  const loadPlayer = async () => {
    const res = await getPlayer(id);
    setPlayer(res.data);
  };

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    try {
      await updatePlayer(id, player);
      setSuccess("Updated successfully ✅");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      if (err.response && typeof err.response.data === "object") {
        setErrors(err.response.data);
      }
    }
  };

  return (
    <div>
      <h3>Edit Player</h3>

      {success && <p style={{color:"green"}}>{success}</p>}

      <form onSubmit={handleSubmit}>

        <input className={`form-control mb-1 ${errors.playerName ? "is-invalid" : ""}`}
          name="playerName"
          value={player.playerName || ""}
          onChange={handleChange}
        />

        <input className={`form-control mb-1 ${errors.jerseyNumber ? "is-invalid" : ""}`}
          name="jerseyNumber"
          value={player.jerseyNumber || ""}
          onChange={handleChange}
        />

        <input className={`form-control mb-1 ${errors.role ? "is-invalid" : ""}`}
          name="role"
          value={player.role || ""}
          onChange={handleChange}
        />

        <button className="btn btn-success">Update</button>

      </form>
    </div>
  );
}

export default EditPlayer;