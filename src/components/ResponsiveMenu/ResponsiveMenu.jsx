import { NavbarMenu } from "../../constants/navMenu";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const ResponsiveMenu = () => {
  return (
    <motion.div
      className="absolute z-20 top-15 left-0 w-full h-screen"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
    >
      <div className="text-xl font-semibold uppercase bg-primary text-white py-7 m-6 rounded-3xl">
        <ul className="flex flex-col justify-center items-center gap-6">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="text-base">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ResponsiveMenu;
