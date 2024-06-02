const Hero = () => {
  return (
    <div className="border-none border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <h1 className="font-bold pb-5 text-6xl tracking-tight lg:mt-16 lg:text-8xl">
              Hi, I'm Samuel.
            </h1>
            <span className="pb-7 text-2xl lg:text-5xl bg-gradient-to-r from-blue-900 via-blue-300 to-blue-900 bg-clip-text text-fxl tracking-tight text-transparent">
              React Developer
            </span>
            <div className="items-center justify-center h-screen">
              <a
                href="https://github.com/soocc"
                target="_blank"
                className="m-5 bg-transparent border border-black hover:bg-blue-500 text-blue-900 font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent shadow-lg hover:shadow-blue-500/50 rounded-full"
              >
                Projects
              </a>
              <a
                href="mailto:sanelightspy@gmail.com"
                target="_blank"
                className="bg-transparent border border-black hover:bg-blue-500 text-blue-900 font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent shadow-lg hover:shadow-blue-500/50 rounded-full"
              >
                Contact
              </a>
            </div>
            <p>Hi, I'm Samuel.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
