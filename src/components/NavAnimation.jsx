import { AnimatePresence, motion } from "framer-motion";

export default function NavAnimation() {
  return (
    <motion.div
      animate={{
        height: "0vh",
      }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      initial={{
        height: "100%",
        position: "absolute",
        bottom: "0",
        width: "100%",

        backgroundColor: "white",
      }}
      style={{
        zIndex: 100,
      }}
      // exit={{ height: "100vh",background:"yellow", transition: { duration: 0.1 } }}
    ></motion.div>
  );
}
