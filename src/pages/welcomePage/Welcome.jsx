import React, { useState } from "react";
import "./index.scss";
import { AnimatePresence, motion } from "framer-motion";
import NavAnimation from "../../components/NavAnimation";
export default function Welcome() {
  const [display, setDisplay] = useState();
  
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  return (
    <div className="welcome_page">
      <NavAnimation />
      <motion.h1
        variants={variants}
        initial="hidden"
        animate="show"
        className="welcome-h1"
      >
        <motion.span variants={item}>m</motion.span>
        <motion.span variants={item}>i</motion.span>
        <motion.span variants={item}>n</motion.span>
        <motion.span variants={item}>i</motion.span>
        <motion.span variants={item}>-</motion.span>
        <motion.span variants={item}>p</motion.span>
        <motion.span variants={item}>r</motion.span>
        <motion.span variants={item}>o</motion.span>
        <motion.span variants={item}>j</motion.span>
        <motion.span variants={item}>e</motion.span>
        <motion.span variants={item}>c</motion.span>
        <motion.span variants={item}>t</motion.span>
        <motion.span variants={item}>s</motion.span>
        <motion.span variants={item}> </motion.span>
        <motion.span variants={item}>p</motion.span>
        <motion.span variants={item}>r</motion.span>
        <motion.span variants={item}>o</motion.span>
        <motion.span variants={item}>j</motion.span>
        <motion.span variants={item}>e</motion.span>
        <motion.span variants={item}>c</motion.span>
        <motion.span variants={item}>t</motion.span>
      </motion.h1>
      <p className="shimmer">
        Hello there, This is a combination of my old projects,I have built these
        project at the start of my journey as a developer, with that in mind, I did not like
        the fact of following a toturial and just copying their code, as simple
        as the projects may seem,they took me alot of time and effort.{"\n"} I was
        throwing myself out their to figure out all alone and how could this be
        done, I have insisted not to refactor the source code, just to remind
        myself and others how much i have progressed over time, I hope you like it, noting that all these projects are built a year ago 
      </p>
    </div>
  );
}
