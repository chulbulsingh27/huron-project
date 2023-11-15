import React, { useEffect, useState } from 'react';
import { FcPrevious,FcNext } from 'react-icons/fc';

const images = [
  'https://img.freepik.com/premium-psd/phone-13-shopping_187299-5947.jpg?size=626&ext=jpg&ga=GA1.1.1887446820.1699085690&semt=ais',
  'https://img.freepik.com/free-vector/sale-smartphone-cart_603843-1573.jpg?size=626&ext=jpg&ga=GA1.1.1887446820.1699085690&semt=ais',
  'https://img.freepik.com/free-vector/women-men-shopping-online-with-smartphone-technology_24877-56067.jpg?size=626&ext=jpg&ga=GA1.1.1887446820.1699085690&semt=ais',
  'https://img.freepik.com/free-vector/isometric-smartphone-with-notification-screen_1262-16550.jpg?size=626&ext=jpg&ga=GA1.1.1887446820.1699085690&semt=ais',
  'https://img.freepik.com/free-vector/application-smartphone-mobile-computer-payments-online-transaction-shopping-online-process-smartphone-vecter-cartoon-illustration-isometric-design_1150-59299.jpg?size=626&ext=jpg&ga=GA1.1.1887446820.1699085690&semt=ais',
  'https://img.freepik.com/free-vector/phone-finger-shopping-icons-with-flat-design_23-2147660280.jpg?size=626&ext=jpg&ga=GA1.1.1887446820.1699085690&semt=ais'
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current => current === images.length - 1 ? 0 : current + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-screen bg-gray-300">
      <button className="p-4 text-white m-2 sm:m-0 bg-blue-500 hover:bg-blue-700 rounded" onClick={prevSlide}>
        <FcPrevious size={30} className='m-2 p-2 bg-gray-300 rounded-full'/>
      </button>
      <img className="h-full w-full sm:w-1/2 rounded-lg shadow-lg" src={images[current]} alt="slider" />
      <button className="p-4 text-white m-2 sm:m-0 bg-blue-500 hover:bg-blue-700 rounded" onClick={nextSlide}>
        <FcNext size={30} className='m-2 p-2 bg-gray-300 rounded-full '/>
      </button>
    </div>
  );
}

export default ImageSlider;
