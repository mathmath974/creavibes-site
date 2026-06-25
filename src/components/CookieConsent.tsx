import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des cookies.
              <a href="/mentions-legales#cookies" className="text-brand-purple hover:text-brand-blue ml-1">
                En savoir plus
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}