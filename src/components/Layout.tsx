import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import CookieConsent from './CookieConsent';
import CTAButton from './CTAButton';

const CAL_URL = "https://cal.com/creavibes/decouverte";

const navLinks = [
  { href: '/creation-site-internet-tahiti', label: 'Sites web' },
  { href: '/community-management-tahiti', label: 'Réseaux sociaux' },
  { href: '/creation-application-polynesie', label: 'Applications' },
  { href: '/automatisation-ia-tahiti', label: 'IA' },
  { href: '/blog', label: 'Blog' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://res.cloudinary.com/dpnonvhhs/image/upload/v1743506228/Design_sans_titre_23_pcsvid.png"
              alt="CréaVibes — Agence digitale à Tahiti"
              className="h-11 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  location.pathname === link.href
                    ? 'bg-sky-50 text-[#0ea5e9]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-3">
              <CTAButton size="sm" />
            </div>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0ea5e9] text-white font-semibold px-3 py-2 rounded-full text-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              RDV visio
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="px-4 py-4 space-y-1">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                >
                  Accueil
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium ${
                      location.pathname === link.href
                        ? 'bg-sky-50 text-[#0ea5e9]'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <img
                src="https://res.cloudinary.com/dpnonvhhs/image/upload/v1743506228/Design_sans_titre_23_pcsvid.png"
                alt="CréaVibes"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Votre partenaire digital à Tahiti. On accompagne les patentés et petites entreprises de Polynésie française dans leur développement en ligne.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Nos services</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/creation-site-internet-tahiti" className="text-gray-400 hover:text-white transition">Création de sites web</Link></li>
                <li><Link to="/community-management-tahiti" className="text-gray-400 hover:text-white transition">Community management</Link></li>
                <li><Link to="/creation-application-polynesie" className="text-gray-400 hover:text-white transition">Applications mobiles</Link></li>
                <li><Link to="/automatisation-ia-tahiti" className="text-gray-400 hover:text-white transition">Automatisation IA</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="mailto:contact@creavibespro.com" className="hover:text-white transition">contact@creavibespro.com</a></li>
                <li><a href="https://www.facebook.com/creavibespro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook @creavibespro</a></li>
              </ul>
              <div className="mt-6">
                <CTAButton size="sm" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">&copy; 2026 CréaVibes. Tous droits réservés.</p>
            <Link to="/mentions-legales" className="text-gray-500 text-sm hover:text-white transition">Mentions légales</Link>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
}
