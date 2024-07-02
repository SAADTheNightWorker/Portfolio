//components
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      {/* <Circles/> */}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 flex-1">
          {/* text */}
          <div className="md:mt-40 sm:mt-40 text-center flex xl:w-[50vh] flex-col lg:text-left mb-4 xl:mb-0 flex-1">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 mt-10"
            >
              My'Projects<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Technologies Used: Frontend: HTML5, CSS3, JavaScript (React.js) (Next.js)
              Backend: Node.js, Express.js Database: MongoDB Authentication:
              JSON Web Tokens (JWT) Payment Integration: Stripe API
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/*slider  */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
