import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Container from './Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                ISL
              </span>
              <span className="text-white">Bridge</span>
            </h3>
            <p className="text-neutral-400 text-sm">
              Bridging communication gaps with AI-powered Indian Sign Language translation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-primary-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">How It Works</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-primary-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">API Reference</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Support Center</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400" />
                <span>hello@islbridge.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary-400" />
                <span>Bangalore, India</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-neutral-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="bg-neutral-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-neutral-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 py-6 text-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} ISL Bridge. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;