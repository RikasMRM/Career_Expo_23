import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { EarthCanvas } from "./canvas";
import { logo } from "../assets";
import Tech from "./Tech";

const Hero = () => {
  return (
    <>
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[220px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div>
            <h1
              className={`${styles.heroHeadText} text-white  text-4xl md:text-7xl lg:text-16xl`}
            >
              <span className="text-[#ff8e1d]">CAREER</span> EXPO
            </h1>
            <p className={`${styles.heroSubText} mt-2 ml-2 text-white-100`}>
              Your dream career awaits you
            </p>
          </div>
        </div>

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
        {/* <Tech /> */}
      </section>
    </>
  );
};

export default Hero;
