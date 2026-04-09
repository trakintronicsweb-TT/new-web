// Gallery.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './gallery.css';
import GalleryPopup from './GalleryPopup';
import SEO from '../components/SEO';

// Import Workshop Images (8 images)
import workshop1 from './../assets/images/Workshop/workshop1.jpg';
import workshop2 from './../assets/images/Workshop/workshop2.jpg';
import workshop3 from './../assets/images/Workshop/workshop3.jpg';
import workshop4 from './../assets/images/Workshop/workshop4.jpg';
import workshop5 from './../assets/images/Workshop/workshop5.jpg';
import workshop6 from './../assets/images/Workshop/workshop6.jpg';
import workshop7 from './../assets/images/Workshop/workshop7.jpg';
import workshop8 from './../assets/images/Workshop/workshop8.jpg';

// Import Internship Images (17 images)
import internship1 from './../assets/images/internship/Internship1.jpeg';
import internship2 from './../assets/images/internship/Internship2.jpeg';
import internship3 from './../assets/images/internship/Internship3.jpg';
import internship4 from './../assets/images/internship/Internship4.jpeg';
import internship5 from './../assets/images/internship/Internship5.jpg';
import internship6 from './../assets/images/internship/Internship6.jpeg';
import internship7 from './../assets/images/internship/Internship7.jpg';
import internship8 from './../assets/images/internship/Internship8.jpeg';
import internship9 from './../assets/images/internship/Internship9.jpg';
import internship10 from './../assets/images/internship/Internship10.jpeg';
import internship11 from './../assets/images/internship/Internship11.jpg';
import internship12 from './../assets/images/internship/Internship12.jpeg';
import internship13 from './../assets/images/internship/Internship13.jpeg';
import internship14 from './../assets/images/internship/Internship14.jpeg';
import internship15 from './../assets/images/internship/Internship15.jpeg';
import internship16 from './../assets/images/internship/Internship16.jpg';
import internship17 from './../assets/images/internship/Internship17.jpg';

// Import Project Images (19 images)
import project1 from './../assets/images/Project/Project1.jpeg';
import project2 from './../assets/images/Project/Project2.jpeg';
import project3 from './../assets/images/Project/Project3.jpeg';
import project4 from './../assets/images/Project/Project4.jpeg';
import project5 from './../assets/images/Project/Project5.jpeg';
import project6 from './../assets/images/Project/Project6.jpeg';
import project7 from './../assets/images/Project/Project7.jpeg';
import project8 from './../assets/images/Project/Project8.jpeg';
import project9 from './../assets/images/Project/Project9.jpeg';
import project10 from './../assets/images/Project/Project10.jpeg';
import project11 from './../assets/images/Project/Project11.jpeg';
import project12 from './../assets/images/Project/Project12.jpeg';
import project13 from './../assets/images/Project/Project13.jpeg';
import project14 from './../assets/images/Project/Project14.jpeg';
import project15 from './../assets/images/Project/Project15.jpeg';
import project16 from './../assets/images/Project/Project16.jpeg';
import project17 from './../assets/images/Project/Project17.jpeg';
import project18 from './../assets/images/Project/Project18.jpeg';
import project19 from './../assets/images/Project/Project19.jpeg';

// Icons Components
const CameraIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const AllIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const ServiceIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Categories data - REMOVED pcb, robotics, iot, power categories
const categories = [
  { id: 'all', label: 'All Projects', icon: <AllIcon /> },
  { id: 'workshop', label: 'Workshops', icon: <CameraIcon /> },
  { id: 'internship', label: 'Internships', icon: <CameraIcon /> },
  { id: 'services', label: 'Services', icon: <ServiceIcon /> },
  { id: 'videos', label: 'Videos', icon: <PlayIcon /> },
];

// Stats data
const stats = [
  { number: '2500+', label: 'Projects Completed' },
  { number: '75+', label: 'Clients Served' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '24/7', label: 'Support Available' },
];

// Photo-type gallery item
const generatePhotoItem = (id, title, category, imageSrc, alt = '') => ({
  id: `img-${id}`,
  type: 'photo',
  title,
  category,
  src: imageSrc,
  thumb: imageSrc, // Same image for thumb and full size
  alt,
});

// Video-type gallery item
const generateVideoItem = (id, title, category, videoUrl, thumb) => ({
  id: `vid-${id}`,
  type: 'video',
  title,
  category,
  videoUrl,
  thumb,
});

// Workshop Images Array (8 images)
const workshopImages = [
  generatePhotoItem(100, 'Advanced PCB Design Workshop', 'workshop', workshop1, 'Students learning PCB design techniques'),
  generatePhotoItem(101, 'Soldering Techniques Training', 'workshop', workshop2, 'Hands-on soldering workshop'),
  generatePhotoItem(102, 'Microcontroller Programming Session', 'workshop', workshop3, 'Programming Arduino and Raspberry Pi'),
  generatePhotoItem(103, 'Circuit Analysis Workshop', 'workshop', workshop4, 'Analyzing electronic circuits'),
  generatePhotoItem(104, 'Embedded Systems Training', 'workshop', workshop5, 'Embedded systems development'),
  generatePhotoItem(105, 'IoT Device Building', 'workshop', workshop6, 'Building IoT devices from scratch'),
  generatePhotoItem(106, 'Power Electronics Workshop', 'workshop', workshop7, 'Power electronics training session'),
  generatePhotoItem(107, 'Project Development Session', 'workshop', workshop8, 'Final project development workshop'),
];

// Internship Images Array (17 images)
const internshipImages = [
  generatePhotoItem(200, 'Internship Cohort 2024 - Batch 1', 'internship', internship1, 'First batch of 2024 interns'),
  generatePhotoItem(201, 'PCB Design Internship', 'internship', internship2, 'Interns working on PCB layouts'),
  generatePhotoItem(202, 'Robotics Project Team', 'internship', internship3, 'Interns building robotic arm'),
  generatePhotoItem(203, 'IoT Development Interns', 'internship', internship4, 'IoT project development session'),
  generatePhotoItem(204, 'Testing and Quality Assurance', 'internship', internship5, 'Interns performing quality tests'),
  generatePhotoItem(205, 'Embedded Programming', 'internship', internship6, 'Microcontroller programming training'),
  generatePhotoItem(206, 'Circuit Assembly Team', 'internship', internship7, 'Circuit assembly and soldering'),
  generatePhotoItem(207, 'Project Presentation Day', 'internship', internship8, 'Interns presenting final projects'),
  generatePhotoItem(208, 'Mentorship Session', 'internship', internship9, 'Senior engineers mentoring interns'),
  generatePhotoItem(209, 'Hardware Testing Lab', 'internship', internship10, 'Testing electronic components'),
  generatePhotoItem(210, 'Software Development Team', 'internship', internship11, 'Developing control software'),
  generatePhotoItem(211, 'Product Design Workshop', 'internship', internship12, 'Product design and prototyping'),
  generatePhotoItem(212, 'Team Building Activity', 'internship', internship13, 'Intern team building exercise'),
  generatePhotoItem(213, 'Industry Visit', 'internship', internship14, 'Visit to electronics manufacturing unit'),
  generatePhotoItem(214, 'Final Project Demo', 'internship', internship15, 'Demonstrating completed projects'),
  generatePhotoItem(215, 'Certificate Distribution', 'internship', internship16, 'Certificate distribution ceremony'),
  generatePhotoItem(216, 'Alumni Meet 2024', 'internship', internship17, 'Internship alumni gathering'),
];

// Project Services Images Array (19 images)
const projectImages = [
  generatePhotoItem(300, 'Industrial Automation System', 'services', project1, 'Custom industrial automation solution'),
  generatePhotoItem(301, 'Medical Device Development', 'services', project2, 'Medical electronics device'),
  generatePhotoItem(302, 'Smart Home Solution', 'services', project3, 'Complete smart home automation'),
  generatePhotoItem(303, 'Renewable Energy System', 'services', project4, 'Solar power monitoring system'),
  generatePhotoItem(304, 'Agricultural IoT Device', 'services', project5, 'IoT device for agriculture'),
  generatePhotoItem(305, 'Automotive Electronics', 'services', project6, 'Automotive control systems'),
  generatePhotoItem(306, 'Consumer Electronics Product', 'services', project7, 'Mass production electronics'),
  generatePhotoItem(307, 'Telecommunications Equipment', 'services', project8, 'Telecom hardware development'),
  generatePhotoItem(308, 'Security System Installation', 'services', project9, 'Electronic security systems'),
  generatePhotoItem(309, 'Research & Development Lab', 'services', project10, 'R&D facility setup'),
  generatePhotoItem(310, 'Prototyping Services', 'services', project11, 'Rapid prototyping workshop'),
  generatePhotoItem(311, 'Testing and Certification', 'services', project12, 'Product testing and certification'),
  generatePhotoItem(312, 'Manufacturing Setup', 'services', project13, 'Electronics manufacturing line'),
  generatePhotoItem(313, 'Quality Control Process', 'services', project14, 'Quality assurance procedures'),
  generatePhotoItem(314, 'Supply Chain Management', 'services', project15, 'Component sourcing and management'),
  generatePhotoItem(315, 'After-Sales Support', 'services', project16, 'Technical support and maintenance'),
  generatePhotoItem(316, 'Custom PCB Fabrication', 'services', project17, 'Custom PCB manufacturing'),
  generatePhotoItem(317, 'Embedded Software Development', 'services', project18, 'Firmware and software development'),
  generatePhotoItem(318, 'System Integration Project', 'services', project19, 'Complete system integration'),
];

// Gallery content - REMOVED SVG cards (Advanced PCB Design, Industrial Robotics Arm, Smart IoT Hub, High Power SMPS)
const galleryItems = [
  // Workshop Images
  ...workshopImages,

  // Internship Images
  ...internshipImages,

  // Project Services Images
  ...projectImages,

  // Videos from Trakin Tronics YouTube channel
  generateVideoItem(5, 'Introduction To IOT & Arduino Sensors', 'videos', 'https://www.youtube.com/embed/th4Dqtdsqho', 'https://img.youtube.com/vi/th4Dqtdsqho/hqdefault.jpg'),
  generateVideoItem(6, 'Trakin Tronics Project Demo', 'videos', 'https://www.youtube.com/embed/EhFED7vayxc', 'https://img.youtube.com/vi/EhFED7vayxc/hqdefault.jpg'),
  generateVideoItem(7, 'Electronics Workshop Showcase', 'videos', 'https://www.youtube.com/embed/6XVvTjBEbwk', 'https://img.youtube.com/vi/6XVvTjBEbwk/hqdefault.jpg'),
  generateVideoItem(8, 'Industrial Automation Demo', 'videos', 'https://www.youtube.com/embed/mxQTtfjyjyU', 'https://img.youtube.com/vi/mxQTtfjyjyU/hqdefault.jpg'),
];

// Gallery Card Component
const GalleryCard = ({ item, onClick, index }) => {
  const renderContent = () => {
    if (item.type === 'photo') {
      return (
        <div className="w-full h-64 rounded-xl overflow-hidden relative group cursor-pointer transform transition-all duration-500 hover:scale-[1.02]">
          <img
            src={item.src}
            alt={item.alt || item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      );
    }
    if (item.type === 'video') {
      return (
        <div className="w-full h-64 rounded-xl overflow-hidden relative group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] bg-gray-800/30 flex items-center justify-center">
          <img src={item.thumb} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="p-4 rounded-full bg-white/10 border border-white/20">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="group relative fade-in-item cursor-pointer focus:outline-none focus:ring-4 focus:ring-cyan-500 rounded-2xl"
      onClick={() => onClick(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(item);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View exact details of ${item.title}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {renderContent()}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button tabIndex={-1} aria-hidden="true" className="p-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white hover:bg-gray-800/80 transition-colors focus:outline-none">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Curated Section Component
const CuratedSection = ({ title, description, items, columns = 3, onClick }) => {
  const gridCols = columns === 4 ? 'sm:grid-cols-2 md:grid-cols-4' :
    columns === 3 ? 'sm:grid-cols-2 md:grid-cols-3' :
      'sm:grid-cols-2 md:grid-cols-2';

  return (
    <section className="py-12 px-4 container mx-auto animate-fade-in-up">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      {description && <p className="text-gray-400 mb-6 max-w-2xl">{description}</p>}
      <div className={`grid ${gridCols} gap-6`}>
        {items.map((item, idx) => (
          <div key={item.id} className="fade-in-item" style={{ animationDelay: `${idx * 80}ms` }}>
            {item.type === 'video' ? (
              <div className="rounded-xl overflow-hidden bg-gray-800/30 border border-gray-700">
                <div className="relative pb-[56.25%]">
                  <iframe
                    title={item.title}
                    src={item.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <div className="text-white font-bold">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.category.toUpperCase()}</div>
                </div>
              </div>
            ) : (
              <div onClick={() => onClick(item)} className="cursor-pointer group">
                <div className="rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={item.src}
                    alt={item.alt || item.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Main Gallery Component
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Handle item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  };

  // Handle popup close
  const handlePopupClose = () => {
    setIsPopupOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedItem(null), 300);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isPopupOpen) {
        handlePopupClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isPopupOpen]);

  // Filter logic
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200"
    >
      <SEO title="Gallery" description="Explore TRAKIN TRONICS' electronics project portfolio — 2500+ projects, workshops, internship photos & video demos. Amravati's best electronics lab." />
      {/* Fixed padding top to account for navbar */}
      <div className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-12 md:py-20 px-4 animate-fade-in-up">
          <div className="container mx-auto relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-6">
                <CameraIcon />
                <span className="ml-2 text-sm text-gray-300">Project Portfolio Gallery</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block text-white">Our Complete</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Electronics Portfolio
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Explore our comprehensive collection featuring 8 workshop sessions, 17 internship cohorts,
                19 professional service projects, and video demonstrations.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 md:py-12 px-4 container mx-auto animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-6 text-center hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 80}ms` }}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 md:py-8 px-4 animate-fade-in-up">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 rounded-xl transition-all duration-300 text-sm md:text-base ${activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:bg-gray-800/80 hover:border-gray-600'
                    }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Gallery Grid */}
        <section className="py-8 md:py-12 px-4 container mx-auto animate-fade-in-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={handleItemClick}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Workshop Section */}
        <CuratedSection
          title="Workshop Sessions (8 Sessions)"
          items={workshopImages}
          columns={4}
          onClick={handleItemClick}
        />

        {/* Internship Section */}
        <CuratedSection
          title="Internship Program (17 Cohorts)"
          items={internshipImages}
          columns={4}
          onClick={handleItemClick}
        />

        {/* Project Services Section */}
        <CuratedSection
          title="Project Services (19 Projects)"
          items={projectImages}
          columns={4}
          onClick={handleItemClick}
        />

        {/* Videos Section */}
        <CuratedSection
          title="Video Demonstrations"
          items={galleryItems.filter(i => i.type === 'video')}
          columns={4}
          onClick={handleItemClick}
        />



        {/* CTA */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30"></div>

              <div className="relative py-12 md:py-16 px-6 md:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                  Have a <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Project</span> in Mind?
                </h2>

                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 md:mb-10">
                  Let's bring your electronics ideas to life with our expertise and innovative solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/projectbooking"
                    aria-label="Start Your Custom Project"
                    className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 inline-block"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    to="/services"
                    aria-label="View All Our Case Studies"
                    className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-bold rounded-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 inline-block"
                  >
                    View All Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <GalleryPopup
          item={selectedItem}
          onClose={handlePopupClose}
        />
      )}
    </motion.div>
  );
};

export default Gallery;