import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;
console.log(apiKey);
const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      setPhotoData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("no data " + error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="nasa-photo">
        
        {photoData.media_type === "image" ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe
            title={photoData.title}
            src={photoData.url}
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        
        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>
          <a className='link' href={photoData.hdurl} target="new">HD version</a>
        </div>
      </div>

    </>
  );
};

export default NasaPhoto;
