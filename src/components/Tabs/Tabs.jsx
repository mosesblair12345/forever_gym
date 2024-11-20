import Categories from "../Categories/Categories";
import { tabs } from "../../constants/tabsItems";
import { useState } from "react";
import { motion } from "framer-motion";

const Tabs = () => {
  const [menuItems, setMenuItems] = useState(tabs);

  const allCategories = [
    "all",
    ...new Set(
      tabs.map((item) => {
        return item.category;
      })
    ),
  ];

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(tabs);
      return;
    }
    const newItems = tabs.filter((tab) => {
      return tab.category === category;
    });
    setMenuItems(newItems);
  };

  return (
    <div className="container my-12 md:my-16">
      <div className="">
        {/*Tabs button section*/}
        <div>
          <Categories categories={allCategories} filterItems={filterItems} />
        </div>
        {/*Tabs cards section*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map(({ id, image, info, category, title }) => {
            return (
              <motion.div
                className="p-4 rounded border shadow-sm"
                key={id}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <img
                  className="photo h-[240px] w-full object-cover"
                  src={image}
                  alt={info}
                />
                <p className="text-xl font-semibold">{title}</p>
                <p className="text-gray-500">{category}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
