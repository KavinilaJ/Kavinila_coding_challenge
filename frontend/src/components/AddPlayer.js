import React, { useState } from "react";
import { createPlayer } from "../services/playerService";
import { useNavigate } from "react-router-dom";

function AddPlayer() {

  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    playerId: "",
    playerName: "",
    jerseyNumber: "",
    role: "",
    totalMatches: "",
    teamName: "",
    countryState: "",
    description: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    try {
      await createPlayer(player);
      setSuccess("Player created successfully ✅");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {

      if (err.response) {

        // Validation errors (DTO)
        if (typeof err.response.data === "object") {
          setErrors(err.response.data);
        }

        // Duplicate ID error
        else {
          setErrors({ playerId: err.response.data });
        }

      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div>
      <h3>Add Player</h3>

      {/* SUCCESS MESSAGE */}
      {success && <p style={{color:"green"}}>{success}</p>}

      <form onSubmit={handleSubmit}>

        {/* ID */}
        <input className={`form-control mb-1 ${errors.playerId ? "is-invalid" : ""}`}
          name="playerId"
          placeholder="Player ID"
          onChange={handleChange}
        />
        {errors.playerId && <small style={{color:"red"}}>{errors.playerId}</small>}

        {/* NAME */}
        <input className={`form-control mb-1 ${errors.playerName ? "is-invalid" : ""}`}
          name="playerName"
          placeholder="Player Name"
          onChange={handleChange}
        />
        {errors.playerName && <small style={{color:"red"}}>{errors.playerName}</small>}

        {/* JERSEY */}
        <input className={`form-control mb-1 ${errors.jerseyNumber ? "is-invalid" : ""}`}
          type="number"
          name="jerseyNumber"
          placeholder="Jersey Number"
          onChange={handleChange}
        />
        {errors.jerseyNumber && <small style={{color:"red"}}>{errors.jerseyNumber}</small>}

        {/* ROLE */}
        <select className={`form-control mb-1 ${errors.role ? "is-invalid" : ""}`}
          name="role"
          onChange={handleChange}>
          <option value="">Select Role</option>
          <option>Batsman</option>
          <option>Bowler</option>
          <option>Keeper</option>
          <option>All Rounder</option>
        </select>
        {errors.role && <small style={{color:"red"}}>{errors.role}</small>}

        {/* MATCHES */}
        <input className={`form-control mb-1 ${errors.totalMatches ? "is-invalid" : ""}`}
          type="number"
          name="totalMatches"
          placeholder="Total Matches"
          onChange={handleChange}
        />
        {errors.totalMatches && <small style={{color:"red"}}>{errors.totalMatches}</small>}

        {/* TEAM */}
        <input className={`form-control mb-1 ${errors.teamName ? "is-invalid" : ""}`}
          name="teamName"
          placeholder="Team Name"
          onChange={handleChange}
        />
        {errors.teamName && <small style={{color:"red"}}>{errors.teamName}</small>}

        {/* COUNTRY */}
        <input className={`form-control mb-1 ${errors.countryState ? "is-invalid" : ""}`}
          name="countryState"
          placeholder="Country/State"
          onChange={handleChange}
        />
        {errors.countryState && <small style={{color:"red"}}>{errors.countryState}</small>}

        <textarea className="form-control mb-2"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <button className="btn btn-success">Submit</button>

      </form>
    </div>
  );
}

export default AddPlayer;