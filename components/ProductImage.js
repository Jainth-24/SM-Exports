import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Icon } from "@iconify/react";

function ProductImage({ images }) {
  const [mainImg, setMainImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef();

  useEffect(() => {
    if (images && images.length > 0) {
      setMainImg(images[0]);
    }
  }, [images]);

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }

  return (
      <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded-lg shadow-lg">
          <div className="relative h-96">
              {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                      <Icon icon="eos-icons:loading" className='h-24 w-28' />
                  </div>
              )}
              <Image
                  src={mainImg?.filename}
                  alt={mainImg?.altText}
                  layout="fill"
                  className={`transform duration-500 ease-in-out hover:scale-105 ${
                      isLoading ? "hidden" : ""
                  }`}
                  onLoad={() => setIsLoading(false)}
                  onError={() => setIsLoading(false)}
              />
          </div>
          <div className="relative flex border-t border-palette-lighter">
              <button
                  aria-label="left-scroll"
                  className="h-32 bg-palette-lighter hover:bg-palette-light  absolute left-0 z-10 opacity-75"
                  onClick={() => scroll(-300)}
              >
                  <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="w-3 mx-1 text-palette-primary"
                  />
              </button>
              <div
                  ref={ref}
                  style={{ scrollBehavior: "smooth" }}
                  className="flex space-x-1 w-full overflow-auto border-t border-palette-lighter"
              >
                  {images?.map((imgItem, index) => (
                      <button
                          key={index}
                          className="relative w-40 h-32 flex-shrink-0 rounded-sm "
                          onClick={() => setMainImg(imgItem)}
                      >
                          <Image
                              src={imgItem.filename}
                              alt={imgItem.alt}
                              layout="fill"
                              className=""
                          />
                      </button>
                  ))}
              </div>
              <button
                  aria-label="right-scroll"
                  className="h-32 bg-palette-lighter hover:bg-palette-light  absolute right-0 z-10 opacity-75"
                  onClick={() => scroll(300)}
              >
                  <FontAwesomeIcon
                      icon={faArrowRight}
                      className="w-3 mx-1 text-palette-primary"
                  />
              </button>
          </div>
      </div>
  );
}

export default ProductImage;
