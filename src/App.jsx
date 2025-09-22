import { useState } from "react";

function App() {
  const fortunes = ["大吉 🎉", "中吉 😊", "小吉 🙂", "凶 😱"];
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [buttonPressed, setButtonPressed] = useState(false); // ボタン押下状態

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const newResult = fortunes[randomIndex];
    setResult(newResult);
    setHistory([newResult, ...history]);

    // ボタン押下アニメーション
    setButtonPressed(true);
    setTimeout(() => setButtonPressed(false), 200); // 0.2秒後に戻す
  };

  const appStyle = { textAlign: "center", fontFamily: "Arial, sans-serif", marginTop: "50px" };
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    margin: "10px",
    cursor: "pointer",
    borderRadius: "8px",
    backgroundColor: buttonPressed ? "#388e3c" : "#4caf50", // 押したとき色を変える
    color: "white",
    border: "none",
    transition: "background-color 0.2s", // 色の変化にアニメーション
  };
  const resultStyle = { fontSize: "24px", fontWeight: "bold", marginTop: "20px" };

  const getColor = (fortune) => {
    switch (fortune) {
      case "大吉 🎉": return "red";
      case "中吉 😊": return "orange";
      case "小吉 🙂": return "blue";
      case "凶 😱": return "gray";
      default: return "black";
    }
  };

  return (
    <div style={appStyle}>
      <h1>おみくじアプリ</h1>
      <button style={buttonStyle} onClick={handleClick}>おみくじを引く</button>
      <p style={resultStyle}>{result}</p>

      <h2>履歴</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {history.map((item, index) => (
          <li key={index} style={{ color: getColor(item), fontSize: "18px", margin: "5px 0" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
