import React from 'react';
import { categories } from '../data/vocabulary';

interface CategoryFilterProps {
  selectedCategory: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => onChange('')}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
          selectedCategory === '' 
            ? 'bg-blue-500 text-white shadow-md shadow-blue-200' 
            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
        }`}
      >
        All Terms
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            selectedCategory === category 
              ? 'bg-blue-500 text-white shadow-md shadow-blue-200' 
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}