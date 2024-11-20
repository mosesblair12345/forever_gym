import PropTypes from "prop-types";
import { useState } from "react";

const Categories = ({ categories, filterItems }) => {
    const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div className="flex flex-wrap gap-4 p-6 ">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`capitalize py-2 px-4 rounded ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              filterItems(category);
              setActiveCategory(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  filterItems: PropTypes.func.isRequired,
};

export default Categories;
