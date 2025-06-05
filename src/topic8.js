/** Read about the code below, please describe the issues and how you will be going to improve it **/

/* 
  發現的問題：
  1. 原本的 todos 是一個陣列不是物件，因此不能直接解構
  2. basePoints 是一個 state 變數，不是函式
  3. value1 完全沒有在這段程式碼中宣告或定義
  4. toggleTodo(id) 會在 render 當下就執行一次 toggle，不會等使用者點擊
  */

/* 改善如下 */
import { useState, useEffect } from "react";

export default function TodoList () {
  const [todos, setTodos] = useState([
    { id: 1, text: '學習 React', completed: false, studyPoint: 3, isSelected: false },
    { id: 2, text: '建立專案', completed: false, studyPoint: 1, isSelected: false }
  ]);
  const [sumPoints, setSumPoints] = useState(0);

  // 計算初始總累積點數
  useEffect(() => {
    const totalPoints = todos.reduce((acc, todo) => acc + todo.studyPoint, 0);
    setSumPoints(totalPoints);
  }, []);
  
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed, isSelected: !todo.isSelected } : todo
    );
    setTodos(updatedTodos);
  };
  
  const handleStudyPointsChange = (e, id) => {
    const value = parseInt(e.target.value);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, studyPoint: value };
      }
      return todo;
    });
    setTodos(updatedTodos);
    
    // 計算總累積點數
    const totalPoints = updatedTodos.reduce((acc, todo) => acc + todo.studyPoint, 0);
    setSumPoints(totalPoints);
  };
  
  return (
    <div>
      {todos.map(({id, text, completed, studyPoint, isSelected}) => (
        <div key={id}>
          <p>課程名稱: {text}</p>
          <label>學習點數: </label>
          <input 
            type="number" 
            value={studyPoint} 
            onChange={isSelected ? (e) => handleStudyPointsChange(e, id) : undefined} 
            disabled={!isSelected}
            min={0}
          />
          <p>總累積點數: {sumPoints}</p>
          <button onClick={() => toggleTodo(id)}>{completed ? '取消' : '篩選課程'}</button>
        </div>
      ))}
    </div>
  );
}
