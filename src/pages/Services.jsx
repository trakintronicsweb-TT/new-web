'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap, Cpu, BookOpen, Bot, Wrench, CircuitBoard, Code2,
  Download, ArrowRight, Star, Users, Clock, BarChart3,
  Check, MessageCircle, Award,
} from "lucide-react";
import SEO from '../components/SEO';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};


// Reusable Service Card Component
const ServiceCard = ({ service, isHovered, onHover }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={() => onHover(null)}
      className="group relative bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />

      {service.popular && (
        <div className="absolute top-5 right-5 z-10 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold rounded-full animate-pulse">
          <Star className="w-3 h-3" fill="currentColor" />
          Popular
        </div>
      )}

      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 text-white`}>
        {service.icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
        {service.name}
      </h3>

      <p className="text-gray-400 text-sm mb-6 line-clamp-3">{service.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {service.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs bg-gray-800/70 border border-gray-700 rounded-full text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-2.5 mb-7">
        {service.features.slice(0, 3).map((feat) => (
          <div key={feat} className="flex items-center gap-2 text-sm text-gray-300">
            <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>{feat}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-sm text-gray-400 mb-7">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{service.duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <BarChart3 className="w-4 h-4" />
          <span>{service.level}</span>
        </div>
      </div>

      <Link
        to="/contact"
        aria-label={`Inquire about ${service.name}`}
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        View Details
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>

      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Services", icon: <Zap className="w-5 h-5" /> },
    { id: "projects", name: "Projects", icon: <Cpu className="w-5 h-5" /> },
    { id: "training", name: "Training", icon: <BookOpen className="w-5 h-5" /> },
    { id: "robotics", name: "Robotics", icon: <Bot className="w-5 h-5" /> },
    { id: "support", name: "Support", icon: <Wrench className="w-5 h-5" /> },
  ];

  const services = [
    { id: 1, category: "projects", name: "Industry Electronics Projects", description: "End-to-end electronics project design and development using industry-grade components.", icon: <Cpu className="w-11 h-11" />, features: ["Circuit Design", "PCB Layout", "Testing", "Documentation"], duration: "2-8 Weeks", level: "Beginner to Advanced", color: "from-cyan-500 to-blue-600", popular: true, tags: ["IoT", "Embedded", "Power Electronics"] },
    { id: 2, category: "robotics", name: "Robotics & Automation", description: "Advanced robotics solutions with AI, vision, and real-time control.", icon: <Bot className="w-11 h-11" />, features: ["Drones", "AI Vision", "PLC", "ROS"], duration: "4-12 Weeks", level: "Intermediate+", color: "from-purple-500 to-pink-600", popular: true, tags: ["AI/ML", "ROS", "Automation"] },
    { id: 3, category: "training", name: "Professional Workshops", description: "Hands-on intensive training with live projects and mentors.", icon: <BookOpen className="w-11 h-11" />, features: ["Live Sessions", "Projects", "Certificate"], duration: "1-3 Days", level: "All Levels", color: "from-orange-500 to-red-600", popular: false, tags: ["Workshop", "Bootcamp"] },
    { id: 4, category: "projects", name: "PCB Design & Fabrication", description: "Professional multi-layer PCB design with fast prototyping.", icon: <CircuitBoard className="w-11 h-11" />, features: ["Schematic", "Layout", "Gerbers", "Assembly"], duration: "1-4 Weeks", level: "Intermediate+", color: "from-green-500 to-emerald-600", popular: false, tags: ["Altium", "KiCad"] },
    { id: 5, category: "support", name: "Maintenance & Support", description: "24/7 support, repair, calibration & AMC plans.", icon: <Wrench className="w-11 h-11" />, features: ["24/7", "On-site", "Calibration"], duration: "Ongoing", level: "All Levels", color: "from-blue-500 to-indigo-600", popular: false, tags: ["AMC", "Repair"] },
    { id: 6, category: "training", name: "IoT & Embedded Systems", description: "Master ESP32, RTOS, Cloud & Security.", icon: <Code2 className="w-11 h-11" />, features: ["ESP32", "FreeRTOS", "AWS IoT"], duration: "3-8 Weeks", level: "Intermediate+", color: "from-amber-500 to-yellow-600", popular: true, tags: ["IoT", "Cloud"] },
  ];

  const stats = [
    { number: "2500+", label: "Projects Delivered", icon: <Cpu className="w-7 h-7" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-7 h-7" fill="currentColor" /> },
    { number: "50+", label: "Industry Partners", icon: <Users className="w-7 h-7" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-7 h-7" /> },
  ];

  const filteredServices = activeFilter === "all" ? services : services.filter(s => s.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white pt-20"
    >
      <SEO title="Services" description="Explore TRAKIN TRONICS' professional electronics services in Amravati — PCB design, IoT solutions, robotics, automation, workshops & training. Best electronics lab in Maharashtra." />

      {/* HERO SECTION */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-purple-900/20" />
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800/60 backdrop-blur border border-gray-700 rounded-full text-sm mb-8">
            <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
            Premium Electronics Services
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-bold mb-6">
            Professional <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Electronics Solutions
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            From concept to deployment — we deliver excellence in electronics, robotics & training.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="/brochure.pdf" target="_blank" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition">
              <Download className="w-5 h-5" /> Download Brochure
            </a>
            <Link to="/contact" className="px-8 py-4 border border-gray-600 rounded-xl font-semibold hover:bg-gray-800/50 transition flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" /> Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION - FIXED HERE! */}
      <section className="py-16 px-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-8 text-center hover:scale-105 transition"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl mb-5">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="py-10 px-6">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-medium transition-all ${activeFilter === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-12 px-6 pb-24">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isHovered={hoveredCard === service.id}
              onHover={setHoveredCard}
            />
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-purple-900/30 backdrop-blur border border-gray-700 p-16 text-center">
            <Award className="w-24 h-24 mx-auto mb-8 text-cyan-400" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Transform</span> Your Ideas?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Get expert guidance and flawless execution for your next electronics project.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold hover:from-cyan-400 hover:to-blue-500 transition">
                Get Free Consultation
              </Link>
              <a href="tel:+918767841367" className="px-10 py-5 border border-gray-500 rounded-xl font-bold hover:bg-gray-800/50 transition">
                Call +91 87678 41367
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}