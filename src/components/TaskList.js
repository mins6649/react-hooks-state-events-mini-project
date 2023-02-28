import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks, newList}) {

  const renderTaskList = newList.map((task, index) =>{
    return <Task key={index} text={task.text} category={task.category} handleDelete={handleDelete}/>
  })

  function handleDelete(text){
    setTasks(tasks.filter((task)=> task.text !== text))
    //SETTASK overrites TASKS!!!!!
  }

  return (
    <div className="tasks">
      {renderTaskList}
    </div>
  );
}

export default TaskList;
