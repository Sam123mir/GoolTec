import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types/Product';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useShoppingCart();
  
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div className="card group">
      {/* Badge for featured or discount */}
      {(product.featured || product.discount) && (
        <div className="absolute top-3 right-3 z-10">
          {product.discount ? (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              -{product.discount}%
            </span>
          ) : product.featured ? (
            <span className="bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              Destacado
            </span>
          ) : null}
        </div>
      )}
      
      {/* Product Image with overlay */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </Link>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm text-indigo-600 font-medium">{product.category}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold mb-1 hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            {product.discount ? (
              <>
                <span className="text-gray-500 line-through text-sm">${product.price.toFixed(2)}</span>
                <span className="text-lg font-bold text-indigo-600">${discountedPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
            )}
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
            aria-label={`Añadir ${product.name} al carrito`}
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;