export default function About() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute bottom-0 right-20 w-[600px] h-[600px]  pointer-events-none">
        <img
          src="https://d17f0ctj7bq5l3.cloudfront.net/sunitha/mainRitpng.png"
          alt="Technical Diagram"
          width={250}
          height={200}
          className=" object-cover"
        />
      </div>

      {/* marque */}

      <div className="relative inset-0 flex flex-col justify-center items-center gap-2">
        {/* Top Section with Padding */}
        <section className="w-full pt-12">
          {/* Marquee Animation */}
          <div className="w-full rotate-3  overflow-hidden relative bg-[#1c1a1a] p-4">
            <div className="animate-marquee-left2 whitespace-nowrap flex items-center">
              {Array.from({ length: 50 }).map((_, i) => (
                <span
                  key={i}
                  className="mx-4 text-lg sm:text-xl md:text-2xl font-extrabold leading-tight text-white"
                  style={{ fontFamily: "Akira Expanded" }}
                >
                  $SUNITA
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto px-5 py-20 md:py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative w-full h-[400px] lg:h-[600px] rounded-[31px] lg:rounded-[55px] overflow-hidden">
            <img
              src="https://d17f0ctj7bq5l3.cloudfront.net/sunitha/mainLft.png"
              alt="Astronaut View"
              fill
              className="object-cover"
              style={{
                borderRadius: "100%",
                opacity: "0.7",
              }}
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div className="relative z-10 space-y-2 lg:space-y-8 max-w-2xl">
            <div className="relative group">
              <div className="absolute -inset-[10px] pointer-events-none">
                <div className="absolute -top-1 -left-1 w-0 h-0 lg:w-24 lg:h-24 opacity-40 border-l-2 border-t-2 border-[#696767] rounded-tl-[55px]" />
                <div className="absolute -top-1 -right-1 w-0 h-0 lg:w-24 lg:h-24 opacity-40 border-r-2 border-t-2 border-[#696767] rounded-tr-[55px]" />
                <div className="absolute -bottom-1 -left-1 w-0 h-0 lg:w-24 lg:h-24 opacity-40 border-l-2 border-b-2 border-[#696767] rounded-bl-[55px]" />
                <div className="absolute -bottom-1 -right-1 w-0 h-0 lg:w-24 lg:h-24 opacity-40 border-r-2 border-b-2 border-[#696767] rounded-br-[55px]" />
              </div>

              <div className="bg-[#2e2e2e66] backdrop-blur-lg border-1 border-[#848484] rounded-[31px] lg:rounded-[55px] px-8 py-8 md:px-12 md:py-12 lg:py-20 lg:px-20 ">
                <h5
                  className=" text-[22px] lg:text-[24px] leading-8 lg:leading-9 "
                  style={{
                    fontFamily: "Object Sans",
                    textAlign: "center",
                    fontWeight: "800",
                  }}
                >
                  JOIN US ON A{" "}
                  <span className="text-gray-400">JOURNEY TO PROPEL </span>
                  <span className="text-white">$SUNITA TO THE MOON</span>{" "}
                  <span className="text-gray-400">AND BEYOND !</span>
                </h5>

                <p
                  className="text-white py-4 px-2 justify-center  lg:py-8 text-[16px] leading-5 lg:leading-8 lg:text-[16px]"
                  style={{
                    fontFamily: "Squada One",
                    textAlign: "center",
                  }}
                >
                  Sunita Williams ($SUNITA) is a fully decentralized,
                  community-driven crypto adventure inspired by the renowned
                  NASA astronaut Sunita Williams.We are on a mission to honor
                  her remarkable enthusiasm and contributions to groundbreaking
                  advancements in space exploration.
                </p>

                <div className="flex flex-wrap gap-2 justify-center ">
                  <a href="https://t.me/sunitaonland" target="_blank" rel="noopener noreferrer">
                    <button className="bg-[#9ec405]  border-[5.3px] border-white hover:bg-black hover:text-[#9ec405] text-black rounded-[9.43px] flex items-center justify-center p-3">
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
                  </a>

                  <a href="https://x.com/sunitaonland" target="_blank" rel="noopener noreferrer">
                    <button className="bg-[#9ec405] border-[5.3px] border-white hover:bg-black hover:text-[#9ec405] text-black rounded-[9.43px] flex items-center justify-center p-3">
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
                  </a>

                  <a
                    href="..."
                    className=" flex items-center justify-center leading-3 lg:leading-6 bg-[#9ec405]  border-[5.3px] 
                      border-white hover:bg-black hover:text-[#9ec405]  text-[13.31px] lg:text-[24px]
                       md:text-[22px] lg:px-4 px-2 font-black text-black rounded-[9.43px] transition-colors"
                  >
                    Buy $SUNITA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
