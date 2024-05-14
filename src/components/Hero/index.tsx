import React from 'react';
import Link from 'next/link';
import BackgroundVideo from './backgroundvideo';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container relative flex flex-col md:flex-row">
          {/* Left half: Video */}
          <div className="w-full md:w-8/12">
            <div className="w-full h-full max-w-[900px]">
              <BackgroundVideo />
            </div>
          </div>
          
          {/* Right half: Welcome content */}
          <div className="w-full md:w-4/12 px-4 py-12 md:py-0 flex items-center">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight animate__animated animate__slideInRight transition duration-500 ease-in-out">
                Welcome To&nbsp;
                &nbsp;<span className="text-blue-500">EDIT</span> <span className="text-orange-500">Enterprises,</span>
              </h1>

              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl animate__animated animate__fadeInUp">
                Partner with us today and unlock the full potential of technology for your success.
                
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 animate__animated animate__fadeInUp">
                <Link
                  href=""
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  🔥 Get Pro
                </Link>
                <Link
                  href=""
                  className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Star on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
  
export default Hero;








