const Blue = () => {
  return (
    <div
      className=" flex justify-center items-center w-full h-[500px]  text-center"
      style={{
        background: "linear-gradient(80deg, #2F1358 3%, #6529BE 50%)",
      }}
    >
      <div className="text-center justify-center items-center mt-5">
        <h4 className="text-white text-3xl font-semibold text-center">
          {" "}
          Boost Your Productivity With AI <br></br>Insights!
        </h4>
        <p className="text-white mt-4.5 text-2xl">
          Try Raem Track free for 30 days. No credit card required
        </p>
        <div className="flex flex-col md:flex-row mx-auto justify-center items-center  text-center gap-10 md:gap-20 mt-10 mb-10">
          <button className="px-10 py-4 bg-[#8635FC] rounded-[10px] font-semibold text-[18px] text-white hover:bg-purple-950 cursor-pointer">
            Get Started for free
          </button>
          <button className="px-16 py-4  rounded-[10px] font-semibold text-[18px] text-blue bg-[#E0E0E0] hover:bg-gray-400 cursor-pointer">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blue;
