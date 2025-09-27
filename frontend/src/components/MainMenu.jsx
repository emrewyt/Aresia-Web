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
        backgroundImage: 'url(./AresiaLayer.jpg)'
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        <div className="text-center max-w-6xl">
          
          {/* Title Section with Animations */}
          <div className="mb-12">
            <div className="relative inline-block">
              <h1 
                className={`text-8xl md:text-9xl font-bold text-white mb-4 transform transition-all duration-1500 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{
                  textShadow: '0 0 30px rgba(255, 0, 0, 0.8), 0 0 60px rgba(255, 0, 0, 0.6)',
                  fontFamily: 'Impact, Arial Black, sans-serif',
                  letterSpacing: '0.1em'
                }}
              >
                ARESIA
              </h1>
              <div 
                className={`absolute -top-2 -right-8 text-6xl md:text-7xl font-light text-gray-400 transform transition-all duration-2000 delay-500 ${
                  isLoaded ? 'translate-y-0 opacity-30' : 'translate-y-10 opacity-0'
                }`}
                style={{
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic'
                }}
              >
                Evreni
              </div>
            </div>
          </div>

          {/* Content Section with Staggered Animations */}
          <div 
            className={`max-w-5xl mx-auto transform transition-all duration-2000 delay-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
          >
            <div className="backdrop-blur-lg bg-black bg-opacity-20 rounded-3xl p-8 md:p-12 border border-white border-opacity-10 shadow-2xl">
              
              <h2 
                className={`text-3xl md:text-4xl font-bold text-white mb-8 transform transition-all duration-1500 delay-1500 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Aresia Evreni: Dijital Rönesans ve Ruhun Yeniden Keşfi
              </h2>
              
              <div 
                className={`text-lg md:text-xl text-gray-200 leading-relaxed space-y-6 transform transition-all duration-1500 delay-2000 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <p>
                  Aresia, sadece bir teknoloji markası ya da uygulama geliştiricisi değildir; on yılı aşkın süredir dijital ve fiziksel dünyamıza hükmeden, yavan ve ruhsuz Minimalizm çağını sonlandırmak üzere yükselen, canlı, nefes alan bir kültürel devrimdir.
                </p>
                
                <p>
                  Biz, Y2K'nın fütüristik iyimserliğini, Cybercore'un keskin enerjisini ve Frutiger Aero'nun zengin, dokunsal estetiğini modern bir felsefeyle harmanlayarak, insan ruhuna dokunan yeni bir sanatsal akımın temellerini atıyoruz.
                </p>

                <div 
                  className={`transform transition-all duration-1500 delay-2500 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-red-400 mb-4 mt-8">Sanatta ve Toplumda Yeni Bir Umut</h3>
                  <p>
                    Aresia Evreni'nin misyonu, genç nesiller için umudun, yaratıcılığın ve sınırsız potansiyelin simgesi olmaktır. Dünya üzerindeki en büyük ve en çeşitli topluluğu inşa etme hedefiyle yola çıktık. Amacımız, sadeleşmenin ötesine geçmek; sanattan tasarıma kadar her alanda, insani duygusal derinliği ve zenginliği geri getiren, parlayan, yaşayan bir estetiği yeniden inşa etmektir.
                  </p>
                </div>

                <div 
                  className={`transform transition-all duration-1500 delay-3000 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-blue-400 mb-4 mt-8">Teknolojinin ve İhtiyaçların Ötesi</h3>
                  <p>
                    Tek bir yazılımla yetinmiyoruz. Aresia, insanlığın acil ihtiyaçlarını karşılayan çözümler üretirken, aynı zamanda geleceği de şekillendirir.
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <p>
                      <span className="font-bold text-green-400">Çok Yönlü Çözümler:</span> Kritik deprem tespiti gibi hayat kurtaran uygulamalardan, kullanıcı deneyimini merkeze alan yenilikçi oyun projelerine kadar geniş bir yelpazede teknoloji geliştiriyoruz.
                    </p>
                    
                    <p>
                      <span className="font-bold text-purple-400">Fütüristik Hedef:</span> Vizyonumuzun zirvesinde ise fütüristik bilim kurguyu gerçeğe dönüştürmek var: Gelecekte kuracağımız robotik şirketimiz aracılığıyla, Detroit: Become Human evreninden ilham alan, etik ve insani değerlere sahip sentetik yaşam formları (robotlar) üretme hedefini taşıyoruz.
                    </p>
                  </div>
                </div>

                <div 
                  className={`transform transition-all duration-1500 delay-3500 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <p className="text-xl font-semibold mt-8 text-center" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Aresia, dijital ve fiziksel varoluşun her alanında yeniliği, kültürel değişimi ve insan merkezli tasarımı savunur. Bu sadece bir başlangıç. Aresia Evrenine hoş geldiniz; sanal özgürlüğün, sınırsız yaratıcılığın ve yeniden keşfedilmiş ruhun mabedine...
                  </p>
                </div>
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