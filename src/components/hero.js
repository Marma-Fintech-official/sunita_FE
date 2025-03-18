import React, { useEffect, useRef, useState } from "react";


const SpaceParallax = () => {
  const parallaxRef = useRef(null);
  const [countdown, setCountdown] = useState("00:00:00");
  const iframeRef = useRef(null);

  useEffect(() => {
    // Set target date to March 18, 2024, 21:57 GMT using ISO string
    const targetDate = new Date('2024-03-18T21:57:00.000Z');
    console.log('Target Date:', targetDate.toUTCString());
    console.log('Target Date Timestamp:', targetDate.getTime());

    const timer = setInterval(() => {
      // Force current date to use 2024 for testing
      const now = new Date();
      const currentYear = now.getUTCFullYear();
      if (currentYear !== 2024) {
        // Adjust the date to 2024 if system shows different year
        now.setUTCFullYear(2024);
      }
      
      console.log('Current Time:', now.toUTCString());
      console.log('Current Timestamp:', now.getTime());
      
      const difference = targetDate.getTime() - now.getTime();
      console.log('Time Difference (ms):', difference);

      if (difference <= 0) {
        setCountdown("LANDED!");
        clearInterval(timer);
        return;
      }

      // Convert everything to hours
      const totalHours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const formattedTime = `${totalHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      setCountdown(formattedTime);
      console.log('Time Remaining:', formattedTime);
    }, 1000);

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed")) || 0;
        const yPos = scrollTop * speed;
        element.style.transform = `translateY(-${yPos}px)`;
      });
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      if (iframeRef.current) {
        const xRotation = (clientY / window.innerHeight - 0.5) * 20; 
        const yRotation = (clientX / window.innerWidth - 0.5) * 20;
        iframeRef.current.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={parallaxRef} className="relative h-[150vh] w-full ">
      <section className="relative h-[150vh]  w-full overflow-hidden">

      

      {/* Background for Large Screens */}
      <div className="absolute pointer-events-none inset-0 w-full h-full z-0 bg-cover hidden lg:block" style={{ overflow: "hidden" }}>
        <iframe
    loading="lazy"
          ref={iframeRef}
          src="https://my.spline.design/earthwallpaper-4bccde5736f7f903aee4be5c79cda0aa/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "1",
            transition: "transform 0.1ms ease-out",
          }}
        ></iframe>
      </div>

      {/* Background for Small/Mobile Screens */}
      <div className="absolute inset-0 w-full h-full z-0 bg-cover block lg:hidden" style={{ overflow: "hidden" }}>
        <iframe
          ref={iframeRef}
          src="https://my.spline.design/earthwallpapercopy-cb77fc7aa90ec3aa8ba88e79aa4ce637/"
          frameBorder="0"
          width="100%"
          height="100%"
          loading="lazy"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "1",
            transition: "transform 0.1s ease-out",
          }}
        ></iframe>
        </div>
  

        {/* Parallax Elements */}
        <div
          className="parallax absolute scene z-20 flex justify-center items-center inset-0"
          data-speed="1.5"
        >
          <div className="rocket relative">
            <img
              src="https://d17f0ctj7bq5l3.cloudfront.net/sunitha/rocket.png"
              alt="Rocket"
              className="w-32 sm:w-40 md:w-60 lg:w-70 object-contain opacity-90"
            />
          </div>
        </div>

        <div className="relative z-30 flex flex-col w-full p-4 items-center justify-center h-screen ">
          <div className="flex w-full justify-between lg:px-80 px-10 md:px-36 items-center  ">
            <img
              src="https://d17f0ctj7bq5l3.cloudfront.net/sunitha/leftsunitha.png"
              alt="no image"
              className="w-12 h-12  md:w-[60px] md:h-[60px]   lg:w-[105px] lg:h-[105px]  "
            />

            <img
              src="https://d17f0ctj7bq5l3.cloudfront.net/sunitha/rightsunitha.png"
              alt="no image"
              className="w-11 h-11 md:w-[60px] md:h-[60px]  lg:w-[100px] lg:h-[100px] "
            />
          </div>

          <div className="flex  w-full  xl:px-40  px-1 md:px-5 justify-between ">
            <h1
              className="tracking-widest md:tracking-wider text-center text-[20px] md:text-[42px] lg:text-[66.4px] xl:text-[69.66px]"
              style={{
                fontFamily: "'Akira Expanded', sans-serif",
                color: "#D9D9D9",
                alignItems: "center",
                textShadow: `
                  -1px -1px 0 rgba(255, 255, 255, 0.74),
                  1px -1px 0 rgba(255, 255, 255, 0.74),
                  -1px 1px 0 rgba(255, 255, 255, 0.74),
                  1px 1px 0 rgba(255, 255, 255, 0.74)
                `,
              }}
            >
              SUNITA <hr />
            </h1>
            <h1
              className="tracking-widest md:tracking-wider text-center text-[18.5px] md:text-[42px] lg:text-[66.4px] xl:text-[69.66px]"
              style={{
                fontFamily: "'Akira Expanded', sans-serif",
                color: "#D9D9D9",
                textShadow: `
                -1px -1px 0 rgba(255, 255, 255, 0.74),
                1px -1px 0 rgba(255, 255, 255, 0.74),
                -1px 1px 0 rgba(255, 255, 255, 0.74),
                1px 1px 0 rgba(255, 255, 255, 0.74)
              `,
              }}
            >
              $SUNITA <hr />
            </h1>
          </div>

          <div
            className="flex  w-full   justify-between  px-1  md:px-5 xl:px-40 "
            style={{
              fontFamily: "'Akira Expanded', sans-serif",
              fontWeight: "800",
              color: "rgba(155, 155, 155, 0.74)",
              textShadow: `
                -1px -1px 0 rgba(255, 255, 255, 0.74),
                1px -1px 0 rgba(255, 255, 255, 0.74)
              `,
            }}
          >
            <h2 className="text-gray-400 tracking-wider md:tracking-normal  opacity-50 text-[18px]  md:text-[40px]  lg:text-[64px]  ">
              TO LAND
            </h2>

            <h2 className="text-gray-400 tracking-wider md:tracking-wide opacity-50 text-[18px] md:text-[40px] lg:text-[64px]  lg:px-2">
              TO MOON
            </h2>
          </div>
        </div>


        <div className="absolute z-20  w-[80%] md:ml-20 lg:ml-40 4xl:ml-60 parallax p-2 mt-[20px] ml-10  "
        data-speed="1">
          {/* Outer Container */}
          <div className="parallax backdrop-blur-lg px-5 py-5 lg:px-5 lg:py-8 rounded-[31.42px] border border-[#848484] bg-white/10">
            {/* Decorative Borders */}
            <div className="absolute inset-0 pointer-events-none ">
              <div className="absolute -top-4 -left-4 w-24 h-36 border-l-2 border-t-2 border-[#474747] rounded-tl-[40.42px] opacity-80"></div>
              <div className="absolute -top-4 -right-4 w-24 h-36 border-r-2 border-t-2 border-[#474747] rounded-tr-[40.42px] opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-36 border-l-2 border-b-2 border-[#474747] rounded-bl-[40.42px] opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-36 border-r-2 border-b-2 border-[#474747] rounded-br-[40.42px] opacity-80"></div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col md:flex-row gap-2 items-center">
              {/* Timer Section */}
              <div className="text-center w-full">
                <p
                  className="text-[#CCFF00BF] text-[18px] lg:text-[20px] uppercase tracking-wider"
                  style={{
                    fontFamily: "'Squada One', sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Mission to rescue astronauts
                </p>
                <div
                  className="text-[3.5em] tracking-wider md:text-[36px] lg:text-[84px] p-2 text-white"
                  style={{ fontFamily: "Technology" }}
                >
                  {countdown}
                </div>
              </div>

  
              <div className="text-center md:text-left w-full">
                <p
                  className="text-white text-[16px] md:text-[14px] lg:text-[20px] uppercase tracking-wider leading-relaxed"
                  style={{
                    fontFamily: "'Squada One', sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Our vision is to be the guiding star for blockchain-based
                  transformation, emphasizing sustainable growth, inclusive
                  access, and community-driven development. We aim to connect
                  innovation, human potential, and global impact.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="absolute bottom-0 text-center w-full z-15">
          <img
            src="https://d17f0ctj7bq5l3.cloudfront.net/sunitha/Rectangle.png"
            alt="Hero Bottom Image"
            className="w-full object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default SpaceParallax;

