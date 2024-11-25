import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  //console.log(categories);
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button key={category} onClick={()=>onSelectCategory(category)} className={selectedCategory === category ? "selected" : ""}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
