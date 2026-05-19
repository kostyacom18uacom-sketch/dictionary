import React, { useState } from 'react';
import Header from '../components/Header';
import WordList from '../components/WordList';
import Tabbar from '../components/Tabbar';
import VoiceBottomSheet from '../components/VoiceBottomSheet';

const HomeScreen = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [sheetState, setSheetState] = useState(1);

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
    </div>
  );
};

export default HomeScreen;
