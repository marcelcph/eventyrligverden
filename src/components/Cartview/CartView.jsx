import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function CartView() {

  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

    const subtotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

    const handleQuantityChange = (item, newQuantity) => {
      if (newQuantity > 0) {
          updateQuantity(item.id, item.selectedSize, newQuantity);
      } else {
          removeItem(item.id, item.selectedSize);
      }
  };console.log(cartItems);
  return (
        <div className=" pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Indkøbskurv</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartItems.map((item, index) => (
                <div key={index} className="justify-between mb-6 rounded-lg  p-6 shadow-md sm:flex sm:justify-start">
                  {/* Produktbillede og detaljer */}
                  <img 
                    src={item.images[0].src} 
                    alt={item.name} 
                    className="w-full rounded-lg sm:w-40" 
                    />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold ">{item.name}</h2>
                      <p className="mt-1 text-xs ">{item.selectedSize}</p>
                    </div>
                    {/* Antal og pris */}
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      {/* Antal justering */}
                      <div className="flex items-center ">
                        <span 
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => handleQuantityChange(item, item.quantity - 1)}
                        > - </span>
                        <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                        />
                        <span 
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => handleQuantityChange(item, item.quantity + 1)}
                        > + </span>
                    </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{parseFloat(item.price).toFixed(2)} DKK</p>
                        {/* Slet knap */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

      {/*  Sub total  */}

      <div className="mt-6 h-full rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3">
       
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">{parseFloat(subtotal).toFixed(2)} DKK</p>
            <p className="text-sm ">Inklusiv moms</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md py-1.5 font-medium">Gå til betaling</button>
      </div>
    </div>
  </div>
  )
}

export default CartView