const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.png",
          link: "https://tech-heaven1.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb2.png",
          link: "https://tech-heaven1.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb3.png",
          link: "https://tech-heaven1.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb4.png",
          link: "https://tech-heaven1.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb5.png",
          link: "https://expense-checker-three.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb5.png",
          link: "https://expense-checker-three.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb5.png",
          link: "https://expense-checker-three.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb5.png",
          link: "https://expense-checker-three.vercel.app/",
        },
      ],
      images: [
        {
          title: "title",
          path: "/thumb5.png",
          link: "https://expense-checker-three.vercel.app/",
        },
        {
          title: "title",
          path: "/new map.png",
          link: "https://corona-tracker-two-pink.vercel.app",
        },
        {
          title: "title",
          path: "/hulu.png",
          link: "https://github.com/SAADTheNightWorker/HULU",
        },

        {
          title: "title",
          path: "/chat gpt.png",
          link: "https://github.com/SAADTheNightWorker/chatGPT/tree/main/app",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/2.png",
          link: "https://github.com/SAADTheNightWorker/Chat-app",
        },
        {
          title: "title",
          path: "/1.png",
          link: "https://github.com/SAADTheNightWorker/Chat-app",
        },
        {
          title: "title",
          path: "/3.png",
          link: "https://github.com/SAADTheNightWorker/Chat-app",
        },
        {
          title: "title",
          path: "/11.png",
          link: "https://github.com/SAADTheNightWorker/Chat-app",
        },
      ],
    },
  ],
};
//icons
import { BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, i) => (
                <Link target="_blank" href={`${image.link}`}>
                  <div
                    key={i}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="relative flex justify-center items-center overflow-hidden group">
                      <Image
                        width={500}
                        height={300}
                        src={image.path}
                        alt={image.title}
                      />

                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc]
                    to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700
                    "
                      ></div>

                      {/* title */}
                      <div
                        className="absolute bottom-0 translate-y-full group-hover:-translate-y-20 
                    group-hover:xl-translate-y-20 max-sm:group-hover:translate-y-30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2rem]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="max-sm:translate-y-0 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECTS
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
