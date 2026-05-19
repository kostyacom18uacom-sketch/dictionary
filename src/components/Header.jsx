import React, { useState, useEffect } from 'react';
import { Users, Briefcase, Hash, Plane } from 'lucide-react';

const categories = [
  { id: 'family', name: 'Family', icon: Users },
  { id: 'work', name: 'Work', icon: Briefcase },
  { id: 'slang', name: 'Slang', icon: Hash },
  { id: 'travel', name: 'Travel', icon: Plane },
];

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Show when scrolling down or at the top, hide when scrolling up
      // WAIT, instruction says: 
      // "Коли користувач скролить список слів вгору, Header плавно ховається. 
      // При зупинці або скролі вниз — плавно з'являється назад."
      // Typically it's the opposite in mobile apps (hide on scroll down), 
      // but I must follow instructions.
      // Instructions: 
      // Up -> hide
      // Down -> show
      
      const scrollingUp = prevScrollPos > currentScrollPos;
      
      if (currentScrollPos < 10) {
        setVisible(true);
      } else if (scrollingUp) {
        setVisible(false); // Hide when scrolling up as per instructions
      } else {
        setVisible(true); // Show when scrolling down
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 bg-cloud-white z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="px-5 pt-5 pb-16">
        <h1 className="text-[22px] font-bold tracking-[-0.264px] mb-16">My Words</h1>
        
        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-8">
          {categories.map((cat) => (
            <div key={cat.id} className="chip flex-shrink-0 cursor-pointer">
              <cat.icon size={18} className="text-midnight-ink" />
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
