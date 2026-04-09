import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* ---------- Scroll To Top ---------- */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ---------- Fade-in Animation ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
  }, []);

  const fadeItem = () =>
    `transition-all duration-700 ease-out ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;

  return (
    <footer ref={footerRef} className="bg-gray-900 text-gray-200 pt-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div className={fadeItem()}>
          <h2 className="text-2xl font-bold text-white mb-4">Trakin Tronics</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Electronics projects, internships, workshops, and innovative
            solutions including IoT, embedded systems, and 3D printing.
          </p>
        </div>

        {/* Quick Links */}
        <div className={fadeItem()}>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'Contact', href: '/contact' },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={scrollToTop}
                  className="hover:text-cyan-400 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={fadeItem()}>
          <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/services#electronics" onClick={scrollToTop} className="hover:text-cyan-400 transition">Electronics Projects</a></li>
            <li><a href="/services#internships" onClick={scrollToTop} className="hover:text-cyan-400 transition">Internship Program</a></li>
            <li><a href="/services#3dprinting" onClick={scrollToTop} className="hover:text-cyan-400 transition">3D Printing Services</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={fadeItem()}>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.instagram.com/tt_internshipprogram?igsh=NGNvbHh0eXNodWFi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition"
              >
                <FaInstagram /> Trakin Tronics Internship Program
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/trakintronics_projects?igsh=c25za3JpMXMzcDdv"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition"
              >
                <FaInstagram /> Trakin Tronics Projects
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/ttelectronics_amravati?igsh=MTI5dGwzcW9sbG1tcw=="
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition"
              >
                <FaInstagram /> T. T. Electronics
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/3dprinting_hub_by_tt?igsh=MTRyd2lxODc5cGR3ag=="
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition"
              >
                <FaInstagram /> 3D Printing by TT
              </a>
            </li>

            <li className="pt-2 border-t border-gray-700">
              <a
                href="https://www.instagram.com/trakintronics_projects?igsh=MXQ3NXBhaGk1NWdocA=="
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition block"
              >
                👉 Visit our Instagram for daily updates & innovative ideas 💡
              </a>
            </li>

            <li>
              <a
                href="https://youtube.com/@trakintronics?si=4IbK1zM5_xLNT0cI"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-red-400 hover:text-red-300 transition"
              >
                <FaYoutube /> Visit our YouTube Channel
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`border-t border-gray-800 mt-10 py-4 text-center text-gray-500 text-sm transition-all duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        &copy; {new Date().getFullYear()} Trakin Tronics. All Rights Reserved.
      </div>
    </footer>
  );
}
