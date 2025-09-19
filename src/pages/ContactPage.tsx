import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactPage = () => {
  const contactInfoRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  
  const [formType, setFormType] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+971 4 XXX XXXX', '+971 50 XXX XXXX (Mobile)'],
      available: '24/7 Support'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@kmastays.com', 'corporate@kmastays.com'],
      available: 'Response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Dubai, United Arab Emirates', 'Multiple service locations'],
      available: 'By appointment'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Sunday - Thursday: 9:00 AM - 7:00 PM', 'Friday - Saturday: 10:00 AM - 5:00 PM'],
      available: 'Gulf Standard Time'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-brand-off-white pt-20">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 text-reveal">
            Contact KMASTAYS Dubai
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-reveal-delay-1">
            Ready to experience premium corporate accommodation in Dubai? Our team is here to help you find the perfect solution.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Information */}
        <section ref={contactInfoRef} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center card-hover animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-glow">
                  <info.icon className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-3">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-xs text-brand-secondary font-medium">
                  {info.available}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Forms */}
        <section ref={formRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 animate-on-scroll">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">
                Get in Touch
              </h2>
              
              {/* Form Type Selector */}
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setFormType('general')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    formType === 'general'
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-light-grey text-brand-primary hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  General Inquiry
                </button>
                <button
                  onClick={() => setFormType('corporate')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    formType === 'corporate'
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-light-grey text-brand-primary hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  Corporate Consultation
                </button>
                <button
                  onClick={() => setFormType('viewing')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    formType === 'viewing'
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-light-grey text-brand-primary hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  Property Viewing
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>
                {formType === 'corporate' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                >
                  <option value="">Select Subject</option>
                  {formType === 'general' && (
                    <>
                      <option value="property-inquiry">Property Inquiry</option>
                      <option value="rates-availability">Rates & Availability</option>
                      <option value="general-info">General Information</option>
                    </>
                  )}
                  {formType === 'corporate' && (
                    <>
                      <option value="extended-stays">Extended Stay Packages</option>
                      <option value="team-accommodation">Team Accommodation</option>
                      <option value="relocation-services">Relocation Services</option>
                      <option value="corporate-rates">Corporate Rates</option>
                    </>
                  )}
                  {formType === 'viewing' && (
                    <>
                      <option value="individual-viewing">Individual Viewing</option>
                      <option value="group-viewing">Group Viewing</option>
                      <option value="virtual-tour">Virtual Tour Request</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                  placeholder="Please provide details about your requirements, preferred dates, number of guests, and any specific needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>

          {/* Quick Contact & Live Support */}
          <div className="space-y-6 animate-on-scroll">
            {/* WhatsApp */}
            <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
              <h3 className="text-xl font-bold text-brand-primary mb-4">
                Instant Support
              </h3>
              <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 mb-4"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us Now</span>
              </a>
              <p className="text-sm text-gray-600 text-center">
                Get instant responses for urgent inquiries
              </p>
            </div>

            {/* Emergency Contact */}
            <div className="bg-brand-light-grey rounded-xl p-6">
              <h4 className="font-bold text-brand-primary mb-3">
                Emergency Contact
              </h4>
              <p className="text-sm text-gray-700 mb-2">
                For urgent matters outside business hours:
              </p>
              <p className="font-semibold text-brand-primary">
                +971 50 XXX XXXX
              </p>
            </div>

            {/* FAQ Link */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-bold text-brand-primary mb-3">
                Frequently Asked Questions
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Find quick answers to common questions about our services, pricing, and policies.
              </p>
              <button className="text-brand-secondary hover:text-brand-primary font-medium flex items-center space-x-2 transition-colors">
                <span>View FAQ</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;