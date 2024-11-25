import React,{useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  
  const defaultFormData = {
    text: "",
    category: "Code"
  }
  const [formData, setFormData] = useState(defaultFormData)
  
  function handleFormChange(event,key){
    setFormData(prev => {
      return {
        ...prev,
        [key]: event.target.value
      }
    })
  }

  function handleFormSubmit(event){
    event.preventDefault()
    onTaskFormSubmit(formData)
    setFormData(defaultFormData)
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input onChange={(event)=>handleFormChange(event,'text')} value={formData.text} type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" onChange={(event) => handleFormChange(event,'category')} value={formData.category}>
          {categories.map(category => {
            return category !== "All" ? <option key={category} value={category}>{category}</option> : ""
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
