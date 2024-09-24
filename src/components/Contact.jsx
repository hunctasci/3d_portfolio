import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Information</h3>

        <div className="mt-12 flex flex-col gap-4">
          <p className="text-white font-medium">
            <strong>Email:</strong> hunc.tasci@gmail.com
          </p>
          <p className="text-white font-medium">
            <strong>Phone:</strong> +90 532 323 98 25
          </p>
          <p className="text-white font-medium">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/hunctasci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              linkedin.com/in/hunctasci
            </a>
          </p>
          <p className="text-white font-medium">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/hunctasci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              github.com/hunctasci
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
