
export default function HowToBuy() {
  return (
    <div className="relative min-h-screen mx-auto  lg:px-20 ">
      <header className="justify-center text-center py-1 flex">
        <h1
          className="text-[30px] md:text-[82px] lg:text-[103.73px]  text-center text-[#D4D4D4]"
          style={{
            fontFamily: "Akira Expanded, sans-serif",
            fontWeight: "800",
            textUnderlinePosition: "from-font",
          }}
        >
          HOW TO BUY
          <hr className=" border border-t-1 opacity-50 lg:-mt-5  md:mt-[11] center  border-[#424242]" />
        </h1>
      </header>

      <div className="py-10 px-5 flex items-center justify-center text-center">
        <div className="max-w-7xl p-5 w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-14 lg:gap-16 pointer">
            {[
              {
                title: "WALLET",
                description: "Connect your Binance Smart Chain (BSC)-compatible wallet like MetaMask, Trust Wallet, or SafePal to start trading.",
                link: "https://www.bnbchain.org/en/wallets",
                linkText: "BSC wallets",
              },
              {
                title: "EXCHANGE",
                description:
                  "Buy BNB on PancakeSwap - Use PancakeSwap to exchange USDT or ETH for BNB, then send BNB to your wallet address.",
                link: "https://pancakeswap.finance/",
                linkText: "Pancakeswap",
              },
              {
                title: "SWAP",
                description: "Select BNB, enter the $SUNITHA contract address, set slippage if needed, and confirm the swap.",
                link: "https://pancakeswap.finance/",
                linkText: "Pancakeswap",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                {/* Four Corners */}
                <div className="absolute -inset-[10px] pointer-events-none">
                  <div className="absolute -top-2 -left-2 w-20 h-20 md:w-24 md:h-24 opacity-70 border-l-2 border-t-2 border-[#696767] rounded-tl-[38px] md:rounded-tl-[55px]" />
                  <div className="absolute -top-2 -right-2 w-20 h-20 md:w-24 md:h-24 opacity-70 border-r-2 border-t-2 border-[#696767] rounded-tr-[38px] md:rounded-tr-[55px]" />
                  <div className="absolute -bottom-2 -left-2 w-20 h-20 md:w-24 md:h-24 opacity-70 border-l-2 border-b-2 border-[#696767] rounded-bl-[38px] md:rounded-bl-[55px]" />
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 md:w-24 md:h-24 opacity-70 border-r-2 border-b-2 border-[#696767] rounded-br-[38px] md:rounded-br-[55px]" />
                </div>

                {/* Inner Box */}
                <div className="relative">
                  <div className="absolute -inset-0.5 opacity-60 rounded-[32px] md:rounded-[40px] bg-[#2e2e2e66] backdrop-blur-lg  border-[#848484] border-[2px]  transition" />
                  <div className="relative py-6 px-4 md:py-[34px]   rounded-[32px] md:rounded-[44px] min-h-[240px] md:min-h-[280px] flex flex-col">
                    <h2
                      className="text-[24px] md:text-[32px] p-2 md:p-3 tracking-wider text-white"
                      style={{
                        fontFamily: "Akira Expanded, sans-serif",
                        letterSpacing: "0.05em",
                        lineHeight: "2.4rem",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="text-[16px]  md:text-[20px] tracking-normal  py-5 md:py-10 mb-auto"
                      style={{
                        fontFamily: "Squada One",
                        fontWeight: "400",
                        lineHeight: "1.5rem",
                        color: "#767676",
                      }}
                    >
                      {item.description}
                    </p>
                    <a
                      style={{
                        fontFamily: "TT Firs Neue Trl",
                        fontWeight: "400",
                        letterSpacing: "0.05em",
                        textAlign: "center",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                      }}
                      href={item.link}
                      className="text-[#9FE870] text-[14px] lg:text-[18px] hover:text-[#B1FF7C] transition-colors py-1 break-words"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="buy-token" className="container  mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <div
            className="relative flex items-center justify-center w-full h-auto px-4 lg:px-24"
            style={{ zIndex: 40 }}
          >
            {/* Foreground Text */}
            <div
              className="absolute flex flex-col items-center justify-center text-center uppercase"
              style={{
                zIndex: 2,
                fontFamily: "Akira Expanded, sans-serif",
                fontWeight: "400",
                color: "whitesmoke",
              }}
            >
              <h1
                className=" text-4xl lg:text-6xl font-bold hover:text-black hover:opacity-50"
                style={{
                  background: `url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDB4b2F5MWduMGFiemkxdzdnMDR1NnZqZ3N6NHBkY2docHk1MXc5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKwhW6L2tpmFsqc/giphy.webp)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                Coming Soon !<span className="leading-1 animate-pulse"></span>
              </h1>
            </div>

            <iframe
              src="https://flowx.finance/swap/USDC-SUI"
              title="Uniswap Embedded Interface"
              width="100%"
              height="300"
              className="border-none rounded-3xl overflow-hidden pointer-events-none"
              style={{
                filter: "blur(2px)", // Strong blur effect
              }}
            ></iframe>
          </div>
          

          <div className="flex justify-center z-20 items-center relative">
            <img
              src="https://d17f0ctj7bq5l3.cloudfront.net/sunitha/float.png"
              alt="Animated Decorative "
              className="pointer-events-none"
              style={{
                width: "550px",
                height: "450",
              }}
            />
            <div className="absolute bottom-10 p-10 -z-[100] right-0 ">
              <img
                src="https://d17f0ctj7bq5l3.cloudfront.net/sunitha/mainRitpng.png"
                alt="Bottom-right section "
                className="w-[600px] h-[600px] bg-contain shadow-lg bg-no-repeat bg-right "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
