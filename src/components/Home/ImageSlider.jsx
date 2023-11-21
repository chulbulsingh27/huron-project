import React, { useEffect, useState } from 'react';
import { FcPrevious,FcNext } from 'react-icons/fc';

const images = [
  'https://www.reliancedigital.in/medias/Tecno-Pop-D-2-.jpg?context=bWFzdGVyfGltYWdlc3wxMTE4MTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDMwL2hiOS8xMDA3NjQyMDczNTAwNi5qcGd8NWViZmEyOTVjMmJmYzYzN2E4MThkZjQ1ZjdiOTE5MDM5ZjEzYzAyZTIyNWJmM2FmMzllM2JkNmI0NmY3OWU1Yg',
  'https://www.reliancedigital.in/medias/RealMe-C55-1-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMTMwMTV8aW1hZ2UvanBlZ3xpbWFnZXMvaGUzL2gyNC8xMDA3NjQyMDk5NzE1MC5qcGd8ODExZjk0NTg1ZDhhZWJmZjVhNTBjZjE2YzI5YWU1MTUxYWQ1ZWE4NGRmYzhkZGQ2NzdmMjlmZTU5ODdlMmMxYw',
  'https://www.reliancedigital.in/medias/Redmi-A2-2-2-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMTc2NTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2hkZC8xMDA3ODE4MDY3MTUxOC5qcGd8ZjI0NzY4ZDkxYzJmOWIwY2MwZTYyYjhhYmI0NDNjMjY0OWUzMWIzMGUzNmYxZjBmOWFmZmU2YmUwNmJiOGU3Mw',
  'https://www.reliancedigital.in/medias/JioPhone-Prima-1365x260px.jpg?context=bWFzdGVyfGltYWdlc3w5ODk4MXxpbWFnZS9qcGVnfGltYWdlcy9oZDMvaGQxLzEwMDc2NDIxODQ5MTE4LmpwZ3w3MWE4ZmUzYTNkOGZhYjMxOGYzNTUzM2MwNWY5MDczY2E3YTJhNjI4NGQzZjBjMTFiMzRlMGRjODNjMzQzNjEx',
  
];
function ImageSlider() {
  const [current, setCurrent] = useState(0);
  //const [event,setEvent] = useState("")
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current => current === images.length - 1 ? 0 : current + 1);
    }, 3000); 

    return () => clearInterval(timer); 
  }, []); 

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-80 bg-gray-300">
      <button className="p-4 text-white m-2 sm:m-0" onClick={prevSlide}>
        <FcPrevious size={30} className='m-2 p-2 bg-gray-300'/>
      </button>
      <img className="h-full w-full" src={images[current]} alt="slider" />
      <button className="p-4 text-white m-2 sm:m-0" onClick={nextSlide}>
        <FcNext size={30} className='m-2 p-2 bg-gray-300'/>
      </button>
    </div>
  );
  
  
}
export default ImageSlider;