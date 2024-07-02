// import Image from "next/image";

import Image from "next/image";

// // next Link
import Link from "next/link";

// // components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 max-sm:h-[150px] xl:px-0 h-[120px]">
      <div className="container mx-auto ">
        <div  className="flex flex-row justify-between items-center gap-y-6 max-sm:gap-y-0 py-8 ">
          {/* {logo} */}
          
          <Link href="/" className="animate-pulse">
            <Image
              src="/logo2.png"
              alt="logo"
              width={220}
              height={42}
              className="min-w-28 max-sm:-ml-14"
            />
          </Link>
          
          {/* {social} */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
