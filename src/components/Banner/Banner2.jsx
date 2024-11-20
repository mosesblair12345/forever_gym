import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const Banner2 = () => {
  return (
    <div className="container my-14">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
        {/* Brand info*/}
        <div className="flex flex-col justify-center text-center space-y-8 lg:px-44 px-5">
          <motion.h1
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="uppercase text-2xl md:text-4xl font-bold"
          >
            Get 20% discount on your first order, are you ready to buy
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            className="text-gray-500 md:text-xl text-sm"
          >
            We will make sure you get the right and the best quality products
            for your workouts
          </motion.p>
          <motion.div
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col sm:flex-row justify-center gap-6 mx-auto"
          >
            <button className="primary-btn">Learn More</button>
            <button
              className="border-2 border-primary rounded-lg font-bold hover:!scale-110 
            duration-300 py-3 px-6"
            >
              Stay In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
