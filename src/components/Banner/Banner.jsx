import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Banner = ({ bannerImg, subtitle, title }) => {
  return (
    <div className="container">
      <div className="bg-[#f9f9f9] gap-5 grid md:grid-cols-2 grid-cols-1 space-y-6 md:space-y-0 py-14">
        {/* Bannner Image Section*/}
        <div className="flex justify-center md:block items-center">
          <motion.img
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.5,
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            src={bannerImg}
            alt="Banner"
            className="w-[300px] md:max-w-[400px] xl:min-w-[490px] h-full object-cover"
          />
        </div>
        {/* Bannner Text Section*/}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px] p-5 md:p-0">
          <motion.h1
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            className="text-2xl lg:text-4xl font-bold capitalize font-playFair"
            viewport={{ once: true }}
          >
            {title}
          </motion.h1>
          <motion.p
            variants={SlideUp(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={SlideUp(1.2)}
            initial="hidden"
            whileInView="visible"
            className="flex justify-center md:justify-start"
            viewport={{ once: true }}
          >
            <button className="primary-btn">Explore More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  bannerImg: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;
