

export default function SpaceLanding() {
  return (
    <div className="min-h-screen  text-white relative overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-6">
        <div className="w-full sm:w-[100%] rotate-1 overflow-hidden absolute top-8 bg-[#1c1a1a] p-4">
          <div className="animate-marquee-left2 whitespace-nowrap flex items-center">
            {Array.from({ length: 100 }).map((_, i) => (
              <span
                key={i}
                className="mx-4 text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight"
                style={{ fontFamily: "Akira Expanded" }}
              >
                $SUNITA
              </span>
            ))}
          </div>
        </div>
      </div>




      
      <div className="relative z-10 flex items-center justify-center px-4 lg:px-20 top-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          <div>
      
             <img src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732267374/main_Lft_xwieay.png"
              alt="Astronaut looking through window"
              className="object-contain w-[80%] sm:w-[70%] lg:w-[100%]"
              style={{
                borderRadius: "100%",
                opacity: "0.6",
              }}
              />
          </div>

     
            <div className="relative group">
              <div className="absolute -inset-[10px] pointer-events-none">
                <div className="absolute -top-1 -left-1 w-12 h-12 lg:w-24 lg:h-24 opacity-40 border-l-2 border-t-2 border-[#696767] rounded-tl-[55px]" />
                <div className="absolute -top-1 -right-1 w-12 h-12 lg:w-24 lg:h-24 opacity-40 border-r-2 border-t-2 border-[#696767] rounded-tr-[55px]" />
                <div className="absolute -bottom-1 -left-1 w-12 h-12 lg:w-24 lg:h-24 opacity-40 border-l-2 border-b-2 border-[#696767] rounded-bl-[55px]" />
                <div className="absolute -bottom-1 -right-1 w-12 h-12 lg:w-24 lg:h-24 opacity-40 border-r-2 border-b-2 border-[#696767] rounded-br-[55px]" />
              </div>

              <div className="bg-[#2e2e2e66] border border-[#848484] backdrop-blur-xl rounded-[50px] p-14">
                <h5
                  className="text-xl sm:text-2xl lg:text-3xl text-center"
                  style={{
                    fontFamily: "Object Sans",
                    textAlign: "center",
                  }}
                >
                  JOIN US ON A {" "}
                  <span className="text-gray-400">JOURNEY TO PROPEL </span>
                  <span className="text-white">$SUNITA TO THE MOON</span>{" "}
                  <span className="text-gray-400">AND BEYOND!</span>
                </h5>

                <p
                  className="text-white text-sm py-5 sm:text-base lg:text-lg"
                  style={{
                    fontFamily: "Squada One",
                    textAlign: "center",
                    letterSpacing: "0.06em",
                  }}
                >
                  Sunita Williams ($SUNITA) is a fully decentralized,
                  community-driven crypto adventure inspired by the renowned
                  NASA astronaut Sunita Williams. We are on a mission to honor
                  her remarkable enthusiasm and contributions to groundbreaking
                  advancements in space exploration.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="bg-[#9ec405] p-2 border-4 hover:bg-green-800 text-black rounded-xl flex items-center justify-center w-12 h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M22 2L11 13" />
                      <path
                        d="M22 2 2 10l9 3 3 9 3-6 3 1 2-15z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>

                  <button className="bg-[#9ec405] border-4 p-2 hover:bg-green-800 text-black rounded-xl flex items-center justify-center w-12 h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M4 4l11.733 16h4.267l-11.733-16z" />
                      <path d="M4 20l6.768-6.768" />
                      <path d="M13.277 10.277l6.723-6.277" />
                    </svg>
                  </button>

                  <a
                    // href="#"
                    className="inline-flex items-center justify-center border-4 rounded-[8px] bg-[#9ec405] px-6 py-1 text-lg font-black text-black text-center hover:bg-green-800 transition-colors"
                  >
                    BUY $SUNITA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
     

      {/* Bottom-Right Section */}
      <div className="absolute bottom-0 right-20  lg:opacity-90">
        <img
          src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732267375/main_Rft_fhmw5v.png"
          alt="Bottom-right section "
          className="w-auto h-auto sm:w-[300px] sm:h-[480px] object-cover"
        />
      </div>
      
    </div>
  );
}















// 
