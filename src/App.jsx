import { useState } from "react";

function App() {
  const fortunes = ["大吉 🎉", "中吉 😊", "小吉 🙂", "凶 😱"];
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const newResult = fortunes[randomIndex];
    setResult(newResult);
    setHistory([newResult, ...history]);
  };

  const appStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    margin: "10px",
    cursor: "pointer",
    borderRadius: "8px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
  };

  const resultStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "20px",
  };

  return (
    <div style={appStyle}>
      <h1>おみくじアプリ</h1>
      <button style={buttonStyle} onClick={handleClick}>おみくじを引く</button>
      <p style={resultStyle}>{result}</p>

      <h2>履歴</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
