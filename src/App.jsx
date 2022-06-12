import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";
// reactのコンポーネントを作成したときは
// reactのコンポーネントであることを分かりやすくするため
// jsxにするのがオススメ
const App = () => {
  const onChickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <button onClick={onChickButton}>ボタン</button>
    </>
  );
};

export default App;
