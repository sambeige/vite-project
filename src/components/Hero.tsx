const Hero = () => {
  return (
    <div className="border-none border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <h1 className="pb-5 text-6xl tracking-tight lg:mt-16 lg:text-8xl">
              Hi, I'm Samuel.
            </h1>
            <span className="pb-5 text-2xl lg:text-5xl bg-gradient-to-r from-blue-900 via-blue-300 to-blue-900 bg-clip-text text-fxl tracking-tight text-transparent">
              React Developer
            </span>
            <div className="items-center justify-center h-screen">
              <button className="m-5 bg-transparent border border-black hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent shadow-lg hover:shadow-blue-500/50 rounded-full">
                GitHub
              </button>
              <button className="bg-transparent border border-black hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent shadow-lg hover:shadow-blue-500/50 rounded-full">
                Contact
              </button>
            </div>
            <p>Hi, I'm Samuel.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
