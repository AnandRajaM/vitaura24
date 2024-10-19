import React from 'react';
import Navbar from './navbar/navbar';
import NumbersSection from './2_numbers/numbers';
import InfoSection from './3_Info/infoSection';
import SponsorsSection from './4_sponsors/sponsors';
import CountdownTimer from './countdown/countdowntimer';

import { MdArrowOutward } from "react-icons/md";


const HeroSection = () => {
  return (
    <section className="text-gray-400 body-font bg-black">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative z-10">
          <h1 className="title-font text-9xl lg:text-9xl mb-4 font-medium text-white font-fluxbox">
            <span className="text-hotpink">2024</span>
            <br className="inline-block" />
            <span className="text-neongreen">VITAURA</span>
            <br className="inline-block" />
            <div className="flex items-center mt-4">
              {/* Left neon green side with the location icon and text */}
              <div className="bg-neongreen flex items-center justify-center px-6 py-4 rounded-l-lg">
                <i className="fas fa-map-marker-alt text-black mr-3"></i>
                <span className="text-black text-xl font-bold font-mono">VIT-AP University</span>
              </div>
              {/* Right white side with 'Coming Soon' text */}
              <div className="bg-white text-black flex items-center justify-center px-6 py-4 rounded-r-lg">
                <span className="text-xl font-bold font-mono">28th Oct'24</span>
              </div>
            </div>
          </h1>
          <p className="mb-8 leading-relaxed font-mono font-bold text-xl">
            Join the Biggest Tech Fest ever in VIT-AP
          </p>
          <div className="flex justify-center">
          <button className="inline-flex items-center text-neongreen bg-black border-2 border-neongreen py-2 px-6 lg:py-4 lg:px-8 focus:outline-none hover:bg-hotpink hover:text-black hover:border-hotpink rounded lg:text-xl font-fluxbox font-bold transition duration-300 ease-in-out">
  Register Now
  <MdArrowOutward className="ml-2" />
</button>

          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative z-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x820"
            width="720"
            height="820"
          />
        </div>
      </div>
    </section>
  );
};

const LandingPageComponent = () => {
  const targetDate = new Date('2024-10-28T08:00:00');
  return (
    <div>
      <Navbar />
      <main>
        <div className="mt-10"></div>
        <HeroSection />
        {/* <CountdownTimer targetDate={targetDate} /> */}  
        <NumbersSection />
        <InfoSection />
        <SponsorsSection />

      </main>
    </div>
  );
};

export default LandingPageComponent;
