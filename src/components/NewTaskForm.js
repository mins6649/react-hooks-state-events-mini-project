import React from "react";

function NewTaskForm({categories, handleSubmit, handleName, handleCategory}) {

  const categoryList = categories.map((category, index) =>{
    return <option key={index}>{category}</option>
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleName}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>
          {/* render <option> elements for each category here */}
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
