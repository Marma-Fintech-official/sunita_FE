const Tokenomics = () => {
  return (
    <div className="relative w-full min-h-screen py-10 px-6 lg:px-20 lg:py-20">
      {/* Center content box - modified to be 80% width */}
      <div className="relative mx-auto mb-20 lg:mb-40 w-[90%] lg:w-[80%]">
        <div className="absolute -inset-[10px] pointer-events-none">
          <div className="absolute -top-10 -left-2 w-24 h-24 opacity-80 border-l-[0.64px] border-t-[0.64px] border-[#696767] rounded-tl-[34px]" />
          <div className="absolute -top-10 -right-2 w-24 h-24 opacity-80 border-r-[0.64px] border-t-[0.64px] border-[#696767] rounded-tr-[34px]" />
          <div className="absolute -bottom-10 -left-2 w-24 h-24 opacity-80 border-l-[0.64px] border-b-[0.64px] border-[#696767] rounded-bl-[34px]" />
          <div className="absolute -bottom-10 -right-2 w-24 h-24 opacity-80 border-r-[0.64px] border-b-[0.64px] border-[#696767] rounded-br-[34px]" />
        </div>

        <div className="relative w-full h-[200px] lg:h-[261px] rounded-[10px] bg-zinc-900/50 backdrop-blur-sm p-4">
          <h1 className="text-[26.31px] lg:text-[33.27px] py-5 lg:py-10 text-[#D4D4D4] text-center" style={{ fontFamily: "Akira Expanded", fontWeight: "800", letterSpacing: "0.05em", lineHeight: "38.27px" }}>
            TOKENOMICS
          </h1>
          <p className="text-zinc-400 text-[16px] lg:text-[16.64px] lg:px-4 px-1 text-center" style={{ fontFamily: "Squada One", fontWeight: "400", marginTop: "-10px", lineHeight: "17.58px", letterSpacing: "0.05em" }}>
            Our tokenomics section is your go-to guide for the economics behind our project, offering investors and holders a sleek breakdown of our token's value and utility.
          </p>
        </div>
      </div>

      {/* Tokenomics boxes grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 max-w-7xl mx-auto mt-10 lg:mt-20 px-4 lg:px-0">
        {/* Box Component - reused for each tokenomics item */}
        {[
          { percentage: "50", label: "LIQUIDITY" },
          { percentage: "20", label: "SPACE COMMUNITY BUILDING" },
          { percentage: "10", label: "STRATEGIC PARTNERSHIPS" },
          { percentage: "5", label: "HEROS OF NASA'S SPACEX CREW-9" },
          { percentage: "5", label: "TEAM" },
          { percentage: "10", label: "SMART FUTURE RESERVE" }
        ].map((item, index) => (
          <div key={index} className="relative px-2 py-4 lg:px-10 lg:py-8 my-4 lg:my-0">
            <div className="absolute -inset-[10px] lg:-inset-[15px] pointer-events-none">
              <div className="absolute -top-2 -left-2 w-[35px] lg:w-[45px] h-[52px] lg:h-[120px] opacity-40 border-l-[0.64px] border-t-[0.64px] border-[#696767] rounded-tl-[20px]" />
              <div className="absolute -top-2 -right-2 w-[35px] lg:w-[45px] h-[52px] lg:h-[120px] opacity-40 border-r-[0.64px] border-t-[0.64px] border-[#696767] rounded-tr-[20px]" />
              <div className="absolute -bottom-2 -left-2 w-[35px] lg:w-[45px] h-[54px] lg:h-[110px] opacity-40 border-l-[0.64px] border-b-[0.64px] border-[#696767] rounded-bl-[20px]" />
              <div className="absolute -bottom-2 -right-2 w-[35px] lg:w-[45px] h-[54px] lg:h-[110px] opacity-40 border-r-[0.64px] border-b-[0.64px] border-[#696767] rounded-br-[20px]" />
            </div>
            <div className="text-white text-[29px] lg:text-[64px] text-center mb-2 lg:mb-4" style={{ fontFamily: "Squada One" }}>
              {item.percentage}%
            </div>
            <div className="text-gray-500 text-[18.35px] lg:text-[40px] tracking-wider tracking-[0.06em] text-center" style={{ fontFamily: "Squada One" }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
