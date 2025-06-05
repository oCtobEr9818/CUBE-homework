/** Read the code below, please figure out why after “Switch Person” button clicked, the
tasks state doesn’t update correctly, and how to make it update as we expected **/

import { useState } from 'react';

export default function TaskManager() {
  const [isPersonAlice, setIsPersonAlice] = useState(true);
  const [tasksMap, setTasksMap] = useState({ Alice: 0, Bob: 0 });
  
  const handleTaskComplete = (name) => {
    setTasksMap(prev => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  return (
    <div>
      {isPersonAlice ? (
        <TaskCounter
          name="Alice"
          tasks={tasksMap.Alice}
          onComplete={handleTaskComplete}
        />
      ) : (
        <TaskCounter
          name="Bob"
          tasks={tasksMap.Bob}
          onComplete={handleTaskComplete}
        />
      )}
      <button onClick={() => {
        setIsPersonAlice(!isPersonAlice);
      }}>
        Switch Person
      </button>
    </div>
  );
}

function TaskCounter({ name, tasks, onComplete }) {
  return (
    <>
      <h1>{name}'s tasks: {tasks}</h1>
      <button onClick={() => onComplete(name)}>
        Complete Task
      </button>
    </>
  );
}
