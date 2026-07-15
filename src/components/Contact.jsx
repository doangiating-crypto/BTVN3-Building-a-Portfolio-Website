import React, { useState, useEffect } from 'react';

const Contact = () => {
  // Form input states (Controlled Components)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // Error states for inputs
  const [formErrors, setFormErrors] = useState({});
  
  // Submission status (success popup banner)
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Destructure form data for easy access
  const { fullName, email, message } = formData;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error message when user starts typing
    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Email format validator regex
  const validateEmail = (emailStr) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailStr);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    // Validate fields
    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!message.trim()) {
      errors.message = 'Message is required';
    }

    // If there are errors, update state and stop submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Success flow
    console.log('Form successfully submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form fields
    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
    setFormErrors({});
  };

  // Auto-hide success notification after 7 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          {/* Success Banner Popup */}
          {isSubmitted && (
            <div className="success-banner">
              <span className="success-icon">✓</span>
              <p>
                Thank you! Your message has been successfully sent to <strong>doangiating@gmail.com</strong>.
              </p>
            </div>
          )}

          {/* Full Name input */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              className={formErrors.fullName ? 'input-error' : ''}
              placeholder="e.g. Đoàn Gia Tiến"
            />
            {formErrors.fullName && (
              <span className="error-text">{formErrors.fullName}</span>
            )}
          </div>

          {/* Email input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={formErrors.email ? 'input-error' : ''}
              placeholder="e.g. tiendoan@example.com"
            />
            {formErrors.email && (
              <span className="error-text">{formErrors.email}</span>
            )}
          </div>

          {/* Message input */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              rows="5"
              className={formErrors.message ? 'input-error' : ''}
              placeholder="Write your message here..."
            ></textarea>
            {formErrors.message && (
              <span className="error-text">{formErrors.message}</span>
            )}
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
