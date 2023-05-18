import youssoufImage from "/assets/youssouf.jpg";

export const YoussoufImage = () => {
  return (
    <div className="group relative mx-auto  overflow-hidden rounded-[10px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-fit shadow-md">
      <div className="animate-spin-slow  absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
      <div className="relative bg-[#ffffff] rounded-[10px] overflow-hidden aspect-[9/12]">
        <img
          src={youssoufImage}
          height="300px"
          width="300px"
          alt="Yousouuf's Image"
          className="bg-[#fff] object-cover h-full"
        />
      </div>
    </div>
  );
};
