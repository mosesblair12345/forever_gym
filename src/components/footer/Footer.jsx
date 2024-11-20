import { footerText } from "../../constants/footer";
import {
  FaFacebookSquare,
  FaInstagram,
  FaDumbbell,
  FaLinkedin,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 dark:bg-black text-white rounded-tl-3xl rounded-tr-3xl">
      <div className="container">
        <div className="grid lg:grid-cols-4 md:gap-4 pt-5 border-t-2 border-gray-300/10">
          <div className="pt-8 px-4 space-y-4">
            <div className="text-lg md:text-xl flex items-center gap-2 font-bold uppercase hover:cursor-pointer">
              <FaDumbbell />
              <p>Forever</p>
              <p className="text-secondary">Gym</p>
            </div>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
              metus sapien. Nam suscipit sollicitudin.Lorem ipsum dolor sit
              amet.
            </p>
            <div className="flex md:w-[65%] w-[50%] my-6 justify-between">
              <SiGooglemaps size={20} className="hover:cursor-pointer" />
              <FaInstagram size={20} className="hover:cursor-pointer" />
              <FaFacebookSquare size={20} className="hover:cursor-pointer" />
              <FaLinkedin size={20} className="hover:cursor-pointer" />
            </div>
          </div>
          <div className="lg:col-span-3 flex justify-between pt-8 px-4">
            {footerText.map((section) => (
              <div key={section.id}>
                <h6 className="md:text-lg text-md font-bold sm:text-left text-justify mb-5">
                  {section.headings}
                </h6>
                <ul className="flex flex-col gap-3">
                  {section.subHeadings.map((subheading) => (
                    <li
                      key={subheading}
                      className="py-2 text-sm hover:cursor-pointer"
                    >
                      {subheading}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center py-6 ">
          <span className="text-sm text-gray-300 opacity-70">
            @copyright {currentYear} Moses Blair
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
