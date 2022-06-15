import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
// reactのコンポーネントを作成したときは
// reactのコンポーネントであることを分かりやすくするため
// jsxにするのがオススメ
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <button onClick={onClickCountUp}>ボタン</button>
      <p>{num}</p>
    </>
  );
};

export default App;
