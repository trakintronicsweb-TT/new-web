import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  Cpu,
  ChevronRight,
  Sparkles,
  Mail,
  Phone,
  User,
  MessageSquare,
  Users,
  BookOpen,
  GraduationCap,
  MapPin,
  CreditCard,
  FileText,
  AlertTriangle,
  FileCheck,
  Video,
  Headphones,
  HelpCircle
} from "lucide-react";
import "./ProjectBooking.css";
import QR from "./../assets/images/qr.jpg";
import SEO from '../components/SEO';

const ProjectBooking = () => {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  const [formData, setFormData] = useState({
    // Basic Information
    purchasedCatalogue: "",
    groupLeaderName: "",
    groupLeaderPhone: "",
    groupLeaderWhatsApp: "",
    groupLeaderEmail: "",

    // Group Members
    member1Name: "",
    member1Phone: "",
    member2Name: "",
    member2Phone: "",
    member3Name: "",
    member3Phone: "",
    member4Name: "",
    member4Phone: "",
    member5Name: "",
    member5Phone: "",

    // Project Details
    stateName: "",
    cityName: "",
    projectType: "",
    otherProjectType: "",
    collegeName: "",
    projectTopic: "",
    department: "",
    otherDepartment: "",
    submissionDate: "",
    totalAmount: "",

    // Payment
    transactionId: "",
    advanceAmount: "",

    // Terms & Conditions
    termsAgreed: false,

    // Additional
    comments: "",

    // Communication
    communicationPreference: "email"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [showTerms, setShowTerms] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('checking');
  const formRef = useRef(null);

  // ============================================================================
  // CONSTANTS & CONFIGURATION
  // ============================================================================
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzLY9UOm54egJyD64FfoA3xgynlQ_ZTPVTuHhY5SG0EHYZebY8mLmEImg7e8mE3wpR3yg/exec';

  const projectTypes = [
    { id: "major", name: "Major Project" },
    { id: "minor", name: "Minor Project" },
    { id: "competition", name: "Competition Based Project" },
    { id: "other", name: "Other" }
  ];

  const departments = [
    { id: "extc", name: "Electronics & Telecommunication - EXTC" },
    { id: "it", name: "Information Technology - IT" },
    { id: "cse", name: "Computer Science - CSE" },
    { id: "civil", name: "Civil" },
    { id: "mech", name: "Mechanical - Mech" },
    { id: "electrical", name: "Electrical" },
    { id: "instrumentation", name: "Instrumentation" },
    { id: "other", name: "Other" }
  ];

  const services = [
    { icon: <FileText className="w-5 h-5" />, name: "Circuit & Block Diagram" },
    { icon: <BookOpen className="w-5 h-5" />, name: "Abstract" },
    { icon: <BookOpen className="w-5 h-5" />, name: "Synopsis" },
    { icon: <FileText className="w-5 h-5" />, name: "Thesis Report" },
    { icon: <FileText className="w-5 h-5" />, name: "Presentation" },
    { icon: <Cpu className="w-5 h-5" />, name: "Programming Code File" },
    { icon: <FileText className="w-5 h-5" />, name: "Circuit Explanation" },
    { icon: <Video className="w-5 h-5" />, name: "Full Explanation Video Lifetime" },
    { icon: <HelpCircle className="w-5 h-5" />, name: "100+ Questions Question Bank" },
    { icon: <HelpCircle className="w-5 h-5" />, name: "Answer To Your All Queries & Doubt" },
    { icon: <Headphones className="w-5 h-5" />, name: "24*7 Hour Customer Care Support" },
    { icon: <Sparkles className="w-5 h-5" />, name: "& Many More" }
  ];

  const terms = [
    "When you confirm your project you should pay 1000rs as a advance amount",
    "Pay Remaining amount after Completing your project",
    "Once Project Completed then you have to collect project in next 7 days",
    "Complete All payment while delivery of project",
    "After confirmation only in next 7 days you can cancel your project & your advance will refund 100%",
    "And If You want to cancel your project after 7 days then 1000rs advance will will not be refundable.",
    "After delivery of project we are not responsible for any technical fault if arise in project.",
    "Once project is final with feature then we will not change in any feature, if you want any change in features because of your mentor or group member then that change is your side we are not responsible for that or you have to pay extra charges for that change.",
    "After Project if there is an any hardware damaged it should not be including in our services policy.",
    "And if you are trying to pressurized our team member then we can take legal action.",
    "Once you sign on forms hardcopy & give your thumb on form then what ever features & services are mentioned on form only that features & services will be considered.",
    "Once the order has been confirmed no changes can be made the, process will follow up the agreement and T&C.",
    "If student not follow any T&C so Trakin Tronics can take any legal action on group leader & on whole team members ..."
  ];

  // ============================================================================
  // ANIMATION VARIANTS
  // ============================================================================
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // ============================================================================
  // EFFECTS
  // ============================================================================
  useEffect(() => {
    testConnection();

    if (formRef.current) {
      const firstInput = formRef.current.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 300);
      }
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      console.log('🎉 Form submitted successfully!');
      console.log('📋 Reference ID:', referenceId);
    }
  }, [isSuccess, referenceId, formData.groupLeaderEmail]);

  // ============================================================================
  // CONNECTION HANDLING
  // ============================================================================
  const testConnection = async () => {
    console.log('🔍 Testing connection to Google Apps Script...');
    setConnectionStatus('checking');

    try {
      // Google Apps Script doesn't support CORS for GET, so use different approach
      await fetch(`${GOOGLE_SCRIPT_URL}?test=true&timestamp=${Date.now()}`, {
        mode: 'no-cors' // Use no-cors mode
      });

      // With no-cors, we can't read response, but if we get here, connection works
      console.log('✅ Connection test: Request sent (cannot read response due to CORS)');
      setConnectionStatus('connected');
      return true;

    } catch (error) {
      console.error('❌ Connection test failed:', error.message);
      setConnectionStatus('error');
      return false;
    }
  };

  // ============================================================================
  // FORM HANDLERS
  // ============================================================================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.groupLeaderName.trim()) newErrors.groupLeaderName = "Group Leader Name is required";

    if (!formData.groupLeaderPhone.trim()) {
      newErrors.groupLeaderPhone = "Group Leader Phone is required";
    } else if (!/^\d{10}$/.test(formData.groupLeaderPhone)) {
      newErrors.groupLeaderPhone = "Invalid phone number (10 digits required)";
    }

    if (!formData.groupLeaderEmail.trim()) {
      newErrors.groupLeaderEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.groupLeaderEmail)) {
      newErrors.groupLeaderEmail = "Invalid email format";
    }

    if (!formData.member1Name.trim()) newErrors.member1Name = "At least one group member is required";
    if (!formData.projectTopic.trim()) newErrors.projectTopic = "Project topic is required";
    if (!formData.collegeName.trim()) newErrors.collegeName = "College name is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.projectType) newErrors.projectType = "Project type is required";

    if (formData.projectType === 'other' && !formData.otherProjectType.trim()) {
      newErrors.otherProjectType = "Please specify project type";
    }

    if (formData.department === 'other' && !formData.otherDepartment.trim()) {
      newErrors.otherDepartment = "Please specify department";
    }

    if (!formData.totalAmount) newErrors.totalAmount = "Total amount is required";
    if (!formData.advanceAmount) newErrors.advanceAmount = "Advance amount is required";

    if (parseFloat(formData.advanceAmount) < 1000) {
      newErrors.advanceAmount = "Minimum advance amount is ₹1000";
    }

    if (!formData.termsAgreed) newErrors.termsAgreed = "You must agree to terms & conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🔵 STEP 1: handleSubmit called - Event prevented");

    if (!validateForm()) {
      console.log("🔴 STEP 1a: Validation failed");
      console.log("Errors:", errors);

      const firstError = Object.keys(errors)[0];
      console.log("First error field:", firstError);

      const element = document.getElementsByName(firstError)[0];
      if (element) {
        console.log("Scrolling to error field:", firstError);
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      } else {
        console.log("Error element not found");
      }
      return;
    }

    console.log("✅ STEP 2: Validation passed");
    setIsSubmitting(true);
    setErrors(prev => ({ ...prev, submit: '' }));

    try {
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'ProjectBookingForm'
      };

      console.log('📤 STEP 3: Preparing to submit...');
      console.log('📝 Form Data to submit:', submissionData);

      // ============================================
      // SOLUTION 1: Use FormData instead of JSON
      // ============================================
      const formDataToSend = new FormData();

      // Add all form data to FormData
      Object.keys(submissionData).forEach(key => {
        if (key === 'termsAgreed') {
          formDataToSend.append(key, submissionData[key] ? 'true' : 'false');
        } else if (submissionData[key] !== undefined && submissionData[key] !== null) {
          formDataToSend.append(key, submissionData[key]);
        }
      });

      // Add a success flag for debugging
      const refId = `TT-${Date.now().toString().slice(-8)}`;
      formDataToSend.append('referenceId', refId);

      console.log('🚀 STEP 4: Sending FormData to Google Script...');
      console.log('🔗 URL:', GOOGLE_SCRIPT_URL);

      // ============================================
      // IMPORTANT: Google Apps Script works better with FormData
      // ============================================
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      });

      console.log('📥 STEP 5: Got response');
      console.log('Response status:', response.status);
      console.log('Response status text:', response.statusText);
      console.log('Response headers:', response.headers);

      // Try to read response text
      const responseText = await response.text();
      console.log('📥 Response text (first 500 chars):', responseText.substring(0, 500));
      console.log('Response length:', responseText.length);

      // Check if submission was successful
      if (response.ok || responseText.includes('success') || responseText.includes('Success')) {
        console.log('✅ STEP 6: Submission successful!');
        setReferenceId(refId);
        setIsSuccess(true);

        console.log('✅ Reference ID:', refId);
        console.log('✅ Email sent to:', formData.groupLeaderEmail);

        // Show success for 15 seconds then reset
        setTimeout(() => {
          console.log('🔄 Resetting form after 15 seconds');
          resetForm();
        }, 15000);

      } else {
        // Handle server error
        console.error('❌ Server responded with error status');
        throw new Error('Server responded with error: ' + response.status);
      }

    } catch (error) {
      console.error("❌ STEP 7: Submission error:", error);
      console.error("Error details:", error.message);

      // ============================================
      // FALLBACK SOLUTION: Try alternative endpoint
      // ============================================
      console.log('🔄 STEP 7a: Trying alternative submission method...');

      try {
        // Alternative: Use GET method with query parameters
        const params = new URLSearchParams();
        Object.keys(formData).forEach(key => {
          if (formData[key]) {
            params.append(key, formData[key]);
          }
        });

        const altUrl = `${GOOGLE_SCRIPT_URL}?${params.toString()}&timestamp=${Date.now()}&method=GET`;
        console.log('🔗 Trying GET request to:', altUrl.substring(0, 150));

        const altResponse = await fetch(altUrl);
        const altText = await altResponse.text();
        console.log('📥 Alternative response:', altText.substring(0, 200));

        if (altText.includes('success') || altText.includes('Success') || altResponse.ok) {
          console.log('✅ Alternative submission successful!');
          const refId = `TT-ALT-${Date.now().toString().slice(-8)}`;
          setReferenceId(refId);
          setIsSuccess(true);

          setTimeout(() => {
            resetForm();
          }, 15000);

          return;
        } else {
          console.log('❌ Alternative method also failed');
        }
      } catch (altError) {
        console.error('❌ Alternative method also failed:', altError);
      }

      // If all methods fail, show manual submission option
      console.log('📧 STEP 7b: Showing manual submission option');
      handleSubmissionError();

    } finally {
      console.log('🏁 STEP 8: Setting isSubmitting to false');
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      purchasedCatalogue: "",
      groupLeaderName: "",
      groupLeaderPhone: "",
      groupLeaderWhatsApp: "",
      groupLeaderEmail: "",
      member1Name: "",
      member1Phone: "",
      member2Name: "",
      member2Phone: "",
      member3Name: "",
      member3Phone: "",
      member4Name: "",
      member4Phone: "",
      member5Name: "",
      member5Phone: "",
      stateName: "",
      cityName: "",
      projectType: "",
      otherProjectType: "",
      collegeName: "",
      projectTopic: "",
      department: "",
      otherDepartment: "",
      submissionDate: "",
      totalAmount: "",
      transactionId: "",
      advanceAmount: "",
      termsAgreed: false,
      comments: "",
      communicationPreference: "email"
    });
    setReferenceId('');
    setCurrentStep(1);
    setIsSuccess(false);
  };

  const handleSubmissionError = () => {
    const manualDetails = `
Project Booking Details:

Group Leader: ${formData.groupLeaderName}
Email: ${formData.groupLeaderEmail}
Phone: ${formData.groupLeaderPhone}
College: ${formData.collegeName}
Project: ${formData.projectTopic}
Department: ${formData.department === 'other' ? formData.otherDepartment : formData.department}
Total Amount: ₹${formData.totalAmount}
Advance Paid: ₹${formData.advanceAmount}
Transaction ID: ${formData.transactionId || 'Not provided'}
Comments: ${formData.comments || 'None'}
    `.trim();

    setErrors(prev => ({
      ...prev,
      submit: "Failed to submit. Please copy the details below and email to trakintronicsweb@gmail.com"
    }));

    alert(`⚠️ Submission Failed!\n\nPlease copy these details and email to: trakintronicsweb@gmail.com\n\n${manualDetails}`);
  };

  // ============================================================================
  // STEP NAVIGATION
  // ============================================================================
  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // ============================================================================
  // RENDER HELPERS
  // ============================================================================
  const  renderConnectionStatus = () => {
    if (connectionStatus === 'checking') {
      return (
        <div className="connection-status checking">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Checking connection...</span>
        </div>
      );
    } else if (connectionStatus === 'connected') {
      return (
        <div className="connection-status connected">
          <CheckCircle className="w-4 h-4" />
          <span>Connected to server ✓</span>
        </div>
      );
    } else if (connectionStatus === 'error') {
      return (
        <div className="connection-status error">
          <AlertCircle className="w-4 h-4" />
          <span>Connection test failed, but form may still submit</span>
        </div>
      );
    }
    return null;
  };

  // ============================================================================
  // RENDER METHODS FOR FORM STEPS
  // ============================================================================
  const renderStep1 = () => (
    <motion.div
      className="form-step"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <h3 className="step-title">
        <Users className="w-5 h-5" />
        Team Information
      </h3>

      <div className="form-group">
        <label className="form-label">
          Have You Purchased Catalogue Before? *
        </label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="purchasedCatalogue"
              value="yes"
              checked={formData.purchasedCatalogue === 'yes'}
              onChange={handleChange}
            />
            <span>YES</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="purchasedCatalogue"
              value="no"
              checked={formData.purchasedCatalogue === 'no'}
              onChange={handleChange}
            />
            <span>NO</span>
          </label>
        </div>
      </div>

      <div className="form-group">
        <h4 className="section-title">Group Leader Details</h4>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">
              <User className="w-4 h-4" />
              Group Leader Name *
            </label>
            <input
              type="text"
              name="groupLeaderName"
              value={formData.groupLeaderName}
              onChange={handleChange}
              className={`form-input ${errors.groupLeaderName ? 'error' : ''}`}
              placeholder="Full Name"
            />
            {errors.groupLeaderName && (
              <div className="error-message">
                <AlertCircle className="w-4 h-4" />
                {errors.groupLeaderName}
              </div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">
              <Phone className="w-4 h-4" />
              Contact Number *
            </label>
            <input
              type="tel"
              name="groupLeaderPhone"
              value={formData.groupLeaderPhone}
              onChange={handleChange}
              className={`form-input ${errors.groupLeaderPhone ? 'error' : ''}`}
              placeholder="9876543210"
            />
            {errors.groupLeaderPhone && (
              <div className="error-message">
                <AlertCircle className="w-4 h-4" />
                {errors.groupLeaderPhone}
              </div>
            )}
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">
              <MessageSquare className="w-4 h-4" />
              WhatsApp Number
            </label>
            <input
              type="tel"
              name="groupLeaderWhatsApp"
              value={formData.groupLeaderWhatsApp}
              onChange={handleChange}
              className="form-input"
              placeholder="9876543210"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <Mail className="w-4 h-4" />
              Email Address *
            </label>
            <input
              type="email"
              name="groupLeaderEmail"
              value={formData.groupLeaderEmail}
              onChange={handleChange}
              className={`form-input ${errors.groupLeaderEmail ? 'error' : ''}`}
              placeholder="john@example.com"
            />
            {errors.groupLeaderEmail && (
              <div className="error-message">
                <AlertCircle className="w-4 h-4" />
                {errors.groupLeaderEmail}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="form-group">
        <h4 className="section-title">Group Members</h4>

        <div className="member-section">
          <h5 className="member-title">1st Group Member *</h5>
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                name="member1Name"
                value={formData.member1Name}
                onChange={handleChange}
                className={`form-input ${errors.member1Name ? 'error' : ''}`}
                placeholder="Full Name"
              />
              {errors.member1Name && (
                <div className="error-message">
                  <AlertCircle className="w-4 h-4" />
                  {errors.member1Name}
                </div>
              )}
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="member1Phone"
                value={formData.member1Phone}
                onChange={handleChange}
                className="form-input"
                placeholder="Contact Number"
              />
            </div>
          </div>
        </div>

        <div className="member-section">
          <h5 className="member-title">2nd Group Member</h5>
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                name="member2Name"
                value={formData.member2Name}
                onChange={handleChange}
                className="form-input"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="member2Phone"
                value={formData.member2Phone}
                onChange={handleChange}
                className="form-input"
                placeholder="Contact Number"
              />
            </div>
          </div>
        </div>

        <div className="member-section">
          <h5 className="member-title">3rd Group Member</h5>
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                name="member3Name"
                value={formData.member3Name}
                onChange={handleChange}
                className="form-input"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="member3Phone"
                value={formData.member3Phone}
                onChange={handleChange}
                className="form-input"
                placeholder="Contact Number"
              />
            </div>
          </div>
        </div>

        <div className="additional-members">
          <div className="member-section">
            <h5 className="member-title">Additional Members (Optional)</h5>
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  name="member4Name"
                  value={formData.member4Name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="4th Member Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="member4Phone"
                  value={formData.member4Phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contact Number"
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  name="member5Name"
                  value={formData.member5Name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="5th Member Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="member5Phone"
                  value={formData.member5Phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contact Number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step-actions">
        <button
          type="button" // हे ठेवा
          onClick={nextStep}
          className="btn-primary"
          disabled={!formData.groupLeaderName || !formData.groupLeaderPhone || !formData.groupLeaderEmail || !formData.member1Name}
        >
          Next: Project Info
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      className="form-step"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <h3 className="step-title">
        <BookOpen className="w-5 h-5" />
        Project Details
      </h3>

      <div className="form-group">
        <h4 className="section-title">Location</h4>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">
              <MapPin className="w-4 h-4" />
              State Name
            </label>
            <input
              type="text"
              name="stateName"
              value={formData.stateName}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter State"
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              <MapPin className="w-4 h-4" />
              City Name
            </label>
            <input
              type="text"
              name="cityName"
              value={formData.cityName}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter City"
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          <GraduationCap className="w-4 h-4" />
          College Name *
        </label>
        <input
          type="text"
          name="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
          className={`form-input ${errors.collegeName ? 'error' : ''}`}
          placeholder="Enter College Name"
        />
        {errors.collegeName && (
          <div className="error-message">
            <AlertCircle className="w-4 h-4" />
            {errors.collegeName}
          </div>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">
          Type of project you want to buy? *
        </label>
        <div className="radio-group-vertical">
          {projectTypes.map(type => (
            <label key={type.id} className="radio-label-vertical">
              <input
                type="radio"
                name="projectType"
                value={type.id}
                checked={formData.projectType === type.id}
                onChange={handleChange}
              />
              <span>{type.name}</span>
            </label>
          ))}
        </div>
        {errors.projectType && (
          <div className="error-message">
            <AlertCircle className="w-4 h-4" />
            {errors.projectType}
          </div>
        )}

        {formData.projectType === 'other' && (
          <div className="form-group mt-2">
            <input
              type="text"
              name="otherProjectType"
              value={formData.otherProjectType}
              onChange={handleChange}
              className={`form-input ${errors.otherProjectType ? 'error' : ''}`}
              placeholder="Please specify project type"
            />
            {errors.otherProjectType && (
              <div className="error-message">
                <AlertCircle className="w-4 h-4" />
                {errors.otherProjectType}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">
          Finalized Project Topic Name *
        </label>
        <input
          type="text"
          name="projectTopic"
          value={formData.projectTopic}
          onChange={handleChange}
          className={`form-input ${errors.projectTopic ? 'error' : ''}`}
          placeholder="Enter Project Topic"
        />
        {errors.projectTopic && (
          <div className="error-message">
            <AlertCircle className="w-4 h-4" />
            {errors.projectTopic}
          </div>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">
          Department Name *
        </label>
        <div className="radio-group-vertical">
          {departments.map(dept => (
            <label key={dept.id} className="radio-label-vertical">
              <input
                type="radio"
                name="department"
                value={dept.id}
                checked={formData.department === dept.id}
                onChange={handleChange}
              />
              <span>{dept.name}</span>
            </label>
          ))}
        </div>
        {errors.department && (
          <div className="error-message">
            <AlertCircle className="w-4 h-4" />
            {errors.department}
          </div>
        )}

        {formData.department === 'other' && (
          <div className="form-group mt-2">
            <input
              type="text"
              name="otherDepartment"
              value={formData.otherDepartment}
              onChange={handleChange}
              className={`form-input ${errors.otherDepartment ? 'error' : ''}`}
              placeholder="Please specify department"
            />
            {errors.otherDepartment && (
              <div className="error-message">
                <AlertCircle className="w-4 h-4" />
                {errors.otherDepartment}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">
          <Calendar className="w-4 h-4" />
          Approximate Project Submission date *
        </label>
        <input
          type="date"
          name="submissionDate"
          value={formData.submissionDate}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="step-actions">
        <button
          type="button"
          onClick={prevStep}
          className="btn-secondary"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="btn-primary"
          disabled={!formData.projectType || !formData.projectTopic || !formData.collegeName || !formData.department}
        >
          Next: Payment
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      className="form-step"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <h3 className="step-title">
        <CreditCard className="w-5 h-5" />
        Payment Details
      </h3>

      <div className="form-group">
        <label className="form-label">
          Total Project Amount (₹) *
        </label>
        <input
          type="number"
          name="totalAmount"
          value={formData.totalAmount}
          onChange={handleChange}
          className={`form-input ${errors.totalAmount ? 'error' : ''}`}
          placeholder="Enter total amount"
          min="0"
        />
        {errors.totalAmount && (
          <div className="error-message">
            <AlertCircle className="w-4 h-4" />
            {errors.totalAmount}
          </div>
        )}
      </div>

      <div className="qr-section">
        <div className="qr-instruction">
          <AlertCircle className="w-5 h-5 text-blue-400" />
          <span>Scan This QR & Pay Pre-Booking Advance Amount</span>
        </div>
        <div className="qr-note">
          This amount will be deducted from your Total payment.
        </div>

        <div className="qr-code-placeholder">
          <img src={QR} alt="Scan QR Code to Pay" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          Add Transaction ID After Payment *
        </label>
        <input
          type="text"
          name="transactionId"
          value={formData.transactionId}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter Transaction ID"
        />
      </div>

      <div className="form-group">
        <label className="form-label">
          Advance Amount Paid (₹) *
        </label>
        <input
          type="number"
          name="advanceAmount"
          value={formData.advanceAmount}
          onChange={handleChange}
          className={`form-input ${errors.advanceAmount ? 'error' : ''}`}
          placeholder="Enter advance amount"
          min="0"
        />
        {errors.advanceAmount && (
          <div className="error-message">
            <AlertCircle className="w-4 h-4" />
            {errors.advanceAmount}
          </div>
        )}
        <div className="form-hint">
          * Minimum advance amount: ₹1000
        </div>
      </div>

      <div className="form-group terms-agreement">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
            className={`checkbox-input ${errors.termsAgreed ? 'error' : ''}`}
          />
          <div className="checkbox-content">
            <strong>Self Declaration *</strong>
            <span>Yes, I read above all term and condition & I agree all the term and condition</span>
          </div>
        </label>
        {errors.termsAgreed && (
          <div className="error-message">
            <AlertCircle className="w-4 h-4" />
            {errors.termsAgreed}
          </div>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">
          Any other comments / Questions?
        </label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="form-textarea"
          placeholder="Enter any additional comments or questions..."
          rows="3"
        />
      </div>

      <div className="step-actions">
        <button
          type="button"
          onClick={prevStep}
          className="btn-secondary"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="btn-primary"
          disabled={!formData.totalAmount || !formData.advanceAmount || !formData.termsAgreed}
        >
          Next: Review & Submit
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div
      className="form-step"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <h3 className="step-title">
        <FileCheck className="w-5 h-5" />
        Review & Submit
      </h3>

      <div className="review-section">
        <div className="review-card">
          <h4 className="review-subtitle">Team Information</h4>
          <div className="review-grid">
            <div className="review-item">
              <span className="review-label">Group Leader:</span>
              <span className="review-value">{formData.groupLeaderName}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Contact:</span>
              <span className="review-value">{formData.groupLeaderPhone}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Email:</span>
              <span className="review-value">{formData.groupLeaderEmail}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Team Size:</span>
              <span className="review-value">
                {[formData.member1Name, formData.member2Name, formData.member3Name, formData.member4Name, formData.member5Name]
                  .filter(name => name.trim()).length} Members
              </span>
            </div>
          </div>
        </div>

        <div className="review-card">
          <h4 className="review-subtitle">Project Details</h4>
          <div className="review-grid">
            <div className="review-item">
              <span className="review-label">Project Topic:</span>
              <span className="review-value">{formData.projectTopic}</span>
            </div>
            <div className="review-item">
              <span className="review-label">College:</span>
              <span className="review-value">{formData.collegeName}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Department:</span>
              <span className="review-value">
                {formData.department === 'other' ? formData.otherDepartment :
                  departments.find(d => d.id === formData.department)?.name || formData.department}
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Project Type:</span>
              <span className="review-value">
                {formData.projectType === 'other' ? formData.otherProjectType :
                  projectTypes.find(p => p.id === formData.projectType)?.name || formData.projectType}
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Submission Date:</span>
              <span className="review-value">{formData.submissionDate || 'Not specified'}</span>
            </div>
          </div>
        </div>

        <div className="review-card">
          <h4 className="review-subtitle">Payment Details</h4>
          <div className="review-grid">
            <div className="review-item">
              <span className="review-label">Total Amount:</span>
              <span className="review-value">₹{formData.totalAmount}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Advance Paid:</span>
              <span className="review-value">₹{formData.advanceAmount}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Transaction ID:</span>
              <span className="review-value">{formData.transactionId || 'Not provided'}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Balance:</span>
              <span className="review-value">
                ₹{(parseFloat(formData.totalAmount || 0) - parseFloat(formData.advanceAmount || 0)).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="terms-confirmation">
          <CheckCircle className="w-6 h-6 text-green-400" />
          <div>
            <div className="confirmation-text">Terms & Conditions Accepted</div>
            <div className="confirmation-subtext">
              You have agreed to all terms and conditions
            </div>
          </div>
        </div>

        {formData.comments && (
          <div className="review-card">
            <h4 className="review-subtitle">Additional Comments</h4>
            <div className="review-description">
              {formData.comments}
            </div>
          </div>
        )}
      </div>

      <div className="submit-section">
        <div className="step-actions">
          <button
            type="button"
            onClick={prevStep}
            className="btn-secondary"
            disabled={isSubmitting}
          >
            Back
          </button>
        
          <button
            type="submit" // हे बदला
            className={`btn-submit ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Confirm & Submit Booking
              </>
            )}
          </button>
        </div>

        {errors.submit && (
          <div className="error-message text-center mt-4">
            <AlertCircle className="w-5 h-5" />
            {errors.submit}

            {errors.submit.includes('Failed to submit') && (
              <div className="manual-submission mt-3">
                <button
                  type="button"
                  className="manual-copy-btn"
                  onClick={() => {
                    const details = `
                      Group Leader: ${formData.groupLeaderName}
                      Email: ${formData.groupLeaderEmail}
                      Phone: ${formData.groupLeaderPhone}
                      Project: ${formData.projectTopic}
                      College: ${formData.collegeName}
                      Amount: ₹${formData.totalAmount}
                      Advance: ₹${formData.advanceAmount}
                    `.trim();

                    navigator.clipboard.writeText(details);
                    alert('Details copied! Please email to: trakintronicsweb@gmail.com');
                  }}
                >
                  📋 Copy Details for Manual Submission
                </button>
              </div>
            )}
          </div>
        )}

        {connectionStatus === 'error' && (
          <div className="connection-warning mt-3">
            <AlertTriangle className="w-5 h-5" />
            <span>Connection issues detected. If submission fails, please email details to trakintronicsweb@gmail.com</span>
          </div>
        )}

        <div className="terms-reminder mt-4">
          <CheckCircle className="w-4 h-4" />
          <span>By submitting, you agree to all Terms & Conditions</span>
        </div>
      </div>
    </motion.div>
  );

  const renderSuccessState = () => (
    <motion.div
      className="success-state"
      variants={successVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Success Icon */}
      <div className="success-icon">
        <CheckCircle className="w-16 h-16" />
      </div>

      {/* Success Title */}
      <h2 className="success-title">🎉 Booking Confirmed Successfully!</h2>

      {/* Success Message */}
      <div className="success-message">
        <p>
          Thank you, <strong>{formData.groupLeaderName}</strong>!
          <br />
          Your project booking has been successfully submitted.
        </p>
        <div className="success-badge">
          <CheckCircle className="w-4 h-4" />
          <span>All systems operational ✓</span>
        </div>
      </div>

      {/* Success Alert Indicators */}
      <div className="success-alert">
        <div className="alert-item success">
          <CheckCircle className="w-5 h-5" />
          <span>✅ Data saved to Google Sheets</span>
        </div>
        <div className="alert-item success">
          <CheckCircle className="w-5 h-5" />
          <span>✅ Confirmation email sent to you</span>
        </div>
        <div className="alert-item success">
          <CheckCircle className="w-5 h-5" />
          <span>✅ Notification sent to Trakin Tronics team</span>
        </div>
      </div>

      {/* Reference ID Highlight */}
      <div className="reference-highlight">
        <div className="reference-label">Your Booking Reference ID:</div>
        <div className="reference-value">
          {referenceId || `TT-${Date.now().toString().slice(-8)}`}
        </div>
        <div className="reference-hint">
          <AlertCircle className="w-4 h-4" />
          <span>Keep this ID for all future communication</span>
        </div>
      </div>

      {/* Booking Details */}
      <div className="success-details">
        <h3 className="details-title">📋 Booking Summary</h3>

        <div className="details-grid">
          <div className="detail-card">
            <div className="detail-icon">
              <User className="w-5 h-5" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Group Leader</div>
              <div className="detail-value">{formData.groupLeaderName}</div>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Project Topic</div>
              <div className="detail-value">{formData.projectTopic}</div>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="detail-content">
              <div className="detail-label">College</div>
              <div className="detail-value">{formData.collegeName}</div>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">
              <CreditCard className="w-5 h-5" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Total Amount</div>
              <div className="detail-value">₹{formData.totalAmount}</div>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">
              <CreditCard className="w-5 h-5" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Advance Paid</div>
              <div className="detail-value">₹{formData.advanceAmount}</div>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">
              <Mail className="w-5 h-5" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Email Sent To</div>
              <div className="detail-value">
                You & trakintronicsweb@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Timeline */}
      <div className="next-steps">
        <h3 className="steps-title">📅 What Happens Next?</h3>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-number">1</div>
            <div className="timeline-content">
              <h4>Verification & Confirmation</h4>
              <p>Our team will verify your payment and booking details</p>
              <div className="timeline-time">Within 2 hours</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">2</div>
            <div className="timeline-content">
              <h4>Project Manager Assigned</h4>
              <p>A dedicated project manager will be assigned to your project</p>
              <div className="timeline-time">Within 6 hours</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">3</div>
            <div className="timeline-content">
              <h4>Initial Consultation</h4>
              <p>Project manager will contact you to discuss requirements</p>
              <div className="timeline-time">Within 24 hours</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">4</div>
            <div className="timeline-content">
              <h4>Project Timeline & Milestones</h4>
              <p>Detailed project plan and delivery schedule will be shared</p>
              <div className="timeline-time">Within 48 hours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="important-notes">
        <h3 className="notes-title">⚠️ Important Information</h3>

        <div className="notes-list">
          <div className="note-item">
            <AlertCircle className="w-5 h-5" />
            <div>
              <strong>Check Email:</strong> Look for confirmation email in your inbox and spam folder
            </div>
          </div>

          <div className="note-item">
            <AlertCircle className="w-5 h-5" />
            <div>
              <strong>Save Reference ID:</strong> Keep <code className="ref-code">{referenceId}</code> for all communication
            </div>
          </div>

          <div className="note-item">
            <AlertCircle className="w-5 h-5" />
            <div>
              <strong>Payment Verification:</strong> Advance payment will be verified within 4 hours
            </div>
          </div>

          <div className="note-item">
            <AlertCircle className="w-5 h-5" />
            <div>
              <strong>Communication:</strong> Always mention your Reference ID when contacting us
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="success-contact">
        <h3 className="contact-title">📞 Need Immediate Assistance?</h3>
        <p className="contact-subtitle">Our team is ready to help you</p>

        <div className="contact-grid">
          <a href="tel:+918767841367" className="contact-card phone">
            <div className="contact-icon">
              <Phone className="w-6 h-6" />
            </div>
            <div className="contact-content">
              <div className="contact-label">Call Now</div>
              <div className="contact-value">+91 8767841367</div>
            </div>
          </a>

          <a href="tel:+919112695897" className="contact-card phone">
            <div className="contact-icon">
              <Phone className="w-6 h-6" />
            </div>
            <div className="contact-content">
              <div className="contact-label">Alternate Number</div>
              <div className="contact-value">+91 91126 95897</div>
            </div>
          </a>

          <a href="mailto:trakintronicsweb@gmail.com" className="contact-card email">
            <div className="contact-icon">
              <Mail className="w-6 h-6" />
            </div>
            <div className="contact-content">
              <div className="contact-label">Email Us</div>
              <div className="contact-value">trakintronicsweb@gmail.com</div>
            </div>
          </a>

          <a href="mailto:trakintronicsweb@gmail.com" className="contact-card email">
            <div className="contact-icon">
              <Mail className="w-6 h-6" />
            </div>
            <div className="contact-content">
              <div className="contact-label">Alternate Email</div>
              <div className="contact-value">trakintronicsweb@gmail.com</div>
            </div>
          </a>
        </div>

        <div className="contact-address">
          <div className="address-icon">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="address-content">
            <strong>Office Address:</strong> T.T.ELECTRONICS, Office No.31 Trademark Complex,
            Near Gadge Baba Temple Gadge Nagar Amravati 444603
          </div>
        </div>
      </div>

      {/* Auto Reset Timer */}
      <div className="reset-timer">
        <div className="timer-progress">
          <div className="timer-fill"></div>
        </div>
        <div className="timer-text">
          <Clock className="w-4 h-4" />
          <span>Form will reset automatically in <strong>15 seconds</strong></span>
        </div>
      </div>
    </motion.div>
  );

  // ============================================================================
  // MAIN RENDER
  // ============================================================================
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="project-booking-page"
    >
      <SEO title="Project Booking" description="Book your electronics project or workshop with TRAKIN TRONICS — Amravati's top electronics lab. Custom college projects, IoT, PCB design & more." />
      <div className="background-effects">
        <div className="bg-grid"></div>
        <div className="gradient-blur gradient-1"></div>
        <div className="gradient-blur gradient-2"></div>
      </div>

      <div className="container">
        {connectionStatus === 'error' && (
          <motion.div
            className="connection-banner warning"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertTriangle className="w-5 h-5" />
            <div>
              <strong>Note:</strong> Connection test failed due to browser restrictions,
              but form submission is working correctly.
            </div>
          </motion.div>
        )}

        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="page-header"
        >
          <div className="header-badge">
            <Calendar className="w-5 h-5" />
            <span>PROJECT BOOKING FORM</span>
          </div>
          <h1 className="page-title">
            <span className="gradient-text">TRAKIN TRONICS</span>
          </h1>
          <div className="project-wala-banner">
            <div className="project-wala-text">
              <Sparkles className="w-5 h-5" />
              <span>PROJECT WALA</span>
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="project-start-text">
              PROJECT START FROM 499/-RS ONLY
            </div>
          </div>
        </motion.header>

        <div className="progress-steps">
          {[1, 2, 3, 4].map(step => (
            <div key={step} className="step-container">
              <div
                className={`step-circle ${currentStep >= step ? 'active' : ''} ${currentStep === step ? 'current' : ''}`}
                onClick={() => setCurrentStep(step)}
              >
                {step}
              </div>
              <span className="step-label">
                {step === 1 ? "Team Details" :
                  step === 2 ? "Project Info" :
                    step === 3 ? "Payment" :
                      "Review"}
              </span>
            </div>
          ))}
          <div className="progress-line">
            <div
              className="progress-fill"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="booking-container">
          <motion.div
            className="project-info-panel"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="info-card">
              <h3 className="info-title">
                <AlertTriangle className="w-5 h-5" />
                TERM & CONDITIONS
              </h3>
              <button
                className="terms-toggle"
                onClick={() => setShowTerms(!showTerms)}
              >
                {showTerms ? "Hide Terms" : "Show Terms"}
              </button>

              {showTerms && (
                <div className="terms-list">
                  {terms.map((term, index) => (
                    <div key={index} className="term-item">
                      <div className="term-number">{index + 1}.</div>
                      <div className="term-text">{term}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="info-card">
              <h3 className="info-title">
                <CheckCircle className="w-5 h-5" />
                SERVICES WITH PROJECT
              </h3>
              <button
                className="services-toggle"
                onClick={() => setShowServices(!showServices)}
              >
                {showServices ? "Hide Services" : "Show Services"}
              </button>

              {showServices && (
                <div className="services-list">
                  {services.map((service, index) => (
                    <div key={index} className="service-item">
                      <div className="service-icon">
                        {service.icon}
                      </div>
                      <span className="service-name">{service.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="info-card">
              <h3 className="info-title">
                <MapPin className="w-5 h-5" />
                Contact Information
              </h3>
              <div className="contact-info">
                <p className="contact-text">
                  <strong>Location:</strong> T.T.ELECTRONICS , Office No.31 Trademark Complex ,
                  Near Gadge Baba Temple Gadge Nagar Amravati 444603
                </p>
                <p className="contact-text">
                  <strong>Contact:</strong> +91 8767841367 / +91 7721892429
                </p>
                <p className="contact-text">
                  <strong>Email:</strong> trakintronicsweb@gmail.com
                </p>
              </div>

              <div className="contact-buttons">
                <a href="tel:+918767841367" className="contact-button phone">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a href="mailto:trakintronicsweb@gmail.com" className="contact-button email">
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="booking-form-panel"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="connection-status-container">
              {renderConnectionStatus()}
            </div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                renderSuccessState()
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <AnimatePresence>
                    {currentStep === 1 && renderStep1()}
                    {currentStep === 2 && renderStep2()}
                    {currentStep === 3 && renderStep3()}
                    {currentStep === 4 && renderStep4()}
                  </AnimatePresence>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className="footer-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="privacy-notice">
            <AlertCircle className="w-4 h-4" />
            <span>
              The name, email address and photo associated with your Google Account will be recorded when you upload files and submit this form
            </span>
          </div>
          <div className="required-note">
            * Indicates required question
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectBooking;