import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const serviceId = 'service_ljdylol';      // ✅ Replace with your EmailJS service ID
    const templateId = 'template_w85hapx';    // ✅ Replace with your EmailJS template ID
    const userId = 'j3CNNxj6uNVvxILA4';     // ✅ Replace with your EmailJS public key

    console.log('Sending Email...', formData);

    try {
      const response = await emailjs.send(serviceId, templateId, formData, userId);
      console.log('Email sent!', response.status, response.text);

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Get in Touch" subtitle="Let's start a conversation" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Have a project in mind or want to explore opportunities? Feel free to reach out.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:ezhilnilavane03@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    ezhilnilavane03@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <a href="tel:+916369635417" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                    +91 6369635417
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            {submitSuccess && (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
                Message sent successfully!
              </div>
            )}

            {submitError && (
              <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-lg mb-6">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <Button type="submit" primary disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
