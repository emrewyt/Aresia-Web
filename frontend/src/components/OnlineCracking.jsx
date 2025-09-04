import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockGames } from '../data/mockData';
import { ExternalLink, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const OnlineCracking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter games based on search term
  const filteredGames = useMemo(() => {
    return mockGames.filter(game =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredGames.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGames = filteredGames.slice(startIndex, endIndex);

  // Reset to page 1 when search term changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleGameClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 10;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 4) {
        pages.push('...');
      }
      
      // Show pages around current page
      const start = Math.max(2, currentPage - 2);
      const end = Math.min(totalPages - 1, currentPage + 2);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 3) {
        pages.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Navigation */}
      <header className="bg-black bg-opacity-50 p-6 sticky top-0 z-10">
        <nav className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            ARES
          </div>
          <div className="flex items-center space-x-6 text-white">
            <Link to="/" className="hover:text-red-400 transition-colors">
              Ana menü
            </Link>
            <span className="text-red-400 font-semibold">Çevrim içi kırma</span>
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
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Çevrim içi Oyun Kırma
        </h1>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mockGames.map((game) => (
            <div
              key={game.id}
              onClick={() => handleGameClick(game.link)}
              className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                game.link 
                  ? 'hover:scale-105 hover:shadow-xl cursor-pointer hover:bg-gray-700' 
                  : 'opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                {game.image && !game.image.includes('//header.jpg') ? (
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/460x215/374151/9CA3AF?text=No+Image';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-600 flex items-center justify-center text-gray-400">
                    <span className="text-sm">Görsel Yok</span>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                  {game.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">
                    #{game.hash}
                  </span>
                  {game.link && (
                    <ExternalLink className="w-4 h-4 text-red-400" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 p-6 mt-12">
        <div className="text-center">
          <p className="text-white text-sm opacity-70">
            © 2025 Ares. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OnlineCracking;