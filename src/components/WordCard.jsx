import React from 'react';
import { Volume2 } from 'lucide-react';

const WordCard = ({ word, transcription, context, isExpanded, status }) => {
  return (
    <div className={`card-default mb-16 flex items-start justify-between`}>
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex items-center gap-12">
          <span className="text-18 font-bold text-midnight-ink">{word}</span>
          <span className="text-14 text-slate-gray font-mono">{transcription}</span>
          <button className="w-32 h-32 flex items-center justify-center text-slate-gray hover:text-midnight-ink transition-colors">
            <Volume2 size={20} />
          </button>
        </div>
        
        {isExpanded && context && (
          <p className="text-14 text-slate-gray leading-1.43 italic">
            "{context}"
          </p>
        )}
      </div>

      <div className="ml-16">
        <button 
          className={`px-16 py-8 rounded-full text-14 font-semibold transition-colors ${
            status === 'speak' 
              ? 'bg-frost text-midnight-ink' 
              : 'text-hydro-blue'
          }`}
        >
          {status === 'speak' ? 'Speak' : 'Review'}
        </button>
      </div>
    </div>
  );
};

export default WordCard;
