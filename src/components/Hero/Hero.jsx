import { FaPlay } from "react-icons/fa";
import dumbellImg from "../../assets/dumbell.png";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/*Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0">
            <div className="text-center md:text-left space-y-6">
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-4xl lg:text-6xl capitalize font-bold leading-relaxed xl:leading-normal font-playFair"
              >
                Gym gives you the perfect{" "}
                <ReactTyped
                  className="text-primary"
                  strings={["health", "strength", "fitness", "motivation"]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </motion.h1>
              <motion.p
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:max-w-[500px]"
              >
                {" "}
                It is a long established fact that a reader will be by readable
                content of a page when are the best product.
              </motion.p>
              {/*Button Section*/}
              <motion.div
                variants={SlideRight(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center gap-8 md:justify-start !mt-4"
              >
                <button className="primary-btn flex items-center gap-2">
                  Order Now
                </button>
                <button className="flex justify-center items-center gap-2">
                  <FaPlay /> Watch Now
                </button>
              </motion.div>
            </div>
          </div>
          {/*Hero Image */}
          <div className="flex justify-center items-center">
            <motion.img
              variants={{
                hidden: {
                  opacity: 0,
                  x: -100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  rotate: [0, 15, -15, 0],
                  transition: {
                    x: { type: "spring", stiffness: 50, damping: 10 },
                    rotate: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 30,
                      ease: "easeInOut",
                    },
                    delay: 1.2,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              src={dumbellImg}
              alt="dumbellimgae"
              className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
