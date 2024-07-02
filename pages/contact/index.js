import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { fadeIn } from "../../variants";
import { useForm } from "react-hook-form";
import { FaPhone } from "react-icons/fa";
const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    window.location.href = `mailto:saadsahib398@gmail.com?subject=${data.Subject}&body= Hi, My Name is ${data.Name},Message ${data.Message}`;
    // MY Email ${data.Email}
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto text-center py-32 xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-8"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-x-6 w-full">
              <input
                {...register("Name")}
                type="text"
                placeholder="Name"
                className="input"
              />
              <input
                {...register("Subject")}
                type="text"
                placeholder="Subject"
                className="input"
              />
            </div>
            <input
              {...register("Email")}
              type="text"
              placeholder="Email"
              className="input"
            />
            <textarea
              {...register("Message")}
              placeholder="Message"
              className="textarea"
            ></textarea>
          
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
           
            <div className="flex gap-x-6 border border-accent/20 rounded-lg px-10 py-4 mx-auto">
              <h2 className="text-white animate-pulse">Email Me</h2>
              
              <Link href="mailto:saadsahib398@gmail.com">
                <span className="text-accent">saadsahib398@gmail.com</span>
                <section className="flex items-center gap-2">
                  <FaPhone className="text-accent animate-ping" />
                  03082721191
                </section>
              </Link>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
