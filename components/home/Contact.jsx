"use client";
import React, { useState } from 'react';
import { BsSendFill, BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success state after a few seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="w-11/12 max-w-7xl mx-auto py-24 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gray-400/10 dark:bg-gray-600/10 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-gray-300/10 dark:bg-gray-500/10 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none -translate-y-1/2" style={{ animationDelay: '2s' }}></div>

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-black dark:text-white">
          Get In Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto font-medium">
          Have a project in mind, a question, or just want to say hi? I'd love to hear from you. Drop a message below and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full lg:w-2/3 bg-white/60 dark:bg-black/50 backdrop-blur-2xl p-8 lg:p-12 rounded-[2rem] border border-black/10 dark:border-white/10 shadow-2xl">
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-black dark:text-white ml-1 tracking-wide uppercase">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-medium"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-black dark:text-white ml-1 tracking-wide uppercase">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-black dark:text-white ml-1 tracking-wide uppercase">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="What's on your mind?"
                className="w-full px-5 py-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none font-medium"
              ></textarea>
            </div>

            <div className="pt-4 flex flex-col items-center">
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-lg w-full sm:w-auto overflow-hidden transition-all hover:scale-105 shadow-xl shadow-black/20 dark:shadow-white/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 border border-black/10 dark:border-white/10"
              >
                <div className="absolute inset-0 bg-white/10 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 tracking-wide">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </span>
                {status !== 'loading' && (
                  <BsSendFill className="relative z-10 text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                )}
              </button>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-xl border border-green-200 dark:border-green-800/50 mt-4">
                <BsCheckCircleFill className="text-xl flex-shrink-0" />
                <p className="font-semibold text-sm">Message sent successfully! I'll be in touch soon.</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-xl border border-red-200 dark:border-red-800/50 mt-4">
                <BsXCircleFill className="text-xl flex-shrink-0" />
                <p className="font-semibold text-sm">{errorMsg}</p>
              </div>
            )}

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
