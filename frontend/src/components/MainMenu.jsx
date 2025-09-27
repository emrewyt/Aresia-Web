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
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/AresiaLayer.jpg)'
      }}
    >
      
      {/* Main Content - Full Width */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full">
          <div 
            className={`bg-white rounded-3xl shadow-2xl p-8 lg:p-12 transform transition-all duration-1000 ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            
            {/* Top Navigation Menu */}
            <nav 
              className={`flex flex-wrap gap-6 mb-12 transform transition-all duration-1000 delay-300 ${
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
            <div 
              className={`mb-8 transform transition-all duration-1000 delay-600 ${
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
              className={`space-y-6 transform transition-all duration-1000 delay-900 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                Aresia Evreni: Dijital Rönesans ve Ruhun Yeniden Keşfi
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                Aresia, sadece bir teknoloji markası ya da uygulama geliştiricisi değildir; on yılı aşkın süredir dijital ve fiziksel dünyamıza hükmeden, yavan ve ruhsuz Minimalizm çağını sonlandırmak üzere yükselen, canlı, nefes alan bir kültürel devrimdir.
              </p>

              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                Biz, Y2K'nın fütüristik iyimserliğini, Cybercore'un keskin enerjisini ve Frutiger Aero'nun zengin, dokunsal estetiğini modern bir felsefeyle harmanlayarak, insan ruhuna dokunan yeni bir sanatsal akımın temellerini atıyoruz.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-3">Sanatta ve Toplumda Yeni Bir Umut</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aresia Evreni'nin misyonu, genç nesiller için umudun, yaratıcılığın ve sınırsız potansiyelin simgesi olmaktır. Dünya üzerindeki en büyük ve en çeşitli topluluğu inşa etme hedefiyle yola çıktık. Amacımız, sadeleşmenin ötesine geçmek; sanattan tasarıma kadar her alanda, insani duygusal derinliği ve zenginliği geri getiren, parlayan, yaşayan bir estetiği yeniden inşa etmektir. Aresia, monotonluktan kurtuluşun ve dijital sanata yeni bir boyut kazandırmanın adıdır.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Teknolojinin ve İhtiyaçların Ötesi</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Tek bir yazılımla yetinmiyoruz. Aresia, insanlığın acil ihtiyaçlarını karşılayan çözümler üretirken, aynı zamanda geleceği de şekillendirir.
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-bold text-green-600">Çok Yönlü Çözümler:</span> Kritik deprem tespiti gibi hayat kurtaran uygulamalardan, kullanıcı deneyimini merkeze alan yenilikçi oyun projelerine kadar geniş bir yelpazede teknoloji geliştiriyoruz.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-bold text-purple-600">Fütüristik Hedef:</span> Vizyonumuzun zirvesinde ise fütüristik bilim kurguyu gerçeğe dönüştürmek var: Gelecekte kuracağımız robotik şirketimiz aracılığıyla, Detroit: Become Human evreninden ilham alan, etik ve insani değerlere sahip sentetik yaşam formları (robotlar) üretme hedefini taşıyoruz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                <p className="text-gray-700 text-center font-medium text-lg leading-relaxed">
                  Aresia, dijital ve fiziksel varoluşun her alanında yeniliği, kültürel değişimi ve insan merkezli tasarımı savunur. Bu sadece bir başlangıç. Aresia Evrenine hoş geldiniz; sanal özgürlüğün, sınırsız yaratıcılığın ve yeniden keşfedilmiş ruhun mabedine...
                </p>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div 
              className={`text-sm text-gray-500 mt-12 text-center transform transition-all duration-1000 delay-1200 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              © 2025 Aresia. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;