import { useState } from "react";

function App() {
  const fortunes = ["大吉 🎉", "中吉 😊", "小吉 🙂", "凶 😱"];
  const [result, setResult] = useState("");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setResult(fortunes[randomIndex]);
  };

  return (
    <div>
      <h1>おみくじアプリ</h1>
      <button onClick={handleClick}>おみくじを引く</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
