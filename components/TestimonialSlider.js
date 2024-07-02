// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Consistently impressed by the way you tackle challenges with innovation and problem-solving skills. Your commitment to excellence shines through in every project you undertake.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Your work reflects a deep understanding of user needs and behaviors. Your designs are not only visually appealing but also intuitive and user-friendly, creating memorable experiences for your audience.",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Your passion for your work is infectious, and it's evident that you pour your heart and soul into every project. Your enthusiasm and drive to deliver exceptional results make you a valuable asset to any team.",
  },
];

//
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="h-[280px] sm:h-[480px] swiper-container w-[80%]"
      >
        {testimonialData.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center items-center">
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt="Person"
                    />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-accent xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 text-center md:text-left md:flex-wrap">
                <div className="flex flex-col justify-center items-center">
                  <div className="mb-4">
                    <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                  </div>

                  <div className="xl:text-lg text-center md:text-left w-auto mr-10">
                    {person.message}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
