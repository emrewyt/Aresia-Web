import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const DisclaimerModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('disclaimerAccepted')) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 max-w-md w-full relative">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-4">Uyarı</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Bu web sitesi ve araçları yalnızca eğitim amaçlıdır. Lütfen kullanımı kendi sorumluluğunuzdadır.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            © 2025 Ares. Tüm hakları saklıdır.
          </p>
          <button
            onClick={handleAccept}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-semibold"
          >
            Anladım
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;