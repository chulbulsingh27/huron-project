import React from "react";

const NotFound = () => {
  return (
    <div class="flex items-center justify-center w-[800px] h-[800px] ml-[18%]">
      <div class="bg-white p-8 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <p class="text-center  font-bold text-xl text-orange-700">
          Oops! It seems like we couldn’t find any matches for your search. We
          understand how important it is for you to find what you’re looking
          for. Don’t worry, our galaxy of products is vast and diverse. Try
          using different keywords or check the spelling of your search term.
          You can also browse through our various categories to discover more.
          We’re here to help you find exactly what you need. Thank you for
          shopping with us!
        </p>
      </div>
    </div>
  );
};

export default NotFound;
