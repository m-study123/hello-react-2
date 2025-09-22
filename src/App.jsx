function App() {
  // ボタン用の関数（仮の例）
  const handleIncrement = () => console.log("増やす");
  const handleDecrement = () => console.log("減らす");
  const handleReset = () => console.log("リセット");

  return (
    <div>
      <h1>こんにちは React!</h1>
      <button onClick={handleIncrement}>増やす</button>
      <button onClick={handleDecrement}>減らす</button>
      <button onClick={handleReset}>リセット</button>
    </div>
  );
}

export default App;

