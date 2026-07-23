import { useState } from 'react';
import { Send, MapPin, Mail, MessageSquare, CheckCircle } from 'lucide-react';

const CONTACT_DETAILS = [
  { icon: MapPin, label: 'Headquarters', value: '229 tiwariganj lucknow' },
  { icon: Mail, label: 'Business Inquiries', value: 'rajshukla227811@gmail.com' },
  { icon: MessageSquare, label: 'Press & Media', value: 'rajshukla227811@gmail.com' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen pt-24 pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="mb-16 border-l-2 border-cyan-400 pl-6">
        <div className="mb-2 font-inter text-[10px] uppercase tracking-[0.3em] text-cyan-400">Get in Touch</div>
        <h1 className="font-podium text-5xl uppercase text-white sm:text-6xl lg:text-7xl">
          Join The <span className="hero-gradient-text">Adventure</span>
        </h1>
        <p className="mt-4 max-w-xl font-inter text-sm text-white/55 leading-relaxed">
          Partnerships, press, business inquiries — or just a fan saying hello. We read every message.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16 max-w-7xl">
        {/* Contact info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="group flex gap-4 border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/8">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-cyan-500/30 bg-cyan-500/10">
                <Icon className="h-4 w-4 text-cyan-400" />
              </div>
              <div>
                <div className="mb-1 font-inter text-[10px] uppercase tracking-widest text-white/40">{label}</div>
                <div className="font-inter text-sm text-white/70">{value}</div>
              </div>
            </div>
          ))}

          {/* Social row */}
          <div className="mt-4 border-t border-white/5 pt-6">
            <div className="mb-4 font-inter text-[10px] uppercase tracking-widest text-white/30">Follow the Studio</div>
            <div className="flex flex-wrap gap-2">
              {['Twitter', 'Discord', 'YouTube', 'Twitch'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="border border-white/15 px-3 py-1.5 font-inter text-xs text-white/50 uppercase tracking-widest transition-all duration-200 hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full min-h-64 text-center border border-cyan-500/30 bg-cyan-500/5 p-12">
              <CheckCircle className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="font-podium text-2xl uppercase text-white mb-2">Message Sent!</h3>
              <p className="font-inter text-sm text-white/55 max-w-xs">
                Thanks for reaching out. Our team will get back to you within 2–3 business days.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                className="mt-8 border border-cyan-400/40 px-6 py-2.5 font-inter text-xs uppercase tracking-widest text-cyan-400 hover:bg-cyan-400/10 transition-all"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-inter text-[10px] uppercase tracking-widest text-white/40">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 font-inter text-sm text-white placeholder-white/25 outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-inter text-[10px] uppercase tracking-widest text-white/40">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 font-inter text-sm text-white placeholder-white/25 outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-inter text-[10px] uppercase tracking-widest text-white/40">Subject</label>
                <select
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 font-inter text-sm text-white outline-none focus:border-cyan-500/60 transition-colors appearance-none"
                  style={{ color: form.subject ? 'white' : 'rgba(255,255,255,0.25)' }}
                >
                  <option value="" disabled style={{ background: '#0a0f1e', color: 'rgba(255,255,255,0.4)' }}>Select a topic</option>
                  <option value="business" style={{ background: '#0a0f1e', color: 'white' }}>Business Partnership</option>
                  <option value="press" style={{ background: '#0a0f1e', color: 'white' }}>Press & Media</option>
                  <option value="careers" style={{ background: '#0a0f1e', color: 'white' }}>Careers</option>
                  <option value="fan" style={{ background: '#0a0f1e', color: 'white' }}>Fan Message</option>
                  <option value="other" style={{ background: '#0a0f1e', color: 'white' }}>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-inter text-[10px] uppercase tracking-widest text-white/40">Message</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  className="w-full resize-none bg-white/5 border border-white/15 px-4 py-3 font-inter text-sm text-white placeholder-white/25 outline-none focus:border-cyan-500/60 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group flex items-center gap-2.5 bg-cyan-400 px-8 py-3.5 font-inter text-xs uppercase tracking-widest text-black font-bold transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
