import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks,setTasks] = useState(TASKS)
  const [selectedCategory,setSelectedCategory] = useState("All")
  
  const filteredTasks = tasks.filter(task => {
    if(selectedCategory === "All") return true
    return selectedCategory === task.category
  })

  function handleSelectedCategory(category){
    setSelectedCategory(category)
  }

  function handleTaskAdd(taskObj){
    setTasks([...tasks,taskObj])
  }

  function handleTaskDelete(taskName){
    const updatedTasks = tasks.filter(task => task.text !== taskName)
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={handleSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskAdd} />
      <TaskList tasks={filteredTasks} onDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
