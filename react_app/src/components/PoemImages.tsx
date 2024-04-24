import React, { useEffect } from "react";
import axios from "axios";

interface PoemImagesProps {
  keywords: string[];
}

interface Image {
  id: string,
  src: string,
  class: string[],
  height: number,
  width: number,
  alt: string,
}

const PoemImages: React.FC<PoemImagesProps> = ({ keywords }) => {
  const [images, setImages] = React.useState<Image[]>([]);

  useEffect(() => {
    const getImages = async (searchString: string) => {
      try {
        const input = {
          query: searchString,
        };
        const response = await axios.post(
          "http://localhost:5000/img_urls",
          input
        );
        const initialImages: Image[] = response.data.img_urls;
        const filteredImages = initialImages.filter(image => image.height >= 100 && image.width >= 100);
        setImages(prevImages => [...prevImages, ...filteredImages]);
      } catch (error) {
        console.error("Error getting images from image_scraper", error);
      }
    };
    keywords.forEach(keyword => {
      getImages(keyword);
    });
  }, []);


  

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "10px",
      }}
    >
      {images != null
        ? images.splice(0, 20).map((image, index) => (
            <div
              key={index}
              style={{
                border: "7px solid white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                key={index}
                src={image.src}
                alt={`${index}`}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default PoemImages;
