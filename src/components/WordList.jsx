import React from 'react';
import WordCard from './WordCard';

const mockWords = [
  { id: 1, word: "Subtle", transcription: "[/ˈsʌt.əl/]", context: "The design has a subtle blue tint.", status: "speak", group: "Сьогодні" },
  { id: 2, word: "Ambiguous", transcription: "[/æmˈbɪɡ.ju.əs/]", context: "His reply to my question was somewhat ambiguous.", status: "review", group: "Сьогодні" },
  { id: 3, word: "Eloquent", transcription: "[/ˈel.ə.kwənt/]", context: "She made an eloquent appeal for action.", status: "speak", group: "Сьогодні" },
  { id: 4, word: "Resilient", transcription: "[/rɪˈzɪl.i.ənt/]", context: "The community was highly resilient in the face of disaster.", status: "review", group: "Вчора" },
  { id: 5, word: "Tenacious", transcription: "[/təˈneɪ.ʃəs/]", context: "The company has a tenacious hold on the market.", status: "speak", group: "Вчора" },
  { id: 6, word: "Obscure", transcription: "[/əbˈskjʊər/]", context: "The origins of the custom are obscure.", status: "review", group: "Тиждень тому" },
  { id: 7, word: "Plausible", transcription: "[/ˈplɔː.zə.bəl/]", context: "A plausible explanation.", status: "speak", group: "Раніше" },
];

const WordList = () => {
  const groups = ["Сьогодні", "Вчора", "Тиждень тому", "Раніше"];

  return (
    <div className="px-5 pb-120 pt-[120px]"> {/* Extra padding top for Header and bottom for Tabbar */}
      {groups.map((groupName) => {
        const wordsInGroup = mockWords.filter(w => w.group === groupName);
        if (wordsInGroup.length === 0) return null;

        return (
          <div key={groupName} className="mb-32">
            <h2 className="text-14 font-semibold text-slate-gray mb-16 uppercase tracking-wider px-2">{groupName}</h2>
            {wordsInGroup.map((word) => {
              // Find global index to determine if it's one of the first 4
              const globalIndex = mockWords.findIndex(w => w.id === word.id);
              return (
                <WordCard 
                  key={word.id}
                  word={word.word}
                  transcription={word.transcription}
                  context={word.context}
                  status={word.status}
                  isExpanded={globalIndex < 4}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WordList;
