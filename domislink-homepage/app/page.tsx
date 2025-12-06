'use client';

import { useState, useEffect } from 'react';

const portals = [
  { name: 'Aviation', icon: '✈️', color: '#00D4FF', desc: 'Flight bookings, aviation news & services' },
  { name: 'Education', icon: '🎓', color: '#EEFF00', desc: 'AI-powered learning with WAEC, NECO, JAMB support' },
  { name: 'Real Estate', icon: '🏠', color: '#FF6B35', desc: 'Property listings, rentals & investments' },
  { name: 'Marketplace', icon: '🛒', color: '#00FF88', desc: 'Buy, sell & trade anything' },
  { name: 'Entertainment', icon: '🎬', color: '#FF00FF', desc: 'Movies, music, events & streaming' },
  { name: 'Finance', icon: '💰', color: '#FFD700', desc: 'Banking, investments & crypto' },
  { name: 'Health', icon: '🏥', color: '#00FFCC', desc: 'Telemedicine, pharmacy & wellness' },
  { name: 'Jobs', icon: '💼', color: '#FF4444', desc: 'Career opportunities & recruitment' },
  { name: 'News', icon: '📰', color: '#FFFFFF', desc: 'Breaking news & current affairs' },
  { name: 'Tech', icon: '💻', color: '#00AAFF', desc: 'Gadgets, software & innovation' },
  { name: 'Food', icon: '🍔', color: '#FF8800', desc: 'Restaurants, delivery & recipes' },
];

const features = [
  { title: 'Brain Box AI', desc: 'Powered by Claude, OpenAI & custom models', icon: '🧠' },
  { title: 'TeachMaster', desc: 'AI video teachers for Nigerian & international curricula', icon: '👨‍🏫' },
  { title: 'Gamified Learning', desc: 'Earn points, badges & rewards as you learn', icon: '🎮' },
  { title: 'Subdomain Hosting', desc: 'Launch your business on yourname.domislink.com', icon: '🌐' },
  { title: 'Content Studio', desc: 'WYSIWYG editor with 50+ social media exports', icon: '✏️' },
  { title: 'Developer Console', desc: 'APIs, webhooks & automation tools', icon: '⚡' },
];

export default function HomePage() {
  const [activePortal, setActivePortal] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActivePortal((prev) => (prev + 1) % portals.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[#EEFF00]/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#EEFF00] flex items-center justify-center text-black font-black text-xl">
            D
          </div>
          <span className="text-2xl font-black tracking-tight">
            <span className="text-[#EEFF00]">DOMIS</span>
            <span className="text-white">LINK</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#portals" className="hover:text-[#EEFF00] transition-colors">Portals</a>
          <a href="#features" className="hover:text-[#EEFF00] transition-colors">Features</a>
          <a href="#pricing" className="hover:text-[#EEFF00] transition-colors">Pricing</a>
          <a href="#about" className="hover:text-[#EEFF00] transition-colors">About</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-[#EEFF00] border border-[#EEFF00] rounded-lg hover:bg-[#EEFF00]/10 transition-all">
            Sign In
          </button>
          <button className="px-4 py-2 bg-[#EEFF00] text-black font-bold rounded-lg hover:bg-[#EEFF00]/90 hover:scale-105 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-32">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEFF00]/10 border border-[#EEFF00]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#EEFF00] animate-pulse" />
            <span className="text-[#EEFF00] text-sm font-medium">Now Live in Nigeria</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-white">THE WORLD'S MOST</span>
            <br />
            <span className="text-[#EEFF00]">POWERFUL PLATFORM</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            11+ Business Portals. AI-Powered Everything. Zero Limits.
            <br />
            <span className="text-[#EEFF00]">Build your empire on DomisLink.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group px-8 py-4 bg-[#EEFF00] text-black font-bold text-lg rounded-xl hover:scale-105 transition-all flex items-center gap-3">
              Launch Your Portal
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-8 py-4 border border-white/30 rounded-xl hover:border-[#EEFF00] hover:text-[#EEFF00] transition-all flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">▶</span>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '11+', label: 'Business Portals' },
              { value: '1000+', label: 'Subdomain Pages' },
              { value: '<50ms', label: 'Global Response' },
              { value: '∞', label: 'Possibilities' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#EEFF00] mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section id="portals" className="px-6 py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-[#EEFF00]">11+</span> BUSINESS PORTALS
            </h2>
            <p className="text-gray-400 text-lg">One platform. Every industry. Unlimited potential.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portals.map((portal, index) => (
              <div
                key={portal.name}
                onMouseEnter={() => setActivePortal(index)}
                className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activePortal === index
                    ? 'bg-[#EEFF00]/10 border-[#EEFF00] scale-105'
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="text-4xl mb-3">{portal.icon}</div>
                <h3 className="font-bold text-lg mb-1" style={{ color: activePortal === index ? portal.color : 'white' }}>
                  {portal.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">{portal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              AI-POWERED <span className="text-[#EEFF00]">EVERYTHING</span>
            </h2>
            <p className="text-gray-400 text-lg">Built for the future. Available today.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#EEFF00]/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#EEFF00] transition-colors">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-[#EEFF00]/10 border border-[#EEFF00]/30">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              READY TO <span className="text-[#EEFF00]">DOMINATE?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands building their digital empires on DomisLink.
            </p>
            <button className="px-10 py-5 bg-[#EEFF00] text-black font-black text-xl rounded-xl hover:scale-105 transition-all">
              START FREE TODAY →
            </button>
            <p className="text-gray-500 text-sm mt-4">No credit card required • Instant setup • 24/7 support</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#EEFF00] flex items-center justify-center text-black font-black">D</div>
            <span className="font-bold">DomisLink International Business Lagos Nig Ltd</span>
          </div>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <span>19 Powerline Avenue, Meiran, Lagos</span>
            <span>+234 904 983 7474</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2025 DomisLink. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
