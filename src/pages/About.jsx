'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Zap, Cpu, Users, Award, Quote, Target, Eye,
  Rocket, GraduationCap, Calendar
} from "lucide-react";
import FounderImg from "./../assets/images/founder.jpg";
import './About.css';
import SEO from '../components/SEO';

// Live Counter Hook
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, isInView, duration]);

  return [count, ref];
};

// Timeline Event Component
const TimelineEvent = ({ year, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.1 }}
    className="relative"
  >
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
          <Calendar className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-sm md:text-base font-semibold text-cyan-400 mb-1">{year}</div>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base">{desc}</p>
      </div>
    </div>
  </motion.div>
);

// Why Choose Us Card Component
const ReasonCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="glass card-hover rounded-2xl md:rounded-3xl p-6 md:p-8 text-center group"
  >
    <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
      {React.cloneElement(icon, { className: "w-7 h-7 md:w-8 md:h-8 text-white" })}
    </div>
    <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">{title}</h3>
    <p className="text-gray-300 text-sm md:text-base">{description}</p>
  </motion.div>
);

export default function About() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [projects, projectsRef] = useCountUp(2500);
  const [students, studentsRef] = useCountUp(3000);
  const [institutions, instRef] = useCountUp(20);
  const [experience, expRef] = useCountUp(10);

  const timelineEvents = [
    { year: "2014", title: "Journey Begins", desc: "Started teaching electronics locally" },
    { year: "2017", title: "TRAKIN TRONICS Founded", desc: "Official company & lab launch" },
    { year: "2019", title: "1000+ Students", desc: "Crossed major training milestone" },
    { year: "2021", title: "Industrial Projects", desc: "Began automation & IoT solutions" },
    { year: "2023", title: "20+ Institutions", desc: "Partnered with colleges across MH" },
    { year: "2025", title: "2500+ Projects", desc: "Delivered 2500+ successful projects" },
  ];

  const whyChooseUs = [
    {
      icon: <Target />,
      title: "Industry Focused",
      description: "Curriculum designed with real industry requirements"
    },
    {
      icon: <Users />,
      title: "Expert Mentors",
      description: "Learn from professionals with 10+ years experience"
    },
    {
      icon: <Rocket />,
      title: "Hands-on Projects",
      description: "Work on live projects from day one"
    },
    {
      icon: <Award />,
      title: "100% Placement Support",
      description: "Guidance for internships and job placements"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO title="About Us" description="Learn about TRAKIN TRONICS — Amravati's leading electronics lab offering workshops, internships, IoT solutions, PCB design, and robotics training since 2017." />
      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800 px-4 py-3 md:hidden">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            About TRAKIN TRONICS
          </motion.a>
          <a
            href="/contact"
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-sm font-semibold transition"
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white overflow-x-hidden pt-16 md:pt-0">
        {/* Floating Particles - Optimized for mobile */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-20 blur-sm"
              style={{
                top: `${15 + i * 15}%`,
                left: `${5 + i * 15}%`,
                animation: `float-particles ${7 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
          {/* Parallax Background Glow */}
          <motion.div
            className="absolute inset-0 opacity-10 md:opacity-20"
            style={{
              background: "radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 60%)",
              y: backgroundY,
            }}
          />

          <div className="container mx-auto text-center relative z-10 max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-glow inline-block"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 leading-tight">
                <span className="animate-gradient">TRAKIN</span>
                <span className="text-white block sm:inline"> TRONICS</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-300 font-light">
                Pioneering Electronics Innovation Since 2017
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 md:mt-8 lg:mt-10 text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2"
            >
              Transforming ideas into reality through cutting-edge electronics, robotics, IoT, and hands-on education in Amravati.
            </motion.p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass card-hover glow-border rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center group"
            >
              <Target className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-cyan-400 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Our Mission</h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300">
                To democratize electronics education and deliver world-class embedded systems, IoT, and automation solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass card-hover glow-border rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center group"
            >
              <Eye className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-purple-400 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Our Vision</h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300">
                To be India's most trusted name in practical electronics and industrial innovation by 2030.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16"
            >
              Meet the <span className="animate-gradient">Founder</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <div className="glow-border rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                  <img
                    src={FounderImg}
                    alt="Mr. Tejas Mendhe - Founder"
                    className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover zoom-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">Tejas Mendhe</h3>
                    <p className="text-cyan-300 text-sm md:text-base lg:text-lg">Founder & CEO</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6 md:space-y-8"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Mr. Tejas Mendhe</h3>
                  <p className="text-lg md:text-xl lg:text-2xl text-cyan-400 mb-4 md:mb-6">Founder, CEO & Lead Engineer</p>
                  <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    With over <strong>10 years</strong> of expertise in embedded systems, PCB design, IoT, robotics, and industrial automation, Tejas founded TRAKIN TRONICS to bridge the gap between theory and real-world engineering.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mt-4 md:mt-6">
                    His mission: empower the next generation with hands-on skills that industries actually need.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div ref={projectsRef} className="glass rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                    <Rocket className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mx-auto mb-2 md:mb-3" />
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{projects}+</div>
                    <p className="text-gray-400 text-sm md:text-base">Projects</p>
                  </div>
                  <div ref={studentsRef} className="glass rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                    <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-purple-400 mx-auto mb-2 md:mb-3" />
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{students}+</div>
                    <p className="text-gray-400 text-sm md:text-base">Students Trained</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              { ref: expRef, value: experience, label: "Years Experience", icon: <Zap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /> },
              { ref: projectsRef, value: projects, label: "Projects", icon: <Cpu className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /> },
              { ref: studentsRef, value: students, label: "Students", icon: <Users className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /> },
              { ref: instRef, value: institutions, label: "Institutions", icon: <Award className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                ref={stat.ref}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass card-hover text-center p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl"
              >
                <div className="text-cyan-400 mb-2 md:mb-3 lg:mb-4">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 md:mb-2">{stat.value}+</div>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16"
            >
              Our <span className="animate-gradient">Journey</span>
            </motion.h2>

            <div className="relative">
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 transform -translate-x-1/2"></div>

              {/* Timeline events */}
              <div className="space-y-8 md:space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`relative ${index % 2 === 0 ? 'md:pr-1/2 md:pl-8' : 'md:pl-1/2 md:pr-8'
                      } ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <TimelineEvent {...event} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Message from Founder */}
        <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass glow-border rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 relative"
            >
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-cyan-400 mb-6" />
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 italic mb-6 md:mb-8">
                "I started TRAKIN TRONICS with a simple belief: practical skills can transform careers and create real impact. Every project we deliver, every student we train, brings us closer to our vision of an India where electronics innovation is accessible to all."
              </p>
              <div className="border-t border-gray-700/50 pt-4 md:pt-6">
                <p className="text-xl md:text-2xl font-bold">Tejas Mendhe</p>
                <p className="text-cyan-400">Founder & CEO</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16"
            >
              Why <span className="animate-gradient">Choose Us</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {whyChooseUs.map((reason, index) => (
                <ReasonCard key={index} {...reason} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.01 }}
            className="container mx-auto max-w-4xl glass card-hover rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center bg-gradient-to-br from-cyan-900/20 to-purple-900/20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              Start Your <span className="animate-gradient">Journey</span> Today
            </h2>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              Join hundreds of successful engineers and innovators who started their journey with TRAKIN TRONICS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-6 md:mt-8">
              <motion.a
                href="https://wa.me/918767841367"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl hover:shadow-xl md:hover:shadow-2xl hover:shadow-cyan-500/30 transition w-full sm:w-auto"
              >
                Contact Now
              </motion.a>
              <motion.a
                href="/gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 border-2 border-cyan-500 text-cyan-400 rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl hover:bg-cyan-500/10 transition w-full sm:w-auto"
              >
                View Gallery
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-12 text-center text-gray-400 text-xs md:text-sm px-4">
          © {new Date().getFullYear()} TRAKIN TRONICS • Learn • Build • Innovate 💡
        </footer>
      </div>

      {/* CSS Styles */}
      <style>{`
        @keyframes float-particles {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        
        @media (min-width: 768px) {
          @keyframes float-particles {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
        }
        
        .hero-glow {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        @media (min-width: 768px) {
          .hero-glow {
            text-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
          }
        }
        
        .animate-gradient {
          background: linear-gradient(90deg, #8b5cf6, #06b6d4, #8b5cf6);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 3s linear infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        
        .glass {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 640px) {
          .glass {
            backdrop-filter: blur(5px);
          }
        }
        
        .glow-border {
          position: relative;
        }
        
        .glow-border::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(45deg, #8b5cf6, #06b6d4, #8b5cf6);
          border-radius: inherit;
          z-index: -1;
          opacity: 0.3;
          filter: blur(5px);
        }
        
        @media (min-width: 768px) {
          .glow-border::before {
            inset: -2px;
            filter: blur(10px);
          }
        }
        
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        @media (min-width: 768px) {
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
        }
        
        .zoom-hover {
          transition: transform 0.8s ease;
        }
        
        .zoom-hover:hover {
          transform: scale(1.05);
        }
        
        /* Timeline specific styles */
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          transform: translateX(-50%);
          border-radius: 2px;
          opacity: 0.3;
        }
        
        /* Touch-friendly button sizes */
        @media (max-width: 640px) {
          button, 
          a[role="button"],
          input[type="submit"] {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* Safe area insets for iOS */
        @supports (padding: max(0px)) {
          .container {
            padding-left: max(1rem, env(safe-area-inset-left));
            padding-right: max(1rem, env(safe-area-inset-right));
          }
        }
      `}</style>
    </motion.div>
  );
}