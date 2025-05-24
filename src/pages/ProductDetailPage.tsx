import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Truck,
  ShieldCheck,
  RefreshCw,
  Star
} from 'lucide-react';
import { products } from '../data/products';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import ProductCard from '../components/shared/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(products[0]); // Default to first product to avoid null
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<typeof products>([]);
  const { addToCart } = useShoppingCart();
  
  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products (same category, excluding current product)
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  // Calculate discounted price if applicable
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div className="pt-16 pb-12">
      <div className="container-custom py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex text-sm">
            <li className="mr-1">
              <Link to="/" className="text-gray-500 hover:text-indigo-600">Inicio</Link>
              <span className="mx-1 text-gray-400">/</span>
            </li>
            <li className="mr-1">
              <Link to="/catalog" className="text-gray-500 hover:text-indigo-600">Tienda</Link>
              <span className="mx-1 text-gray-400">/</span>
            </li>
            <li className="mr-1">
              <Link to={`/catalog?category=${product.category}`} className="text-gray-500 hover:text-indigo-600">
                {product.category}
              </Link>
              <span className="mx-1 text-gray-400">/</span>
            </li>
            <li className="text-indigo-600 font-medium">{product.name}</li>
          </ol>
        </nav>
        
        {/* Product Detail Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-2">
              <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            {/* Rating placeholder - in a real app, this would be dynamic */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${i < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(24 reseñas)</span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.discount ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-indigo-600 mr-3">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="ml-3 bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                    -{product.discount}%
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-indigo-600">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            {/* Add to Cart */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex border border-gray-300 rounded-md">
                <button 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 border-r border-gray-300"
                >
                  <ChevronLeft size={20} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-16 text-center"
                  min="1"
                />
                <button 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 border-l border-gray-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-grow btn btn-primary flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Añadir al carrito
              </button>
              
              <button 
                className="p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Añadir a favoritos"
              >
                <Heart size={20} />
              </button>
              
              <button 
                className="p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Compartir"
              >
                <Share2 size={20} />
              </button>
            </div>
            
            {/* Product Metadata */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={16} className="text-green-600" />
                </div>
                <span className="text-sm text-gray-700">
                  <span className="font-medium">Disponibilidad:</span>{' '}
                  {product.inStock ? 'En stock' : 'Agotado'}
                </span>
              </div>
              
              <div className="flex gap-2">
                <div className="bg-indigo-100 p-1 rounded-full">
                  <Truck size={16} className="text-indigo-600" />
                </div>
                <span className="text-sm text-gray-700">
                  <span className="font-medium">Envío:</span> Gratis en compras mayores a $100
                </span>
              </div>
              
              <div className="flex gap-2">
                <div className="bg-indigo-100 p-1 rounded-full">
                  <ShieldCheck size={16} className="text-indigo-600" />
                </div>
                <span className="text-sm text-gray-700">
                  <span className="font-medium">Garantía:</span> 1 año de garantía del fabricante
                </span>
              </div>
              
              <div className="flex gap-2">
                <div className="bg-indigo-100 p-1 rounded-full">
                  <RefreshCw size={16} className="text-indigo-600" />
                </div>
                <span className="text-sm text-gray-700">
                  <span className="font-medium">Devoluciones:</span> 30 días para cambios o devoluciones
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Specifications */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Especificaciones</h2>
          
          {product.specifications && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="hover:bg-gray-50">
                      <td className="px-6 py-4 w-1/3 text-sm font-medium text-gray-900 bg-gray-50">
                        {key}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;