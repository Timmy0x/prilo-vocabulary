import React from 'react';
import { careerClusters } from '../data/vocabulary';

interface CareerClusterFilterProps {
  selectedCluster: string;
  onChange: (cluster: string) => void;
}

export function CareerClusterFilter({ selectedCluster, onChange }: CareerClusterFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => onChange('')}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
          selectedCluster === '' 
            ? 'bg-indigo-500 text-white shadow-md shadow-indigo-200' 
            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
        }`}
      >
        All Clusters
      </button>
      {careerClusters.map((cluster) => (
        <button
          key={cluster}
          onClick={() => onChange(cluster)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            selectedCluster === cluster 
              ? 'bg-indigo-500 text-white shadow-md shadow-indigo-200' 
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          }`}
        >
          {cluster}
        </button>
      ))}
    </div>
  );
}