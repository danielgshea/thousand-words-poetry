import React, { useEffect } from "react";
import axios from "axios";

interface PoemImagesProps {
  keywords: string[];
}

const PoemImages: React.FC<PoemImagesProps> = ({ keywords }) => {
  const [images, setImages] = React.useState<string[]>([]);

  useEffect(() => {
    setImages([]);
    const fetchImages = async (keyword: string) => {
      try {
        const response = await axios.get("http://localhost:5500/api/images", {
          params: {
            query: keyword, // Replace with your search query
          },
        });
        const newImages = (response.data.images_results.map((image: { original: string; }) => image.original)).splice(0, 3);
        setImages((prevImages) => [...prevImages, ...newImages]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    for (let i = 0; i < keywords.length; i++) {
        fetchImages(keywords[i]);
    }
  }, [keywords]);

  return (
    <div className="image-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px" }}>
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`${index}`} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
      ))}
    </div>
  );
};

export default PoemImages;
