'use client';

import React, { useState, useMemo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Phone, Mail, MessageSquare, Send, Clock,
  Instagram, Youtube, ArrowRight, Sparkles,
  Zap, CheckCircle, Navigation, ExternalLink, Shield, Lock,
  Menu, X
} from "lucide-react";
import { Helmet } from 'react-helmet-async';

// SEO Component
const SEOHead = () => {
  const businessName = "TRAKIN TRONICS";
  const businessEmail = "trakintronicsweb@gmail.com";
  const businessPhone = "+918767841367";
  const businessAddress = "Amravati, Maharashtra - 444601";
  const businessUrl = "https://trkintronics.com/contact";
  const businessDescription = "Contact TRAKIN TRONICS — Amravati's best electronics lab for college projects, training, automation, IoT solutions, PCB design, and robotics. Get expert consultation for your next innovation.";

  return (
    <Helmet>
      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${businessUrl}#organization`,
                "name": businessName,
                "url": businessUrl,
                "logo": "https://trkintronics.com/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": businessPhone,
                  "contactType": "Customer Service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi", "Marathi"]
                },
                "sameAs": [
                  "https://www.instagram.com/trakintronics_projects",
                  "https://youtube.com/@trakintronics",
                  "https://www.instagram.com/tt_internshipprogram"
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": `${businessUrl}#localbusiness`,
                "name": businessName,
                "image": "https://trkintronics.com/contact-image.jpg",
                "description": businessDescription,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": businessAddress,
                  "addressLocality": "Amravati",
                  "addressRegion": "Maharashtra",
                  "postalCode": "444601",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 21.14392188052523,
                  "longitude": 77.76054757507517
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:00",
                    "closes": "20:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "10:00",
                    "closes": "18:00"
                  }
                ],
                "telephone": businessPhone,
                "email": businessEmail,
                "url": businessUrl,
                "priceRange": "₹₹",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Electronics Projects"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Industrial Automation"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "IoT Solutions"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "PCB Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Robotics Training"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "ContactPage",
                "@id": `${businessUrl}#contactpage`,
                "name": "Contact Us",
                "description": businessDescription,
                "inLanguage": "en",
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://trkintronics.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Contact",
                      "item": businessUrl
                    }
                  ]
                },
                "mainEntity": {
                  "@type": "WebPageElement",
                  "isAccessibleForFree": true,
                  "cssSelector": ".contact-form"
                }
              }
            ]
          })
        }}
      />

      {/* Meta tags for SEO */}
      <meta name="description" content={businessDescription} />
      <meta name="keywords" content="electronics, automation, IoT, robotics, PCB design, training, projects, consultation" />
      <meta property="og:title" content={`Contact ${businessName} | Electronics & Innovation`} />
      <meta property="og:description" content={businessDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={businessUrl} />
      <meta property="og:site_name" content={businessName} />
      <link rel="canonical" href={businessUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    </Helmet>
  );
};

// Lazy loaded components
const MapSection = lazy(() => Promise.resolve({
  default: () => {
    const googleMapsLink = "https://maps.app.goo.gl/87FPPkBkieTraBLe9";
    const locationEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0415806484055!2d77.76054757507517!3d21.14392188052523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6b9e92f2a9e75%3A0x996b4373d7a41b57!2sTRKIN%20TRONICS!5e0!3m2!1sen!2sin!4v1733546565475!5m2!1sen!2sin";

    return (
      <div className="glass glow-border rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <MapPin className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
            <h3 className="text-xl md:text-2xl font-bold">Visit Our Lab</h3>
          </div>
          <motion.a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30 hover:bg-cyan-500/30 transition text-sm md:text-base w-full sm:w-auto justify-center"
          >
            <Navigation className="w-4 h-4" />
            Directions
          </motion.a>
        </div>

        <div className="relative h-full rounded-xl md:rounded-2xl overflow-hidden border border-gray-700">
          <iframe
            src={locationEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="TRAKIN TRONICS Location"
            aria-label="TRAKIN TRONICS Location Map"
          />

          <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 bg-black/80 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
              <div className="md:flex-1">
                <p className="font-bold text-sm md:text-lg">TRAKIN TRONICS</p>
                <p className="text-gray-300 text-xs md:text-sm">Electronics Lab & Training Center</p>
                <p className="text-cyan-400 text-xs md:text-sm mt-1">📍 Amravati, Maharashtra</p>
              </div>
              <div className="text-left md:text-right mt-2 md:mt-0">
                <p className="text-xs md:text-sm text-gray-300">Email:</p>
                <p className="text-xs md:text-sm font-bold text-cyan-400 break-words">trakintronicsweb@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}));

// Constants - Single Source of Truth
const BUSINESS_INFO = {
  name: "TRAKIN TRONICS",
  email: "trakintronicsweb@gmail.com",
  phone: {
    display: "87678 41367",
    formatted: "918767841367",
    tel: "+918767841367"
  },
  address: "Amravati, Maharashtra - 444601",
  location: {
    link: "https://maps.app.goo.gl/87FPPkBkieTraBLe9",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0415806484055!2d77.76054757507517!3d21.14392188052523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6b9e92f2a9e75%3A0x996b4373d7a41b57!2sTRKIN%20TRONICS!5e0!3m2!1sen!2sin!4v1733546565475!5m2!1sen!2sin"
  }
};

const WEB3FORMS_CONFIG = {
  accessKey: "ffffc5f1-c007-42e3-8184-11ebf2a00259",
  endpoint: "https://api.web3forms.com/submit"
};

const SOCIAL_MEDIA = {
  instagram: [
    {
      name: "Trakin Tronics Internship Program",
      url: "https://www.instagram.com/tt_internshipprogram?igsh=NGNvbHh0eXNodWFi",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      name: "Trakin Tronics Projects",
      url: "https://www.instagram.com/trakintronics_projects?igsh=c25za3JpMXMzcDdv",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      name: "T. T. Electronics",
      url: "https://www.instagram.com/ttelectronics_amravati?igsh=MTI5dGwzcW9sbG1tcw==",
      gradient: "from-pink-600 to-rose-600"
    },
    {
      name: "3D Printing by TT",
      url: "https://www.instagram.com/3dprinting_hub_by_tt?igsh=MTRyd2lxODc5cGR3ag==",
      gradient: "from-orange-500 to-pink-500"
    }
  ],
  mainInstagram: "https://www.instagram.com/trakintronics_projects?igsh=MXQ3NXBhaGk1NWdocA==",
  youtube: "https://youtube.com/@trakintronics?si=4IbK1zM5_xLNT0cI"
};

// Responsive Navigation Component
const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800 px-4 py-3 md:hidden">
      <div className="flex items-center justify-between">
        <motion.a
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          TRAKIN TRONICS
        </motion.a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 pb-2 space-y-2"
        >
          <a href="/" className="block py-2 px-4 rounded-lg hover:bg-gray-800/50 transition">Home</a>
          <a href="/projects" className="block py-2 px-4 rounded-lg hover:bg-gray-800/50 transition">Projects</a>
          <a href="/training" className="block py-2 px-4 rounded-lg hover:bg-gray-800/50 transition">Training</a>
          <a href="/contact" className="block py-2 px-4 rounded-lg bg-cyan-900/30 text-cyan-400">Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

// Contact Form Component
const ContactForm = ({ formData, isSubmitting, isSubmitted, onSubmit, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-8 md:py-12 px-4"
      >
        <div className="relative inline-block">
          <CheckCircle className="w-16 h-16 md:w-24 md:h-24 text-green-400 mx-auto mb-4 md:mb-6" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-green-400/10 rounded-full animate-ping"></div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Message Sent Successfully!</h3>
        <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
          Thank you! We've received your message via Web3Forms.
        </p>
        <p className="text-base md:text-lg text-cyan-400">
          We'll respond to your email within 24 hours.
        </p>
        <div className="mt-6 md:mt-8 p-4 bg-black/30 rounded-xl md:rounded-2xl max-w-md mx-auto">
          <div className="flex items-center gap-2 md:gap-3 justify-center">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-xs md:text-sm text-gray-400">
              Delivery confirmed • Email sent to: <span className="text-cyan-400">{BUSINESS_INFO.email}</span>
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 md:space-y-8 contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2 md:mb-3 text-base md:text-lg">Name *</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 md:px-6 md:py-4 bg-black/30 border border-gray-700 rounded-xl md:rounded-2xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none transition text-base md:text-lg"
            aria-required="true"
            aria-label="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2 md:mb-3 text-base md:text-lg">Email *</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full px-4 py-3 md:px-6 md:py-4 bg-black/30 border border-gray-700 rounded-xl md:rounded-2xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none transition text-base md:text-lg"
            aria-required="true"
            aria-label="Your email address"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-300 mb-2 md:mb-3 text-base md:text-lg">Subject *</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 md:px-6 md:py-4 bg-black/30 border border-gray-700 rounded-xl md:rounded-2xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none transition text-base md:text-lg appearance-none"
          aria-required="true"
          aria-label="Select subject"
        >
          <option value="">Select a subject</option>
          <option value="Project Inquiry">Project Inquiry</option>
          <option value="Training Program">Training Program</option>
          <option value="Workshop Booking">Workshop Booking</option>
          <option value="Industrial Automation">Industrial Automation</option>
          <option value="PCB Design">PCB Design</option>
          <option value="IoT Solutions">IoT Solutions</option>
          <option value="Robotics">Robotics</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-300 mb-2 md:mb-3 text-base md:text-lg">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project or inquiry in detail..."
          rows="5"
          required
          className="w-full px-4 py-3 md:px-6 md:py-4 bg-black/30 border border-gray-700 rounded-xl md:rounded-2xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none transition text-base md:text-lg resize-none"
          aria-required="true"
          aria-label="Your message"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Shield className="w-3 h-3 md:w-4 md:h-4" />
          <span>Form secured with Web3Forms</span>
        </div>
        <div className="hidden md:block w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <p className="text-xs md:text-sm">All messages are delivered to {BUSINESS_INFO.email}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto px-6 py-4 md:px-12 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl hover:shadow-xl md:hover:shadow-2xl hover:shadow-cyan-500/30 transition flex items-center justify-center gap-2 md:gap-3 disabled:opacity-70 min-h-[56px]"
          aria-label="Submit secure message"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span className="text-sm md:text-base">Securely Sending...</span>
            </>
          ) : (
            <>
              <Lock className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Send Secure Message</span>
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </>
          )}
        </motion.button>

        <motion.a
          href={`mailto:${BUSINESS_INFO.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 border-2 border-gray-700 text-gray-300 rounded-xl md:rounded-2xl font-bold hover:border-cyan-500 hover:text-cyan-400 transition flex items-center justify-center gap-2 md:gap-3 min-h-[56px]"
          aria-label="Send direct email"
        >
          <Mail className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-base">Send Direct Email</span>
        </motion.a>
      </div>
    </form>
  );
};

// Quick Contact Card Component
const QuickContactCard = ({ icon, title, details, color, bg, delay, link, linkText }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
    className={`glass card-hover glow-border rounded-2xl md:rounded-3xl p-6 md:p-8 text-center group ${bg}`}
  >
    <div className={`${color} mb-4 md:mb-6`}>
      {React.cloneElement(icon, { className: "w-6 h-6 md:w-8 md:h-8 mx-auto" })}
    </div>
    <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">{title}</h3>
    {details.map((detail, i) => (
      <p key={i} className="text-gray-300 text-sm md:text-lg mb-1 md:mb-2 break-words">{detail}</p>
    ))}
    {link && (
      <motion.a
        href={link}
        target={link.startsWith('http') ? "_blank" : "_self"}
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-1 md:gap-2 mt-3 md:mt-4 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-black/30 border border-gray-700 hover:border-cyan-500 transition text-xs md:text-sm"
        aria-label={linkText}
      >
        {linkText}
        <ExternalLink className="w-3 h-3" />
      </motion.a>
    )}
  </motion.div>
);

// Social Media Card Component
const SocialMediaCard = ({ item, index }) => (
  <motion.a
    key={index}
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, scale: 1.02 }}
    className={`rounded-2xl md:rounded-3xl p-6 md:p-8 bg-gradient-to-br ${item.gradient} text-white shadow-lg md:shadow-xl`}
    aria-label={`Follow ${item.name} on Instagram`}
  >
    <div className="w-10 h-10 md:w-14 md:h-14 mb-4 md:mb-6 rounded-xl md:rounded-2xl bg-white/20 flex items-center justify-center">
      <Instagram className="w-5 h-5 md:w-6 md:h-6" />
    </div>
    <h3 className="text-base md:text-xl font-bold line-clamp-2">{item.name}</h3>
    <p className="text-xs md:text-sm opacity-80 mt-2">Tap to Follow →</p>
  </motion.a>
);

export default function Contact() {
  // Single form state with success data preservation
  const [formState, setFormState] = useState({
    current: { name: "", email: "", subject: "", message: "" },
    submitted: { name: "", email: "", subject: "", message: "" },
    isSubmitting: false,
    isSubmitted: false,
    error: ""
  });

  // Contact info array
  const contactInfo = useMemo(() => [
    {
      icon: <MapPin />,
      title: "Our Location",
      details: [BUSINESS_INFO.name, BUSINESS_INFO.address],
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      delay: 0.1,
      link: BUSINESS_INFO.location.link,
      linkText: "Open in Maps"
    },
    {
      icon: <Phone />,
      title: "Phone Number",
      details: [BUSINESS_INFO.phone.display, "24/7 Support Available"],
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      delay: 0.2,
      link: `tel:${BUSINESS_INFO.phone.tel}`,
      linkText: "Call Now"
    },
    {
      icon: <Mail />,
      title: "Email Address",
      details: [BUSINESS_INFO.email, "For urgent queries"],
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      delay: 0.3,
      link: `mailto:${BUSINESS_INFO.email}?subject=Query%20for%20${BUSINESS_INFO.name}`,
      linkText: "Send Email"
    },
    {
      icon: <Clock />,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      delay: 0.4
    }
  ], []);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true, error: "" }));

    try {
      const formPayload = {
        access_key: WEB3FORMS_CONFIG.accessKey,
        name: formState.current.name,
        email: formState.current.email,
        subject: formState.current.subject || "Contact Form Submission",
        message: formState.current.message,
        from_name: `${BUSINESS_INFO.name} Website`,
        replyto: formState.current.email,
        redirect: "false",
        honeypot: "",
      };

      const response = await fetch(WEB3FORMS_CONFIG.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (result.success) {
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          isSubmitted: true,
          submitted: { ...prev.current },
          current: { name: "", email: "", subject: "", message: "" }
        }));

        setTimeout(() => {
          setFormState(prev => ({ ...prev, isSubmitted: false }));
        }, 5000);
      } else {
        throw new Error("Web3Forms submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);

      // Fallback: Create mailto link
      const mailtoLink = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
        `Website Contact: ${formState.current.subject || "New Message"}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.current.name}\nEmail: ${formState.current.email}\n\nMessage:\n${formState.current.message}\n\n---\nSent via ${BUSINESS_INFO.name} Website`
      )}`;

      window.open(mailtoLink, '_blank');

      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
        submitted: { ...prev.current },
        current: { name: "", email: "", subject: "", message: "" }
      }));

      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      current: { ...prev.current, [name]: value },
      error: ""
    }));
  };

  // Quick connect options
  const quickConnect = [
    {
      icon: <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-green-400" />,
      title: "WhatsApp Chat",
      description: `Instant reply • ${BUSINESS_INFO.phone.display}`,
      href: `https://wa.me/${BUSINESS_INFO.phone.formatted}`,
      bg: "bg-green-900/20",
      border: "border-green-700/30"
    },
    {
      icon: <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />,
      title: "Direct Call",
      description: "Talk to our experts",
      href: `tel:${BUSINESS_INFO.phone.tel}`,
      bg: "bg-blue-900/20",
      border: "border-blue-700/30"
    },
    {
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />,
      title: "Direct Email",
      description: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`,
      bg: "bg-pink-900/20",
      border: "border-pink-700/30"
    }
  ];

  // Social links for follow section
  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Instagram",
      url: SOCIAL_MEDIA.mainInstagram,
      color: "bg-gradient-to-br from-pink-600 to-purple-700"
    },
    {
      icon: <Youtube className="w-5 h-5 md:w-6 md:h-6" />,
      label: "YouTube",
      url: SOCIAL_MEDIA.youtube,
      color: "bg-gradient-to-br from-red-600 to-red-800"
    }
  ];

  return (
    <>
      <SEOHead />
      <MobileNavigation />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white overflow-x-hidden pt-16 md:pt-0"
      >
        {/* Floating Particles (Optimized for mobile) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {useMemo(() =>
            [...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 md:w-2 md:h-2 bg-cyan-400 rounded-full opacity-30 blur-sm"
                style={{
                  top: `${15 + i * 15}%`,
                  left: `${5 + i * 15}%`,
                  animation: `float-particles ${7 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            )), [])
          }
        </div>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10 md:opacity-20"
            style={{
              background: "radial-gradient(circle at 50% 50%, #8b5cf6 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="container mx-auto text-center relative z-10 max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-glow inline-block"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-tight">
                <span className="animate-gradient">Get in</span>
                <span className="text-white block sm:inline"> Touch</span>
              </h1>
              <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-cyan-300" />
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-cyan-300 font-light">
                  Let's Build Something Amazing
                </p>
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-cyan-300" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 md:mt-10 text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Have a project in mind? Need consultation? Want to learn electronics?
              Email us directly at <a href={`mailto:${BUSINESS_INFO.email}`} className="text-cyan-400 font-bold hover:underline break-words">{BUSINESS_INFO.email}</a>
            </motion.p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 lg:mb-16"
            >
              Reach Out to Us <span className="animate-gradient">Anytime</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {contactInfo.map((item, index) => (
                <QuickContactCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass glow-border rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 lg:mb-10 gap-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
                    <div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Send Us a Message</h2>
                      <p className="text-cyan-300 mt-1 md:mt-2 flex items-center gap-1 md:gap-2 text-sm md:text-base">
                        <Shield className="w-3 h-3 md:w-4 md:h-4" />
                        <span>Secure form powered by Web3Forms</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm bg-green-900/30 px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-green-700/30 self-start sm:self-auto">
                    <Lock className="w-3 h-3" />
                    <span>Encrypted</span>
                  </div>
                </div>

                {/* Contact Form Section */}
                <ContactForm
                  formData={formState.current}
                  isSubmitting={formState.isSubmitting}
                  isSubmitted={formState.isSubmitted}
                  onSubmit={handleSubmit}
                  onChange={handleChange}
                />

                {/* Alternative Contact Methods */}
                <div className="mt-8 md:mt-10 lg:mt-12 pt-6 md:pt-8 border-t border-gray-700/50">
                  <p className="text-center text-gray-400 mb-3 md:mb-4 text-sm md:text-base">Prefer to contact directly?</p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    {quickConnect.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-3 ${item.bg} border ${item.border} rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base`}
                        aria-label={item.title}
                      >
                        {item.icon}
                        <span className="whitespace-nowrap">{item.title}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Map & Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6 md:space-y-8"
              >
                {/* Interactive Google Map - Lazy Loaded */}
                <Suspense fallback={
                  <div className="glass glow-border rounded-2xl md:rounded-3xl p-6 md:p-8 h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                }>
                  <MapSection />
                </Suspense>

                {/* Quick Connect */}
                <div className="glass glow-border rounded-2xl md:rounded-3xl p-6 md:p-8">
                  <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">Quick Connect</h3>
                      <p className="text-gray-400 text-xs md:text-sm">For fastest response</p>
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    {quickConnect.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        className={`flex items-center justify-between p-4 md:p-6 ${item.bg} border ${item.border} rounded-xl md:rounded-2xl hover:opacity-90 transition group`}
                        aria-label={item.title}
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="relative">
                            <div className="absolute -inset-1 md:-inset-2 bg-opacity-20 rounded-full animate-ping" />
                            <div className="relative p-2 md:p-3 rounded-lg md:rounded-xl bg-opacity-20">
                              {item.icon}
                            </div>
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-base md:text-lg">{item.title}</p>
                            <p className="text-gray-400 text-xs md:text-sm">{item.description}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 md:group-hover:translate-x-2 transition" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 md:mt-8 lg:mt-10 pt-4 md:pt-6 lg:pt-8 border-t border-gray-700/50">
                    <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-center">Follow Our Journey</h4>
                    <div className="flex justify-center gap-4 md:gap-6">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className={`${social.color} w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-white hover:shadow-lg md:hover:shadow-xl transition relative group`}
                          aria-label={`Follow on ${social.label}`}
                        >
                          {social.icon}
                          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/90 backdrop-blur-sm rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
                            {social.label}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
              Follow Us on <span className="animate-gradient">Instagram</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {SOCIAL_MEDIA.instagram.map((item, i) => (
                <SocialMediaCard key={i} item={item} index={i} />
              ))}
            </div>

            {/* Instagram CTA */}
            <div className="mt-12 md:mt-16 lg:mt-20 text-center glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
                Visit Our Instagram Page & Follow Us 📸
              </h3>
              <p className="text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto text-sm md:text-base">
                For daily updates, workshops, internships, projects & new innovative ideas 💡
              </p>
              <motion.a
                href={SOCIAL_MEDIA.mainInstagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl w-full sm:w-auto"
                aria-label="Follow Trakin Tronics Projects on Instagram"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                Follow on Instagram
              </motion.a>
            </div>
          </div>
        </section>

        {/* YouTube CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 text-red-400">
              ❌ DON'T FORGET ❌
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              Visit Our YouTube Channel 🎥
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-10">
              Learn electronics, projects, automation, IoT, robotics & real lab experiments.
            </p>
            <motion.a
              href={SOCIAL_MEDIA.youtube}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-6 bg-red-600 rounded-xl md:rounded-2xl text-base md:text-lg lg:text-xl font-bold shadow-lg md:shadow-xl w-full sm:w-auto"
              aria-label="Subscribe to Trakin Tronics on YouTube"
            >
              <Youtube className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              Subscribe on YouTube
            </motion.a>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="container mx-auto max-w-4xl glass card-hover rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center bg-gradient-to-br from-cyan-900/20 to-purple-900/20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              Ready to Start Your <span className="animate-gradient">Project</span>?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto">
              Send us your requirements and we'll get back to you with a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <motion.a
                href={`mailto:${BUSINESS_INFO.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl hover:shadow-lg md:hover:shadow-xl hover:shadow-cyan-500/30 transition flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto"
                aria-label={`Email ${BUSINESS_INFO.email}`}
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base lg:text-lg">Email: {BUSINESS_INFO.email}</span>
              </motion.a>
              <div className="text-gray-400 text-sm md:text-base">or</div>
              <motion.a
                href={`tel:${BUSINESS_INFO.phone.tel}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 border-2 border-cyan-500 text-cyan-400 rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl hover:bg-cyan-500/10 transition flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto"
                aria-label={`Call ${BUSINESS_INFO.phone.display}`}
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base lg:text-lg">Call: {BUSINESS_INFO.phone.display}</span>
              </motion.a>
            </div>
            <p className="mt-6 md:mt-8 text-gray-400 text-xs md:text-sm">
              <Shield className="w-3 h-3 md:w-4 md:h-4 inline mr-1 md:mr-2" />
              All communications are secure and private
            </p>
          </motion.div>
        </section>
        {/* Footer */}
        <footer className="py-8 md:py-12 text-center text-gray-400 text-xs md:text-sm px-4">
          © {new Date().getFullYear()} {BUSINESS_INFO.name} • Learn • Build • Innovate 💡
        </footer>
      </motion.div>

      {/* Performance optimization - Inline critical CSS */}
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Touch-friendly button sizes */
        @media (max-width: 640px) {
          button, 
          a[role="button"],
          input[type="submit"] {
            min-height: 44px;
            min-width: 44px;
          }
          
          select,
          input,
          textarea {
            font-size: 16px !important; /* Prevents iOS zoom on focus */
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
    </>
  );
}