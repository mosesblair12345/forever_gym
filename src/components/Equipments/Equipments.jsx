import { equipmentsMenu } from "../../constants/equipmentsMenu";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
const Equipments = () => {
  return (
    <div className="container py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playFair">
        <div className="space-y-4 p-6">
          <h1 className="text-3xl md:text-4xl font-bold">What we offer you</h1>
          <p className="text-gray-500">
            It is a long established fact that a reader readable.
          </p>
        </div>
        {equipmentsMenu.map((item) => (
          <motion.div
            variants={SlideLeft(item.delay)}
            initial="hidden"
            whileInView="visible"
            key={item.id}
            className="space-y-4 p-6 bg-[#fbfbfb] hover:cursor-pointer hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
          >
            <div className="text-4xl">{item.icon}</div>
            <p className="text-2xl font-semibold">{item.title}</p>
            <p className="text-gray-500">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Equipments;
