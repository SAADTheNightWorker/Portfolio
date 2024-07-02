import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px]">
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt="circle"
      />
    </div>
  );
};

export default Circles;
