'use client';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Rocket, GraduationCap, Briefcase, Zap, Cpu,
  Users, Award, Sparkles, ArrowRight, Target,
  BookOpen, Shield, Clock, Star, TrendingUp
} from 'lucide-react';
import heroImage from './../assets/images/electronics-hero.png';
import './Home.css';
import SEO from '../components/SEO';

export default function Home() {
  const navigate = useNavigate();

  // Navigation handler for Learn More buttons
  const handleLearnMoreClick = () => {
    navigate('/contact');
  };

  const features = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Workshops",
      description: "Hands-on electronics workshops for schools, colleges, and hobbyists to enhance practical skills.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      delay: 0.1
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Internships",
      description: "Real-world electronics internships to gain experience and build projects that matter.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      delay: 0.2
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "College Projects",
      description: "Customized electronics projects to help students complete academic and practical requirements.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      delay: 0.3
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Industrial Solutions",
      description: "Professional IoT, automation, and embedded systems solutions for industries.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      delay: 0.4
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Corporate Training",
      description: "Advanced electronics training programs for professionals and corporate teams.",
      color: "text-green-400",
      bg: "bg-green-500/10",
      delay: 0.5
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Quality Assurance",
      description: "100% tested and certified solutions with comprehensive documentation.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      delay: 0.6
    }
  ];

  const stats = [
    { value: "2500+", label: "Projects Completed", icon: <Rocket className="w-8 h-8 mx-auto" /> },
    { value: "3000+", label: "Students Trained", icon: <GraduationCap className="w-8 h-8 mx-auto" /> },
    { value: "20+", label: "Partner Institutions", icon: <Award className="w-8 h-8 mx-auto" /> },
    { value: "10+", label: "Years Experience", icon: <Clock className="w-8 h-8 mx-auto" /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white overflow-x-hidden"
    >
      <SEO title="Home" description="TRAKIN TRONICS — Amravati's #1 electronics lab for workshops, college projects, internships, IoT, PCB design, robotics & industrial automation. 2500+ projects delivered." />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30 blur-sm"
            style={{
              top: `${15 + i * 11}%`,
              left: `${5 + i * 13}%`,
              animation: `float-particles ${7 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Pioneering Electronics Since 2017</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                <span className="animate-gradient">TRAKIN</span>
                <span className="text-white"> TRONICS</span>
              </h1>

              <p className="text-2xl md:text-4xl text-cyan-300 font-light mb-8">
                Learn, Explore, Innovate
              </p>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Empowering students, hobbyists, and engineers with cutting-edge electronics workshops,
                projects, and internships in Amravati. Transform ideas into reality with hands-on expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <motion.a
                  href="/projectbooking"
                  aria-label="Book your custom electronics project"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Book Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="/about"
                  aria-label="Learn more about Trakin Tronics"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-cyan-500 text-cyan-400 rounded-2xl font-bold text-xl hover:bg-cyan-500/10 transition flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="glass glow-border rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Electronics Workshop"
                  className="w-full h-auto object-cover zoom-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-cyan-500/20 rounded-xl">
                      <Zap className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Hands-on Learning</h3>
                      <p className="text-cyan-300">Real projects • Expert guidance • Industry exposure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass card-hover text-center p-4 sm:p-6 lg:p-8 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center"
              >
                <div className="text-cyan-400 mb-2 md:mb-4">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 md:mb-2 animate-gradient whitespace-nowrap">{stat.value}</div>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - UPDATED */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="animate-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive electronics solutions tailored for students, professionals, and industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay }}
                whileHover={{ y: -10 }}
                className={`glass card-hover glow-border rounded-3xl p-8 ${feature.bg}`}
              >
                <div className={`${feature.color} mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>

                {/* UPDATED: Learn More button with navigation */}
                <motion.div
                  onClick={handleLearnMoreClick}
                  className="mt-6 flex items-center gap-2 text-sm cursor-pointer group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className={`${feature.color} group-hover:underline transition-all duration-300`}>
                    Learn more
                  </span>
                  <ArrowRight className={`w-4 h-4 ${feature.color} group-hover:translate-x-1 transition-transform duration-300`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="glass glow-border rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Why Choose <span className="animate-gradient">TRAKIN TRONICS</span>
                </h2>

                <div className="space-y-6">
                  {[
                    { icon: <Star className="w-6 h-6" />, text: "Industry-experienced instructors with 10+ years expertise" },
                    { icon: <Target className="w-6 h-6" />, text: "100% practical, hands-on learning approach" },
                    { icon: <Shield className="w-6 h-6" />, text: "Certified programs with placement assistance" },
                    { icon: <TrendingUp className="w-6 h-6" />, text: "Continuous support and project guidance" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-cyan-500/20 rounded-lg">
                        <div className="text-cyan-400">{item.icon}</div>
                      </div>
                      <p className="text-lg text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-2xl" />

                  {/* Animated Circuit Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `pulse ${2 + Math.random() * 3}s infinite`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 border-2 border-cyan-500/30 rounded-full"
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Zap className="w-16 h-16 text-cyan-400" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="container mx-auto max-w-4xl glass card-hover rounded-3xl p-16 text-center bg-gradient-to-br from-cyan-900/20 to-purple-900/20"
        >
          <h2 className="text-5xl font-bold mb-8">
            Ready to Build Something <span className="animate-gradient">Amazing</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Book your electronics project or workshop today and start learning hands-on skills that industries demand!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="/projectbooking"
              aria-label="Book your electronics project now"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <Rocket className="w-5 h-5" />
              Book Your Project
            </motion.a>

            <motion.a
              href="/contact"
              aria-label="Get in touch for a consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-cyan-500 text-cyan-400 rounded-2xl font-bold text-xl hover:bg-cyan-500/10 transition flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <ArrowRight className="w-5 h-5" />
              Get Consultation
            </motion.a>
          </div>

          <p className="mt-8 text-gray-400">
            <Clock className="w-4 h-4 inline mr-2" />
            Limited slots available for next month. Book now!
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}