// GalleryPopup.jsx
import React, { useEffect, useRef } from 'react';
import './gallery.css';

const GalleryPopup = ({ item, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Handle click outside
  const handleBackdropClick = (e) => {
    if (modalRef.current && contentRef.current && !contentRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!item) return null;

  return (
    <>
      {/* Backdrop with higher z-index than navbar */}
      <div 
        ref={modalRef}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg modal-enter"
        onClick={handleBackdropClick}
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-spin-slow" 
               style={{ animationDuration: '20s' }}></div>
        </div>

        {/* Main Modal Container */}
        <div 
          ref={contentRef}
          className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl xl:rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100"
          style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 50px rgba(6, 182, 212, 0.2)',
            maxHeight: '90vh'
          }}
        >
          {/* Decorative Header */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50">
                <span className="text-xl md:text-2xl">
                  {item.category === 'pcb' ? '🔌' :
                   item.category === 'robotics' ? '🤖' :
                   item.category === 'iot' ? '📶' :
                   item.category === 'power' ? '⚡' :
                   item.category === 'workshop' ? '🔧' :
                   item.category === 'internship' ? '👨‍🎓' :
                   item.category === 'services' ? '🛠️' :
                   item.category === 'videos' ? '🎬' : '📁'}
                </span>
              </div>
              <div className="max-w-[70%] md:max-w-none">
                <h2 className="text-lg md:text-2xl font-bold text-white">{item.title}</h2>
                <div className="mt-1">
                  <span className="px-2 py-1 text-xs font-medium bg-gray-800/50 rounded-full border border-gray-700 text-gray-300">
                    {item.category.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="group relative p-2 md:p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-red-400/30 hover:bg-gray-800 transition-all duration-300"
              aria-label="Close preview"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </button>
          </div>

          {/* Content Area */}
          <div className="max-h-[70vh] md:max-h-[75vh] overflow-y-auto custom-scrollbar">
            <div className="p-4 md:p-6 lg:p-8">
              {/* Media Content */}
              <div className="mb-6 md:mb-8 rounded-xl md:rounded-2xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-800/30 to-gray-900/30">
                {item.type === 'svg' && (
                  <div className="p-4 md:p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                    {item.svg}
                  </div>
                )}

                {item.type === 'photo' && (
                  <div className="relative">
                    <img 
                      src={item.src} 
                      alt={item.alt || item.title} 
                      className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain"
                      loading="eager"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
                  </div>
                )}

                {item.type === 'video' && (
                  <div className="relative pb-[56.25%] bg-black">
                    <iframe
                      title={item.title}
                      src={item.videoUrl}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute top-3 md:top-4 right-3 md:right-4">
                      <span className="px-2 py-1 text-xs font-medium bg-black/70 backdrop-blur-sm rounded-full border border-gray-700 text-gray-300">
                        🔴 DEMO
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Description Section Removed */}
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-t border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="hidden md:inline">Gallery Preview</span>
                <span className="md:hidden">Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPopup;