import React, { useState, useEffect } from 'react';
import { Search, Plus } from 'lucide-react';

const Tabbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // "Коли користувач скролить список вниз, Tabbar ховається під екран. 
      // Коли скролить вгору — миттєво виїжджає."
      
      const scrollingUp = prevScrollPos > currentScrollPos;
      
      if (currentScrollPos < 10) {
        setVisible(true);
      } else if (scrollingUp) {
        setVisible(true); // Show when scrolling up
      } else {
        setVisible(false); // Hide when scrolling down
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav 
      className={`fixed bottom-0 left-0 right-0 bg-cloud-white z-40 px-5 pb-5 pt-4 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ boxShadow: '0 -4px 12px rgba(29, 33, 48, 0.04)' }}
    >
      <div className="flex items-center gap-16">
        <div className="flex-1 relative">
          <Search className="absolute left-16 top-1/2 -translate-y-1/2 text-slate-gray" size={20} />
          <input 
            type="text" 
            placeholder="Type the first letter..."
            className="w-full h-[56px] pl-48 pr-16 bg-frost rounded-full text-midnight-ink focus:outline-none placeholder:text-slate-gray"
          />
        </div>
        
        <button className="w-[56px] h-[56px] bg-sour-apple rounded-full flex items-center justify-center text-midnight-ink shadow-subtle-2 flex-shrink-0">
          <Plus size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Tabbar;
