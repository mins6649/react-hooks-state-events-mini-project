import React from "react";

function CategoryFilter({categories, handleCategoryChange}) {

  function handleClick(category){
    handleCategoryChange(category)
  }

  const renderCategoryList = categories.map ((category, index)=>{
    return <button key={index} value={category} onClick={()=>handleClick(category)}> {category} </button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategoryList}
    </div>
  );
}

export default CategoryFilter;
