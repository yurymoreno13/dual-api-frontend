import { useState } from "react";
import { getSurprise } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [surprise, setSurprise] = useState(null);
  const [error, setError] = useState("");

  const handleClick = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getSurprise();
      setSurprise(data);
    } catch {
      setError("No fue posible obtener la sorpresa.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Proyecto Doble API</h1>
      <p>Consume tu backend que combina dos APIs externas.</p>

      <button onClick={handleClick} disabled={loading}>
        {loading ? "Cargando..." : "Obtener sorpresa 🎁"}
      </button>

      {error && <p>{error}</p>}

      {surprise && (
        <div className="card">
          <h3>“{surprise.quote}”</h3>
          <p>- {surprise.author}</p>
          <img src={surprise.dogImage} width="300" />
        </div>
      )}
    </div>
  );
}

export default App;