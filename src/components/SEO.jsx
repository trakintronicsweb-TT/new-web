import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, url }) {
  const siteName = "Trakin Tronics";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || "TRAKIN TRONICS — Amravati's #1 electronics lab for college projects, workshops, internships, IoT, PCB design, robotics & industrial automation."} />
      <meta name="keywords" content={keywords || "Trakin Tronics, TRAKIN TRONICS, electronics Amravati, best electronics lab Amravati, college projects, IoT, PCB design, robotics, automation, workshops, internships Maharashtra"} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
