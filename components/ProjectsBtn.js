// Corrected import for Image from next/image
import Image from "next/image"; // Corrected import statement for Image component
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import TextImage from "../public/rounded-text.png";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={"/work"} className="relative w-[185px] h-[185px] py-5 flex justify-center items-center
      bg-circleStar bg-cover bg-center bg-no-repeat group">
        {/* Using the Image component from Next.js */}
        <Image
          src={TextImage}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
