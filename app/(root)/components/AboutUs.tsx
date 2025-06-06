"use client";

import React, { useEffect, useState } from "react";
import AboutUsCard from "./cards/AboutUsCard";
import { motion } from "motion/react";
import FadeInSection from "@/Animations/FadeInSection";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Array of card content
  const cardContent = [
    {
      title: "Tailored for Teen Founders",
      content:
        "Our platform is built specifically for high schoolers—no fluff, just real tools and support to help you go from idea to MVP. AI-Powered, Human-Backed.",
    },
    {
      title: "AI-Powered, Human-Backed",
      content:
        "Get 24/7 help from your AI Co-founder and access expert mentors to sharpen your pitch, business plan, and product.",
    },
    {
      title: "Real Funding, Real Impact",
      content:
        "Win micro-grants, pitch in our Mini Shark Tank, and get your startup off the ground—with no strings attached.",
    },
  ];

  return (
    <section id="about-section" className="max-w-6xl mx-auto mt-12 md:mt-44">
      <FadeInSection>
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="mx-auto text-sm md:text-base px-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Goldfish Ladder is a launchpad for high school innovators. We
            empower teenage founders to take their first steps into
            entrepreneurship—with tools, mentorship, and real funding. From idea
            to execution, our platform provides AI support, expert guidance, and
            opportunities to pitch in our Mini Shark Tank. Our mission is
            simple: make building a startup as accessible as starting a School
            project.
          </motion.p>
        </div>
      </FadeInSection>

      <motion.div
        className="bg-primaryColor px-2 py-6 md:px-16 md:py-11 rounded-3xl mx-2 md:mx-20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.h2
          className="text-center text-white text-4xl md:text-6xl font-bold mb-8 md:mb-11 mt-[30px]"
          animate={
            isVisible
              ? {
                  textShadow: [
                    "0px 0px 0px rgba(0,0,0,0)",
                    "0px 5px 10px rgba(0,0,0,0.2)",
                    "0px 0px 0px rgba(0,0,0,0)",
                  ],
                }
              : {}
          }
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          Why Us?
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-2">
          {cardContent.map((card, index) => (
            <AboutUsCard
              key={index}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
