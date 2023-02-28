import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  const [name, setName] = useState("");
  const [newCategory, setNewCategory] = useState("");

  function handleCategoryChange(category){
    setCategory(category);
  }
   const newList = tasks.filter((task) => {
    if(category === "All"){
      return true;
    }
    return task.category === category
   });
  

  //FORM
  function handleName(e){
    setName(e.target.value);
    

  }
  function handleCategory(e){
    setNewCategory(e.target.value);
    
  }
  function handleSubmit(e){
    e.preventDefault();
    const newTask = {text: name, category: newCategory}
    const newTaskList = [...tasks, newTask]
    console.log(newTaskList)
    setTasks(newTaskList)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} handleSubmit={handleSubmit} handleName={handleName} handleCategory={handleCategory}/>
      <TaskList tasks={tasks} newList={newList} setTasks={setTasks}/>
    </div>
  );
}

export default App;
