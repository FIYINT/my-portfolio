'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Link, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Business Intelligence Dashboarding',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }
      setStatus('success');
      setForm({ name: '', email: '', subject: 'Business Intelligence Dashboarding', message: '' });
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <section className="bg-white border-b border-[#E5E7EB] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 rounded-full px-3 py-1.5 text-xs font-medium mb-4">
            Connect with me
          </span>
          <h1 className="text-4xl font-semibold text-gray-900 tracking-tight mb-6">
            Let's build something <span className="text-blue-600">extraordinary.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Whether you have a specific project in mind or just want to explore how data can
            transform your enterprise, I'm here to help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Inquiry Form</h3>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <CheckCircle className="text-green-500" size={48} />
                    <h4 className="text-lg font-semibold text-gray-900">Message Sent!</h4>
                    <p className="text-sm text-gray-500 max-w-xs">
                      Your inquiry has been delivered. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 text-sm text-blue-600 font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all"
                          placeholder="john@enterprise.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Subject / Interest
                      </label>
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all appearance-none"
                      >
                        <option>Business Intelligence Dashboarding</option>
                        <option>AI Automation & LLMs</option>
                        <option>Predictive Analytics Research</option>
                        <option>Cloud Infrastructure / DevOps</option>
                        <option>Enterprise Strategy Consulting</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all resize-none"
                        placeholder="Tell me about your enterprise challenges..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                        <AlertCircle size={16} />
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gray-900 text-white rounded-lg px-6 py-4 text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send size={16} />
                      {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Single full-height Contact Channels card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 p-8 h-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-8">Contact Channels</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:fiyinfadayini@gmail.com"
                        className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        fiyinfadayini@gmail.com
                      </a>
                      <p className="text-xs text-gray-400 mt-1">
                        Best for project briefs & proposals
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/2347013231356"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        +234 701 323 1356
                      </a>
                      <p className="text-xs text-gray-400 mt-1">
                        Quick questions & rapid responses
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <Link size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/in/titus-fadayini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        in/titus-fadayini
                      </a>
                      <p className="text-xs text-gray-400 mt-1">
                        Professional network & collaborations
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#E5E7EB]">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                      Response Times
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Email inquiries</span>
                        <span className="text-xs font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                          Within 24h
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">WhatsApp messages</span>
                        <span className="text-xs font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                          Within 4h
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Enterprise projects</span>
                        <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                          Slots open
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
