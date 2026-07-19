import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState('');

  const { fullName, email, message } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for the field being edited
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!fullName.trim()) {
      errors.fullName = 'Vui lòng nhập họ và tên của bạn.';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Vui lòng nhập địa chỉ email.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Email không hợp lệ.';
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = 'Vui lòng nhập nội dung tin nhắn.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      resetForm();
    }
  };

  const resetForm = () => {
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

  // Handle copy to clipboard
  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      setTimeout(() => {
        setCopiedField('');
      }, 2000); // hide copied notification after 2 seconds
    });
  };

  const myEmail = "doangiating@gmail.com";
  const myPhone = "0123456789"; // placeholder phone
  const myGithub = "https://github.com/doangiating-crypto";

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
                Thank you! Your message has been successfully sent to <strong>{myEmail}</strong>.
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
              className={formErrors.message ? 'input-error' : ''}
              rows="5"
              placeholder="Tell me about your project or inquiry..."
            ></textarea>
            {formErrors.message && (
              <span className="error-text">{formErrors.message}</span>
            )}
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitted}>
            {isSubmitted ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Quick Contact Links */}
        <div className="contact-links" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '4rem' }}>
          {/* Github */}
          <a href={myGithub} target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-primary)', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.color = '#06b6d4'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span style={{ marginTop: '0.75rem', fontSize: '0.95rem', fontWeight: '500' }}>GitHub</span>
          </a>
          
          {/* Email */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => handleCopy(myEmail, 'email')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.color = '#06b6d4'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span style={{ marginTop: '0.75rem', fontSize: '0.95rem', fontWeight: '500' }}>Email</span>
            </button>
            {copiedField === 'email' && <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', background: '#06b6d4', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold', animation: 'fadeInUp 0.2s', whiteSpace: 'nowrap' }}>Đã copy!</div>}
          </div>

          {/* Phone */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => handleCopy(myPhone, 'phone')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.color = '#06b6d4'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span style={{ marginTop: '0.75rem', fontSize: '0.95rem', fontWeight: '500' }}>SĐT</span>
            </button>
            {copiedField === 'phone' && <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', background: '#06b6d4', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold', animation: 'fadeInUp 0.2s', whiteSpace: 'nowrap' }}>Đã copy!</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
