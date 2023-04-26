import axios from "axios";
import { useState } from "react";
import ReactPlayer from "react-player";

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [videoURL, setVideoURL] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleUpload = async () => {
    setVideoURL(URL.createObjectURL(selectedFile));
    const formData = new FormData();
    formData.append('file', selectedFile);
    const response = await axios.post('http://localhost:5001/transcribe', formData)
    console.log(response.data);
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