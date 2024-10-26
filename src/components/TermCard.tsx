import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Briefcase, Lightbulb, Share2, Copy, Check } from 'lucide-react';
import type { Term } from '../data/vocabulary';

interface TermCardProps {
  term: Term;
}

export function TermCard({ term }: TermCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = `${term.word}\n\n${term.definition}${term.example ? `\n\nExample:\n${term.example}` : ''}`;

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: `DECA Term: ${term.word}`,
          text: shareText,
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      // If share fails, fallback to copy
      try {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (clipboardError) {
        console.error('Failed to copy text:', clipboardError);
      }
    }
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all ${
        isExpanded ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <div 
        className="p-5 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                {term.word}
                <span className="inline-block px-2.5 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                  {term.category}
                </span>
              </h3>
              <p className={`text-gray-600 ${!isExpanded && 'line-clamp-2'}`}>
                {term.definition}
              </p>
            </div>
            <button 
              className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {term.careerClusters.map((cluster) => (
              <span 
                key={cluster}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
              >
                <Briefcase className="h-3 w-3" />
                {cluster}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-5 pb-5 space-y-4 border-t border-gray-100">
          {term.example && (
            <div className="pt-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Example:</p>
                    <p className="text-sm text-gray-600">{term.example}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  {navigator.share ? (
                    <>
                      <Share2 className="h-4 w-4" />
                      Share
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}