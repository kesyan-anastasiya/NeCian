const React = require("react");

function FilterHouse() {
  return (
    <form className="FormFilter">
      <select className="FilterHouse">
        <option headers>Выберите категорию</option>
        {categories.map((category) => (
          <option name = {`${category.id}`} value={category.id}>{category.name}</option>
        ))}
      </select>
      <button>Найти</button>
    </form>
  );
}

module.exports = FilterHouse;