import Slider from "react-slick";
import { TestimonialsData } from "../../constants/testimonials";
const Testimonial = () => {
  const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-left mb-5 max-w-[600px] space-y-4 mr-auto">
          <h1 className="text-2xl md:text-4xl font-bold font-playFair">
            What Are The Costumer Saying About Us
          </h1>
        </div>
        {/* Testimonials Cards */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="my-6">
                <div className="flex flex-col gap-4 p-7 shadow-lg mx-4 rounded-xl bg-primary/10">
                  {/* upper section */}
                  <div className="flex justify-start items-center gap-5">
                    <img
                      src={testimonial.img}
                      alt=""
                      className="rounded-full w-16 h-16"
                    />
                    <div>
                      <p className="text-xl font-bold text-black/80">
                        {testimonial.name}
                      </p>
                      <p>{testimonial.name}</p>
                    </div>
                  </div>
                  {/* bottom section */}
                  <div className=" py-2 space-y-4">
                    <p className="text-sm text-gray-500">{testimonial.text}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
