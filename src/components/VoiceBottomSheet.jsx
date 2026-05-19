import React from 'react';
import { X, Pause, Square, Play, Headphones, BookOpen, Loader2 } from 'lucide-react';

const VoiceBottomSheet = ({ isOpen, onClose, state = 1 }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-midnight-ink/40 backdrop-blur-sm"
        // onClick is blocked as per instruction "Клік по бекдропу заблоковано"
      />
      
      {/* Sheet */}
      <div className="relative w-full max-w-md bg-cloud-white rounded-t-[24px] px-24 pt-12 pb-48 shadow-subtle animate-in slide-in-from-bottom duration-300">
        {/* Drag Handle */}
        <div className="w-40 h-4 bg-slate-gray/30 rounded-full mx-auto mb-16" />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-16 right-24 text-slate-gray hover:text-midnight-ink"
        >
          <X size={24} />
        </button>

        {state === 1 && (
          <div className="flex flex-col items-center">
            <h2 className="text-18 font-bold text-midnight-ink mb-16">Practice Pronunciation</h2>
            <div className="text-center mb-40">
              <div className="text-[32px] font-bold text-midnight-ink">Subtle</div>
              <div className="text-16 text-slate-gray font-mono">[/ˈsʌt.əl/]</div>
            </div>
            
            {/* Visualizer Mockup */}
            <div className="w-full h-64 flex items-center justify-center gap-4 mb-48">
              {[1,2,3,4,5,6,7,8,7,6,5,4,3,2,1].map((h, i) => (
                <div 
                  key={i}
                  className="w-4 bg-sour-apple rounded-full animate-pulse" 
                  style={{ height: `${h * 4 + 8}px`, animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            <div className="flex gap-16 w-full">
              <button className="flex-1 h-56 rounded-full border border-slate-gray flex items-center justify-center gap-8 font-semibold">
                <Pause size={20} /> Pause
              </button>
              <button className="flex-1 h-56 rounded-full bg-coal-black text-cloud-white flex items-center justify-center gap-8 font-semibold">
                <Square size={20} fill="currentColor" /> Stop
              </button>
            </div>
          </div>
        )}

        {state === 2 && (
          <div className="flex flex-col items-center py-64">
            <Loader2 className="animate-spin text-sour-apple mb-16" size={48} />
            <p className="text-16 font-medium text-midnight-ink">AI is analyzing your voice...</p>
          </div>
        )}

        {state === 3 && (
          <div className="flex flex-col items-center">
            <div className="text-center mb-32">
              <div className="text-18 font-bold text-[#059669] mb-8">Perfect! Word recognized</div>
              <p className="text-14 text-slate-gray">
                Tip: Focus on the 't' sound — it sounds closer to a soft 'd'.
              </p>
            </div>

            <div className="flex gap-16 w-full mb-24">
              <button className="flex-1 h-48 rounded-full bg-frost text-midnight-ink flex items-center justify-center gap-8 text-14 font-medium">
                <Play size={16} fill="currentColor" /> Your Voice
              </button>
              <button className="flex-1 h-48 rounded-full bg-frost text-midnight-ink flex items-center justify-center gap-8 text-14 font-medium">
                <Headphones size={16} /> Native Guide
              </button>
            </div>

            <button className="w-full btn-primary">
              View Full Definition
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceBottomSheet;
