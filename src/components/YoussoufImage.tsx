export const YoussoufImage = () => {
  return (
    <div className="group mt-5 sm:mt-0 relative mx-auto  overflow-hidden rounded-[10px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-fit shadow-md">
      <div className="animate-spin-slow  absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
      <div className="relative bg-[#ffffff] rounded-[10px] overflow-hidden sm:aspect-[9/12] aspect-square">
        <img
          src="/assets/youssouf.jpg"
          height="300px"
          width="300px"
          alt="Yousouuf's Image"
          className="bg-[#fff] object-cover h-full"
        />
      </div>
    </div>
  );
};
