import React, { useState, useMemo } from 'react';
import { BookOpen } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { CareerClusterFilter } from './components/CareerClusterFilter';
import { TermCard } from './components/TermCard';
import { vocabulary } from './data/vocabulary';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCluster, setSelectedCluster] = useState('');

  const filteredTerms = useMemo(() => {
    return vocabulary.filter((term) => {
      const matchesSearch = term.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          term.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || term.category === selectedCategory;
      const matchesCluster = !selectedCluster || term.careerClusters.includes(selectedCluster);
      return matchesSearch && matchesCategory && matchesCluster;
    });
  }, [searchQuery, selectedCategory, selectedCluster]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Filters Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-gray-700">Filter by Category</h2>
                <div className="h-px flex-1 bg-gray-100"></div>
              </div>
              <CategoryFilter 
                selectedCategory={selectedCategory} 
                onChange={setSelectedCategory} 
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-gray-700">Filter by Career Cluster</h2>
                <div className="h-px flex-1 bg-gray-100"></div>
              </div>
              <CareerClusterFilter
                selectedCluster={selectedCluster}
                onChange={setSelectedCluster}
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            {filteredTerms.length > 0 ? (
              <>
                <div className="flex items-center justify-between text-sm text-gray-500 px-2">
                  <span>{filteredTerms.length} terms found</span>
                  <div className="flex gap-2">
                    {selectedCategory && (
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs">
                        Category: {selectedCategory}
                      </span>
                    )}
                    {selectedCluster && (
                      <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs">
                        Cluster: {selectedCluster}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid gap-4">
                  {filteredTerms.map((term) => (
                    <TermCard key={term.id} term={term} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No terms found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('');
                    setSelectedCluster('');
                  }}
                  className="mt-4 text-blue-500 hover:text-blue-600 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;