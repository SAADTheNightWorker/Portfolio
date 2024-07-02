// links
import Link from "next/link";
import { motion } from "framer-motion";
//icon
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center text-xl gap-x-5">
      <motion.span
        initial={{ scale: 1 }}
        whileHover={{ scale: 2, marginBottom: 10 }}
        transition={{ duration: 0.1 }}
      >
        <Link
          href={"https://www.youtube.com/"}
          className="hover:text-accent transition-all duration-300"
        >
          <RiYoutubeLine />
        </Link>
      </motion.span>
      <motion.span
        initial={{ scale: 1 }}
        whileHover={{ scale: 2, marginBottom: 10 }}
        transition={{ duration: 0.1 }}
      >
        <Link
          href={"https://www.instagram.com/"}
          className="hover:text-orange-500 transition-all duration-300"
        >
          <RiInstagramLine />
        </Link>
      </motion.span>
      <motion.span
        initial={{ scale: 1 }}
        whileHover={{ scale: 2, marginBottom: 10 }}
        transition={{ duration: 0.1 }}
      >
        <Link
          href={"https://www.facebook.com/"}
          className="hover:text-sky-500 transition-all duration-300"
        >
          <RiFacebookLine />
        </Link>
      </motion.span>
      <motion.span
        initial={{ scale: 1 }}
        whileHover={{ scale: 2, marginBottom: 10 }}
        transition={{ duration: 0.1 }}
      >
        <Link
          href={"https://www.dribbleline.com/"}
          className="hover:text-pink-500 transition-all duration-300"
        >
          <RiDribbbleLine />
        </Link>
      </motion.span>
      <motion.span
        initial={{ scale: 1 }}
        whileHover={{ scale: 2, marginBottom: 10 }}
        transition={{ duration: 0.1 }}
      >
        <Link
          href={"https://www.behance.net/"}
          className="hover:text-sky-300 transition-all duration-300"
        >
          <RiBehanceLine />
        </Link>
      </motion.span>

      <motion.span
        initial={{ scale: 1 }}
        whileHover={{ scale: 2, marginBottom: 10 }}
        transition={{ duration: 0.1 }}
      >
        <Link
          href={"https://www.pinterest.com/"}
          className="hover:text-red-600 transition-all duration-300"
        >
          <RiPinterestLine />
        </Link>
      </motion.span>
    </div>
  );
};

export default Socials;
