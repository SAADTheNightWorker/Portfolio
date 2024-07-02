import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { easeInOut, motion } from "framer-motion";
// varient
import { fadeIn } from "../variants";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-primary h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left mx-auto container h-full">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Transforming Ideas <br /> Into{""}{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-centerv"
          >
            Welcome to SAAD's digital domain, where innovation meets passion and
            precision. As a passionate developer.
          </motion.p>

          
          <motion.div
            className="hidden xl:flex"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
           
            <ProjectBtn />
            
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] absolute right-0 top-0 bottom-0">
        {/* bg imgae */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full 
        h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        {/* {partical} */}

        <ParticlesContainer />

        {/* {avatar img} */}
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
