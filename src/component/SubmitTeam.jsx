import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import Cookies from "js-cookie";

const SubmitTeam = () => {
  const [inputCode, setInputCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4050/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ team_code: inputCode }),
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate team");
      }

      const data = await response.json();
      const token = data.token;

      if (!token) {
        throw new Error("Token not received");
      }

      Cookies.set("token", token);

      login();

      navigate("/dashboard");
    } catch (error) {
      console.error("Error authenticating team:", error);
      setError("Invalid team code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="submitTeam-container">
      <label htmlFor="teamCodeInput">Join With:</label>
      <input
        type="text"
        id="teamCodeInput"
        value={inputCode}
        onChange={handleInputChange}
        placeholder=" Enter Team Code"
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default SubmitTeam;
