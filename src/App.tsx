import { useEffect, useState } from "react";
import { loadImages } from "./utils";
import "./App.css";

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (image) {
      const sources = {
        item: image,
      };
      
      loadImages(sources);
    }
  }, [image])

  // Creating a browser url after uploading from file input
  const setImageURL = (event: any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="main">
      <div className="upload-btn-wrapper">
        <button className="btn">Upload an image</button>
        <input type="file" name="img-uploader" onChange={setImageURL} />
      </div>

      {/* Show the effect if image is there. */}
      {image && (
        <div id="kaleidoscope-root"></div>
      )}
    </div>
  );
}

export default App;
