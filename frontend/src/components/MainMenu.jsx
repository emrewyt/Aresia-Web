import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: 'url(https://i.pinimg.com/1200x/d9/44/ab/d944ab2d46564c0b557588629ee71c82.jpg)'
      }}
    >
      {/* Header Navigation */}
      <header className="p-6">
        <nav className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            ARES
          </div>
          <div className="flex items-center space-x-6 text-white">
            <Link to="/online-cracking" className="hover:text-red-400 transition-colors">
              Çevrim içi kırma
            </Link>
            <a 
              href="https://www.guns.lol/emrewyt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              Emre
            </a>
            <a 
              href="https://steamdb.info" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              SteamDB
            </a>
            <a 
              href="https://discord.gg/M2tKrMMzRT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              Discord
            </a>
            <a 
              href="https://donate.bynogame.com/emrewyt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              Support me
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Search Section */}
        <div className="w-full max-w-2xl mb-8">
          <div className="backdrop-blur-md bg-white bg-opacity-10 rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
                <input
                  type="text"
                  value={gameId}
                  onChange={(e) => setGameId(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Lütfen bir app id giriniz"
                  className="w-full pl-12 pr-4 py-4 bg-black bg-opacity-30 border border-white border-opacity-20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={checkManifest}
                disabled={isChecking}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-red-600 hover:bg-red-700'
                } disabled:opacity-70`}
              >
                {isChecking ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    KONTROL EDİLİYOR...
                  </span>
                ) : isCompleted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    KONTROL TAMAMLANDI
                  </span>
                ) : (
                  'İndir'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="w-full max-w-2xl mb-8">
            <div className="backdrop-blur-md bg-black bg-opacity-60 rounded-2xl p-6 border border-gray-700">
              <div 
                ref={terminalRef}
                className="bg-black rounded-lg p-4 h-32 overflow-y-auto font-mono text-green-400 text-sm whitespace-pre-wrap"
              >
                {terminalText}
              </div>
            </div>
          </div>
        )}

        {/* Download Section */}
        {showDownload && (
          <div className="w-full max-w-2xl">
            <div className="backdrop-blur-md bg-white bg-opacity-10 rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-center">
                <h3 className="text-white text-xl font-semibold mb-4">Manifest Hazır!</h3>
                <a
                  href={downloadUrl}
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Manifest İndir
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="p-6 text-center">
        <p className="text-white text-sm opacity-70">
          © 2025 Ares. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
};

export default MainMenu;