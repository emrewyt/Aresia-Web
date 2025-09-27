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
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80)'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Header Navigation */}
      <header className="relative z-10 p-6">
        <nav className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            ARESIA
          </div>
          <div className="flex items-center space-x-6 text-white">
            <Link to="/" className="hover:text-red-400 transition-colors font-medium">
              Ev
            </Link>
            <Link to="/OnlineFix" className="hover:text-red-400 transition-colors font-medium">
              Çevrimiçi Kırma
            </Link>
            <a 
              href="https://guns.lol/emrewyt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors font-medium"
            >
              Emre
            </a>
            <a 
              href="https://discord.com/invite/M2tKrMMzRT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors font-medium"
            >
              Discord
            </a>
            <a 
              href="https://donate.bynogame.com/emrewyt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors font-medium"
            >
              Support me
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content - Card Layout */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
        <div className="max-w-6xl w-full">
          <div 
            className={`bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-1000 ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            style={{ minHeight: '600px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                
                {/* Top Navigation Menu */}
                <nav 
                  className={`flex flex-wrap gap-6 mb-8 transform transition-all duration-1000 delay-300 ${
                    isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                >
                  <Link 
                    to="/" 
                    className="text-gray-800 hover:text-red-500 transition-colors font-medium text-lg border-b-2 border-red-500"
                  >
                    Ev
                  </Link>
                  <Link 
                    to="/OnlineFix" 
                    className="text-gray-600 hover:text-red-500 transition-colors font-medium text-lg"
                  >
                    Çevrimiçi Kırma
                  </Link>
                  <a 
                    href="https://guns.lol/emrewyt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-500 transition-colors font-medium text-lg"
                  >
                    Emre
                  </a>
                  <a 
                    href="https://discord.com/invite/M2tKrMMzRT" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-500 transition-colors font-medium text-lg"
                  >
                    Discord
                  </a>
                  <a 
                    href="https://donate.bynogame.com/emrewyt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-500 transition-colors font-medium text-lg"
                  >
                    Support me
                  </a>
                </nav>

                {/* Title Section */}
                <div className="flex-1 flex flex-col justify-center">
                  <div 
                    className={`mb-6 transform transition-all duration-1000 delay-600 ${
                      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <div className="relative">
                      <h1 
                        className="text-6xl lg:text-8xl font-black text-gray-900 mb-2"
                        style={{
                          fontFamily: 'Impact, Arial Black, sans-serif',
                          letterSpacing: '-0.02em'
                        }}
                      >
                        ARESIA
                      </h1>
                      <div 
                        className="text-3xl lg:text-4xl font-light text-gray-500 ml-2"
                        style={{
                          fontFamily: 'Georgia, serif',
                          fontStyle: 'italic'
                        }}
                      >
                        Evreni
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div 
                    className={`space-y-4 transform transition-all duration-1000 delay-900 ${
                      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                      Dijital Rönesans ve Ruhun Yeniden Keşfi
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      Aresia, on yılı aşkın süredir dijital ve fiziksel dünyamıza hükmeden, yavan ve ruhsuz Minimalizm çağını sonlandırmak üzere yükselen, canlı, nefes alan bir kültürel devrimdir.
                    </p>

                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      Y2K'nın fütüristik iyimserliğini, Cybercore'un keskin enerjisini ve Frutiger Aero'nun zengin, dokunsal estetiğini modern bir felsefeyle harmanlayarak, insan ruhuna dokunan yeni bir sanatsal akımın temellerini atıyoruz.
                    </p>

                    <div className="mt-6 space-y-3">
                      <div>
                        <h3 className="font-bold text-red-600 text-sm lg:text-base">Sanatta ve Toplumda Yeni Bir Umut</h3>
                        <p className="text-gray-600 text-xs lg:text-sm">
                          Genç nesiller için umudun, yaratıcılığın ve sınırsız potansiyelin simgesi olmaktır.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-blue-600 text-sm lg:text-base">Teknolojinin ve İhtiyaçların Ötesi</h3>
                        <p className="text-gray-600 text-xs lg:text-sm">
                          Kritik deprem tespitinden yenilikçi oyun projelerine, fütüristik robotik hedeflerine kadar geniş bir vizyon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Copyright */}
                <div 
                  className={`text-xs text-gray-500 mt-8 transform transition-all duration-1000 delay-1200 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                >
                  © 2025 Aresia Evreni. Tüm hakları saklıdır.
                </div>
              </div>

              {/* Right Side - Image/Visual */}
              <div className="relative bg-gradient-to-br from-red-400 via-purple-500 to-blue-600 flex items-center justify-center overflow-hidden">
                <div 
                  className={`absolute inset-0 transform transition-all duration-1500 delay-400 ${
                    isLoaded ? 'scale-100 rotate-0' : 'scale-110 rotate-3'
                  }`}
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Overlay with pattern */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 via-transparent to-purple-600/40"></div>
                
                {/* Centered Logo/Text */}
                <div 
                  className={`relative z-10 text-center transform transition-all duration-1500 delay-800 ${
                    isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                  }`}
                >
                  <div 
                    className="text-8xl lg:text-9xl font-black text-white mb-4"
                    style={{
                      textShadow: '0 0 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(255, 0, 0, 0.4)',
                      fontFamily: 'Impact, Arial Black, sans-serif',
                      letterSpacing: '0.1em',
                      WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    A
                  </div>
                  <div 
                    className="text-white text-lg font-light tracking-widest"
                    style={{
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
                    }}
                  >
                    ARESIA EVRENI
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white opacity-30 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 bg-white opacity-20 rounded-full"></div>
                <div className="absolute top-1/3 left-4 w-3 h-20 bg-white opacity-10 rounded-full transform rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 p-6 text-center">
        <p className="text-white text-sm opacity-70">
          © 2025 Aresia Evreni. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
};

export default MainMenu;