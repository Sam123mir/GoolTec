import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/shared/ProductCard';

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let result = products;
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(lowercasedSearch) || 
        product.description.toLowerCase().includes(lowercasedSearch) ||
        product.category.toLowerCase().includes(lowercasedSearch)
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // In a real app, you would sort by date here
        result = [...result].sort((a, b) => b.id - a.id);
        break;
      case 'featured':
      default:
        result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm, sortBy]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
    
    // Close mobile filters if open
    setShowFilters(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchTerm('');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="pt-16 pb-12">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Catálogo de Productos</h1>
          <p className="text-lg opacity-90">
            Explora nuestra selección de tecnología de vanguardia
          </p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        {/* Search and Mobile Filter Toggle */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center md:hidden px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              <Filter size={18} className="mr-2" />
              Filtros
            </button>
            
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="featured">Destacados</option>
              <option value="price-low">Precio: menor a mayor</option>
              <option value="price-high">Precio: mayor a menor</option>
              <option value="newest">Más recientes</option>
            </select>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filtros</h2>
                {(selectedCategory || searchTerm) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Limpiar todo
                  </button>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Categorías</h3>
                <div className="space-y-2">
                  <div 
                    className={`cursor-pointer p-2 rounded-md ${selectedCategory === null ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'}`}
                    onClick={() => handleCategoryChange(null)}
                  >
                    Todas las categorías
                  </div>
                  {categories.map((category) => (
                    <div
                      key={category}
                      className={`cursor-pointer p-2 rounded-md ${selectedCategory === category ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center">
              <div className="bg-white rounded-lg w-11/12 max-w-md p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Filtros</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Categorías</h3>
                  <div className="space-y-2">
                    <div 
                      className={`cursor-pointer p-2 rounded-md ${selectedCategory === null ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'}`}
                      onClick={() => handleCategoryChange(null)}
                    >
                      Todas las categorías
                    </div>
                    {categories.map((category) => (
                      <div
                        key={category}
                        className={`cursor-pointer p-2 rounded-md ${selectedCategory === category ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'}`}
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Limpiar filtros
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Aplicar
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          <div className="flex-grow">
            {/* Filter summary */}
            {(selectedCategory || searchTerm) && (
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-gray-600">Filtros:</span>
                
                {selectedCategory && (
                  <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {selectedCategory}
                    <button 
                      onClick={() => handleCategoryChange(null)}
                      className="ml-1 text-indigo-600 hover:text-indigo-800"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {searchTerm && (
                  <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    Búsqueda: {searchTerm}
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="ml-1 text-indigo-600 hover:text-indigo-800"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                <button
                  onClick={clearFilters}
                  className="text-sm text-indigo-600 hover:text-indigo-800 ml-2"
                >
                  Limpiar todo
                </button>
              </div>
            )}
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 mb-4">No se encontraron productos que coincidan con tu búsqueda.</p>
                <button
                  onClick={clearFilters}
                  className="btn btn-primary px-6"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;