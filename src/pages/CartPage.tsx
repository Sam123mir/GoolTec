import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ChevronRight, CreditCard, ArrowLeft } from 'lucide-react';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useShoppingCart();
  const [checkoutStep, setCheckoutStep] = useState(1);
  
  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => {
      const itemPrice = item.product.discount
        ? item.product.price * (1 - item.product.discount / 100)
        : item.product.price;
      return total + itemPrice * item.quantity;
    },
    0
  );
  
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.18; // 18% tax
  const total = subtotal + shipping + tax;
  
  // Mock checkout function
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkoutStep < 3) {
      setCheckoutStep(prev => prev + 1);
    } else {
      // Here you would typically process the payment and redirect
      alert('¡Gracias por tu compra! Tu pedido ha sido procesado correctamente.');
      clearCart();
      // Redirect to homepage or order confirmation
      window.location.href = '/';
    }
  };

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-indigo-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
              <ShoppingBag className="text-indigo-600" size={32} />
            </div>
            <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
            <p className="text-gray-600 mb-8">
              Parece que aún no has añadido productos a tu carrito. Explora nuestro catálogo para encontrar lo que estás buscando.
            </p>
            <Link to="/catalog" className="btn btn-primary px-8 py-3">
              Explorar Productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2">Tu Carrito</h1>
        
        {/* Checkout Steps */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${checkoutStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <div className={`flex-grow h-1 mx-2 ${checkoutStep >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${checkoutStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
            <div className={`flex-grow h-1 mx-2 ${checkoutStep >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${checkoutStep >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              3
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className={checkoutStep >= 1 ? 'text-indigo-600 font-medium' : 'text-gray-600'}>Carrito</span>
            <span className={checkoutStep >= 2 ? 'text-indigo-600 font-medium' : 'text-gray-600'}>Datos de envío</span>
            <span className={checkoutStep >= 3 ? 'text-indigo-600 font-medium' : 'text-gray-600'}>Pago</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items and Forms */}
          <div className="md:col-span-2">
            {checkoutStep === 1 && (
              <>
                {/* Cart Items */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="p-4 bg-gray-50 border-b">
                    <h2 className="text-lg font-semibold">Productos en tu carrito</h2>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => {
                      const discountedPrice = item.product.discount
                        ? item.product.price * (1 - item.product.discount / 100)
                        : item.product.price;
                        
                      return (
                        <div key={item.product.id} className="p-4 flex flex-col sm:flex-row sm:items-center">
                          {/* Product Image */}
                          <div className="w-20 h-20 flex-shrink-0 mb-4 sm:mb-0">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          
                          {/* Product Info */}
                          <div className="flex-grow sm:ml-4">
                            <h3 className="text-base font-medium">
                              <Link to={`/product/${item.product.id}`} className="hover:text-indigo-600 transition-colors">
                                {item.product.name}
                              </Link>
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">{item.product.category}</p>
                            
                            <div className="flex flex-wrap justify-between items-center">
                              <div className="flex items-center mb-2 sm:mb-0">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
                                >
                                  -
                                </button>
                                <span className="px-3 py-1 border-y border-gray-300 bg-white">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                                >
                                  +
                                </button>
                              </div>
                              
                              <div className="flex items-center">
                                <div className="mr-4">
                                  {item.product.discount ? (
                                    <div>
                                      <span className="line-through text-gray-500 text-sm mr-2">
                                        ${item.product.price.toFixed(2)}
                                      </span>
                                      <span className="font-semibold">
                                        ${discountedPrice.toFixed(2)}
                                      </span>
                                    </div>
                                  ) : (
                                    <span className="font-semibold">
                                      ${item.product.price.toFixed(2)}
                                    </span>
                                  )}
                                </div>
                                
                                <button
                                  onClick={() => removeFromCart(item.product.id)}
                                  className="text-gray-500 hover:text-red-600 transition-colors"
                                  aria-label="Eliminar item"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="p-4 bg-gray-50 border-t flex justify-between items-center">
                    <button
                      onClick={() => clearCart()}
                      className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      Vaciar carrito
                    </button>
                    <Link to="/catalog" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors flex items-center">
                      Seguir comprando
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                <button
                  onClick={() => setCheckoutStep(2)}
                  className="btn btn-primary w-full py-3 flex items-center justify-center"
                >
                  Continuar
                  <ChevronRight size={18} className="ml-1" />
                </button>
              </>
            )}
            
            {checkoutStep === 2 && (
              <>
                {/* Shipping Information Form */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="p-4 bg-gray-50 border-b">
                    <h2 className="text-lg font-semibold">Información de envío</h2>
                  </div>
                  
                  <form className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Apellido *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="input"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Dirección *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        className="input"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          Ciudad *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          Estado/Provincia *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          required
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          Código postal *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          required
                          className="input"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="input"
                      />
                    </div>
                  </form>
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={() => setCheckoutStep(1)}
                    className="btn btn-secondary py-3 flex items-center justify-center"
                  >
                    <ArrowLeft size={18} className="mr-1" />
                    Volver
                  </button>
                  
                  <button
                    onClick={() => setCheckoutStep(3)}
                    className="btn btn-primary py-3 flex items-center justify-center"
                  >
                    Continuar
                    <ChevronRight size={18} className="ml-1" />
                  </button>
                </div>
              </>
            )}
            
            {checkoutStep === 3 && (
              <>
                {/* Payment Information Form */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="p-4 bg-gray-50 border-b">
                    <h2 className="text-lg font-semibold">Información de pago</h2>
                  </div>
                  
                  <form onSubmit={handleCheckout} className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Método de pago
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-gray-300 rounded-md p-4 flex items-center cursor-pointer bg-indigo-50 border-indigo-500">
                          <input
                            type="radio"
                            id="creditCard"
                            name="paymentMethod"
                            checked
                            readOnly
                            className="h-4 w-4 text-indigo-600"
                          />
                          <label htmlFor="creditCard" className="ml-3 flex items-center cursor-pointer">
                            <CreditCard size={20} className="mr-2 text-indigo-600" />
                            <span>Tarjeta de crédito/débito</span>
                          </label>
                        </div>
                        
                        <div className="border border-gray-300 rounded-md p-4 flex items-center cursor-pointer">
                          <input
                            type="radio"
                            id="paypal"
                            name="paymentMethod"
                            className="h-4 w-4 text-indigo-600"
                            disabled
                          />
                          <label htmlFor="paypal" className="ml-3 cursor-pointer opacity-50">
                            Otras opciones de pago
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre en la tarjeta *
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        required
                        className="input"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Número de tarjeta *
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="XXXX XXXX XXXX XXXX"
                        required
                        className="input"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Fecha de expiración *
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          required
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV *
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          required
                          className="input"
                        />
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="saveCard"
                          name="saveCard"
                          className="h-4 w-4 text-indigo-600"
                        />
                        <label htmlFor="saveCard" className="ml-2 text-sm text-gray-700">
                          Guardar esta tarjeta para futuras compras
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={() => setCheckoutStep(2)}
                    className="btn btn-secondary py-3 flex items-center justify-center"
                  >
                    <ArrowLeft size={18} className="mr-1" />
                    Volver
                  </button>
                  
                  <button
                    onClick={handleCheckout}
                    className="btn btn-primary py-3 flex items-center justify-center"
                  >
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
          </div>
          
          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-4 bg-gray-50 border-b">
                <h2 className="text-lg font-semibold">Resumen del pedido</h2>
              </div>
              
              <div className="p-4">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">Gratis</span>
                    ) : (
                      <span className="font-medium">${shipping.toFixed(2)}</span>
                    )}
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Impuestos (18%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t pt-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold text-indigo-600">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Promotional Code */}
                {checkoutStep === 1 && (
                  <div className="border-t pt-4">
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Código promocional"
                        className="input rounded-r-none flex-grow"
                      />
                      <button className="btn btn-primary rounded-l-none">
                        Aplicar
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Order Items Summary */}
                <div className="border-t mt-4 pt-4">
                  <h3 className="font-medium mb-2">Productos ({cartItems.length})</h3>
                  <div className="space-y-3 max-h-48 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="flex items-center text-sm">
                        <span className="bg-gray-200 text-gray-800 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                          {item.quantity}
                        </span>
                        <span className="flex-grow truncate">{item.product.name}</span>
                        <span className="font-medium ml-2">
                          ${((item.product.discount ? item.product.price * (1 - item.product.discount / 100) : item.product.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;