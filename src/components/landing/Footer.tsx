import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Your Company</h3>
          <p className="text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <nav className="w-full md:w-1/3 mb-8 md:mb-0">
          <ul className="flex flex-wrap gap-6 justify-center">
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <div className="w-full md:w-1/3 flex justify-end">
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}