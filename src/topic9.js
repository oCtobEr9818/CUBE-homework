/* eslint-disable react/jsx-no-comment-textnodes */
/** Read about the code below, suggest how to improve the code **/

/* 
  移除 ParentComponent 內的 GrandchildComponent，避免重複的組件渲染
  如果需要傳遞 props 到更多層組件，可以使用 React 的 useContext 來管理全局狀態
*/

import { useState } from "react";

export default function ParentComponent() {
  const [name, setName] = useState("Naro");
  const [age, setAge] = useState(12);

  return (
    <div>
      <ChildComponent name={name} age={age} />
    </div>
  );
}

function ChildComponent({ name, age }) {
  return (
    <div>
      <GrandchildComponent name={name} age={age} />
    </div>
  );
}

function GrandchildComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
