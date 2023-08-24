import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hey there, I'm Hunc, a frontend developer driven by a passion for
        technology and design. With a background in marketing and media, I've
        discovered my true calling in shaping digital experiences. My journey
        accelerated through the Recoded Front End Development Bootcamp, where I
        delved deep into HTML, CSS, JavaScript, React, and Next.js. A standout
        moment was the Capstone Project—an immersive collaboration to build a
        crowdfunding app. This experience merged technical prowess with
        real-world agility. Drawing from my background managing online apparel
        business websites and social media, I've honed an intuition for user
        interfaces and engagement. Each project, be it solo or collaborative,
        fuels my growth and curiosity. As a proud member of the exclusive
        Recoded community, I've earned a Front End Web Developer certificate
        from Flatiron School, New York. A communicator at heart, I value
        collaboration and seamless teamwork. Let's together shape the digital
        world.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
