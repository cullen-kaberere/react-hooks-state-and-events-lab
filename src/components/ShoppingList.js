import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory]=useState('All');

  const handleSelection = (event) => {
    setSelectedCategory(event.target.value);
    };
    const filteredCategory = items.filter(item => 
      selectedCategory === 'All' ? true : item.category === selectedCategory);
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;