import { useState } from "react";
import ReactPlayer from "react-player";

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [videoURL, setVideoURL] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleUpload = () => {
    console.log(selectedFile);
    setVideoURL(URL.createObjectURL(selectedFile));
  }

  return (
    <div>
      <ReactPlayer url={videoURL} controls />
      <input 
        type="file" 
        name="media" 
        onChange={changeHandler} />
      <button onClick={handleUpload}>Generate Subtitles</button>
    </div>
  )
}

export default App