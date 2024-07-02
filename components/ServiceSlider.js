import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import React Icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// Initialize Swiper core modules
SwiperCore.use([Pagination]);

// Data
const serviceData = [
 
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "We work closely with you to develop a comprehensive brand",
    },
    
    {
      icon: <RxReader />,
      title: "Copywriting",
      description: " We understand that every business is unique, which is why we take a customized approach to every project",
    },

    {
    icon: <RxPencil2 />,
    title: "Design",
    description: "We don't believe in one-size-fits-all solutions, designers works.",
  },
 
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "From dynamic content management systems to interactive e-commerce platforms,",
  },
 
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Keyword research is the foundation of any successful SEO strategy. Our team will conduct in-depth keyword research to identify the terms and phrases.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      className="h-[240px] sm:h-[340px] max-sm:w-80 "
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col 
          gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(86,65,169,0.15)] transition-all duration-300"
          >
            {/* icon */}
            <div className="text-4xl text-accent">{item.icon}</div>
            {/* title &desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl relative bottom-8">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
