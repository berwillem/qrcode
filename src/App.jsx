import { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [input, setInput] = useState("");
  const [qrcode, setQrCode] = useState(null);
  const [error, setEroor] = useState(null);
  const generateqr = () => {
    if (input.length > 0) {
      setQrCode(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
      );
      setEroor(null);
    } else {
      setEroor("veuillez remplir l'input");
    }
  };

  return (
    <>
      <div className="card">
        <h1>generate code qr</h1>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <img src={qrcode} alt="" />
        {error}
        <button onClick={generateqr}>Generate</button>
      </div>
    </>
  );
}
export default App;
