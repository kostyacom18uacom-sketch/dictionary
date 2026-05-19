import React, { useState } from 'react';
import Header from '../components/Header';
import WordList from '../components/WordList';
import Tabbar from '../components/Tabbar';
import VoiceBottomSheet from '../components/VoiceBottomSheet';

const HomeScreen = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [sheetState, setSheetState] = useState(1);

  // For demonstration: click on a word or a special trigger to open sheet
  // We'll just add a small floating debug button to switch states or open it
  
  return (
    <div className="min-h-screen bg-cloud-white">
      <Header />
      
      <main>
        <WordList />
      </main>

      <Tabbar />

      <VoiceBottomSheet 
        isOpen={isSheetOpen} 
        onClose={() => setSheetOpen(false)} 
        state={sheetState}
      />

      {/* Demo Controls (not part of final design, but for you to see the states) */}
      <div className="fixed top-120 right-8 z-50 flex flex-col gap-4">
        <button 
          onClick={() => { setSheetOpen(true); setSheetState(1); }}
          className="w-40 h-40 bg-sour-apple rounded-full text-10 font-bold flex items-center justify-center shadow-lg"
        >
          S1
        </button>
        <button 
          onClick={() => { setSheetOpen(true); setSheetState(2); }}
          className="w-40 h-40 bg-sour-apple rounded-full text-10 font-bold flex items-center justify-center shadow-lg"
        >
          S2
        </button>
        <button 
          onClick={() => { setSheetOpen(true); setSheetState(3); }}
          className="w-40 h-40 bg-sour-apple rounded-full text-10 font-bold flex items-center justify-center shadow-lg"
        >
          S3
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
