import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Shield, Award, CheckCircle, AlertCircle, FileText, User, Calendar, BookOpen, Loader2 } from "lucide-react";
import Papa from "papaparse";
import SEO from "../components/SEO";
import './Certificate.css';

const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1k1XegAPXXjqJtG_AOZm4G4PaUgfQYAl5r16XCHNfgOo/export?format=csv";

export default function Certificate() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Fetch data from Google Sheet
  const fetchCertificates = () => {
    return new Promise((resolve, reject) => {
      Papa.parse(GOOGLE_SHEET_CSV_URL, {
        download: true,
        header: true,
        complete: (results) => {
          if (results.data && results.data.length > 0) {
            // Clean up empty rows if any
            const cleanData = results.data.filter(row => 
              Object.values(row).some(val => val && String(val).trim() !== "")
            );
            setData(cleanData);
            resolve(cleanData);
          } else {
            reject("No data found in the certificate database.");
          }
        },
        error: (err) => {
          reject("Failed to connect to the database. Please check your internet connection.");
        }
      });
    });
  };

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);
    setHasSearched(true);

    try {
      let currentData = data;
      if (currentData.length === 0) {
        currentData = await fetchCertificates();
      }

      // Case-insensitive search
      const found = currentData.find(row => {
        // Search in all columns for the query
        return Object.values(row).some(val => 
          String(val).toLowerCase().trim() === searchQuery.toLowerCase().trim()
        );
      });

      if (found) {
        setResult(found);
      } else {
        setError("Invalid Certificate ID or Name. Please verify and try again.");
      }
    } catch (err) {
      setError(typeof err === 'string' ? err : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="certificate-page">
      <SEO 
        title="Verify Certificate | TRAKIN TRONICS" 
        description="Verify the authenticity of certificates issued by TRAKIN TRONICS. Enter your certificate ID to validate your credentials."
      />
      
      {/* Background Decorations */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="inline-flex p-3 bg-cyan-500/10 rounded-2xl mb-6 shadow-lg shadow-cyan-500/20">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
            Certificate <span className="animate-gradient">Verification</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Fast, secure, and real-time portal to verify certification credentials issued by TRAKIN TRONICS.
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-focus-within:blur-2xl transition-all duration-300 opacity-50"></div>
            <div className="relative flex items-center bg-gray-900/60 border border-gray-700/50 rounded-2xl p-2 backdrop-blur-xl focus-within:border-cyan-500/50 transition-colors">
              <Search className="w-6 h-6 text-gray-500 ml-4" />
              <input 
                type="text" 
                placeholder="Enter Certificate ID / Full Name" 
                className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-3 placeholder:text-gray-600 font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all disabled:opacity-50 flex items-center gap-2 shadow-lg shadow-cyan-500/30 whitespace-nowrap"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : "Verify Credentials"}
              </button>
            </div>
          </form>
          <p className="text-gray-500 text-xs mt-4 text-center font-medium uppercase tracking-widest opacity-80">
            Secure Real-time Verification System
          </p>
        </motion.div>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-cyan-400/60 font-medium animate-pulse">Consulting Secure Registry...</p>
            </motion.div>
          ) : result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass glow-border rounded-3xl overflow-hidden relative shadow-2xl">
                 {/* Dynamic Status Header */}
                 {(() => {
                   const status = String(result['Status'] || '').toLowerCase();
                   let config = {
                     title: "Verification Confirmed",
                     sub: "Valid Certification Record Identified",
                     icon: <CheckCircle className="w-10 h-10 text-emerald-400" />,
                     colorClass: "cert-header-success",
                     textColor: "text-emerald-400",
                     bgIcon: "bg-emerald-500/20"
                   };

                   if (status === 'pending') {
                     config = {
                       title: "Status: Pending",
                       sub: "Certificate is awaiting final processing",
                       icon: <Loader2 className="w-10 h-10 text-yellow-500 animate-spin" />,
                       colorClass: "bg-yellow-500/10 border-b border-yellow-500/10",
                       textColor: "text-yellow-500",
                       bgIcon: "bg-yellow-500/20"
                     };
                   } else if (status === 'under review') {
                     config = {
                       title: "Status: Under Review",
                       sub: "Credential is being verified by our technical team",
                       icon: <Search className="w-10 h-10 text-blue-400" />,
                       colorClass: "bg-blue-500/10 border-b border-blue-500/10",
                       textColor: "text-blue-400",
                       bgIcon: "bg-blue-500/20"
                     };
                   } else if (status === 'revoked') {
                     config = {
                       title: "Status: Revoked",
                       sub: "This certificate is no longer officially valid",
                       icon: <AlertCircle className="w-10 h-10 text-red-500" />,
                       colorClass: "bg-red-500/10 border-b border-red-500/10",
                       textColor: "text-red-500",
                       bgIcon: "bg-red-500/20"
                     };
                   }

                   return (
                     <div className={`${config.colorClass} p-10 text-center relative overflow-hidden`}>
                       <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                         <Award className="w-64 h-64" />
                       </div>
                       <div className={`inline-flex p-4 ${config.bgIcon} rounded-full mb-6 shadow-lg`}>
                         {config.icon}
                       </div>
                       <h3 className={`text-3xl font-black ${config.textColor} mb-2`}>{config.title}</h3>
                       <p className="text-gray-400 font-medium">{config.sub}</p>
                     </div>
                   );
                 })()}

                {/* Certificate Details */}
                <div className="p-8 md:p-14 grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <DetailItem icon={<FileText />} label="CERTIFICATE ID" value={result['Certificate ID'] || result['ID'] || result['CertificateId'] || Object.values(result)[0]} highlight />
                    <DetailItem icon={<User />} label="RECIPIENT NAME" value={result['Student Name'] || result['Name'] || result['StudentName'] || Object.values(result)[1]} />
                    <DetailItem icon={<BookOpen />} label="COURSE / PROJECT" value={result['Course'] || result['Project'] || result['Internship'] || result['Program'] || "Specialized Certification"} />
                  </div>
                  <div className="space-y-8">
                    <DetailItem icon={<Calendar />} label="ISSUE DATE" value={result['Date'] || result['Issue Date'] || result['IssueDate'] || "—"} />
                    <DetailItem icon={<Award />} label="RECORD STATUS" value={result['Status'] || "Verified & Active"} color={String(result['Status']).toLowerCase() === 'pending' ? 'text-yellow-400' : String(result['Status']).toLowerCase() === 'under review' ? 'text-blue-400' : String(result['Status']).toLowerCase() === 'revoked' ? 'text-red-500' : 'text-emerald-400'} />
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-gray-900/60 p-6 border-t border-gray-800/50 text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  TRAKIN TRONICS Digital Integrity Proof • {new Date().getFullYear()} Official Record
                </div>
              </div>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto"
            >
              <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-10 text-center shadow-2xl backdrop-blur-sm">
                <div className="p-4 bg-red-500/10 rounded-full inline-block mb-6">
                  <AlertCircle className="w-12 h-12 text-red-500" />
                </div>
                <h3 className="text-2xl font-black text-red-500 mb-3">Record Missing</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{error}</p>
                <div className="mt-8 pt-8 border-t border-gray-800/50">
                  <button 
                    onClick={() => {setSearchQuery(""); setError(null);}}
                    className="text-cyan-400 hover:text-cyan-300 font-bold tracking-tight transition-colors"
                  >
                    Clear Search & Try Again
                  </button>
                </div>
              </div>
            </motion.div>
          ) : hasSearched && (
             <div className="text-center text-gray-500 py-12">No results found for your query.</div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, value, highlight, color = "text-white" }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-gray-500 text-[10px] font-black tracking-widest uppercase">
        {React.cloneElement(icon, { className: "w-3 h-3" })}
        {label}
      </div>
      <div className={`text-xl font-bold leading-tight ${highlight ? "text-cyan-400 font-mono" : color}`}>
        {value}
      </div>
    </div>
  );
}
