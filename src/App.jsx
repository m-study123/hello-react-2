import { useState } from "react";

function App() {
  const fortunes = ["大吉 🎉", "中吉 😊", "小吉 🙂", "凶 😱"];
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]); // 履歴用

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const newResult = fortunes[randomIndex];
    setResult(newResult);
    setHistory([newResult, ...history]); // 新しい結果を履歴に追加
  };

  return (
    <div>
      <h1>おみくじアプリ</h1>
      <button onClick={handleClick}>おみくじを引く</button>
      <p>結果: {result}</p>

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
