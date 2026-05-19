import React from 'react';
import { Volume2 } from 'lucide-react';

const WordCard = ({ word, transcription, context, isExpanded, status }) => {
  return (
    <div className="card-default mb-16 flex items-center justify-between gap-16">
      <div className="flex flex-col gap-4 flex-1 min-w-0">
        <div className="flex items-center">
          <span className="text-[19px] font-bold text-midnight-ink tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
            {word}
          </span>
          <span className="ml-4 text-14 text-midnight-ink/60 whitespace-nowrap font-sans">
            {transcription}
          </span>
          <button className="ml-0.5 w-32 h-32 flex-shrink-0 flex items-center justify-center text-slate-gray hover:text-midnight-ink transition-colors">
            <Volume2 size={20} />
          </button>
        </div>
        
        {isExpanded && context && (
          <p className="text-[16px] text-midnight-ink leading-relaxed font-sans">
            {context}
          </p>
        )}
      </div>

      <div className="flex-shrink-0">
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
