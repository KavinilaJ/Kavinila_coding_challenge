import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PlayerList from "./components/PlayerList";
import AddPlayer from "./components/AddPlayer";
import EditPlayer from "./components/EditPlayer";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>

      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark px-3">
        <h4 className="text-white">🏏 Cricket Management</h4>

        <div>
          <Link to="/" className="btn btn-outline-light me-2">Home</Link>
          <Link to="/players" className="btn btn-outline-light">Players</Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<PlayerList />} />
          <Route path="/add" element={<AddPlayer />} />
          <Route path="/edit/:id" element={<EditPlayer />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;