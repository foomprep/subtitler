import axios from "axios";
import { useState } from "react";
import ReactPlayer from "react-player";
import Subtitles from './components/Subtitles'

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [videoURL, setVideoURL] = useState();
  const [subtitles, setSubtitles] = useState('');

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleUpload = async () => {
    setVideoURL(URL.createObjectURL(selectedFile));
    const formData = new FormData();
    formData.append('file', selectedFile);
    const response = await axios.post('http://localhost:5001/transcribe', formData)
    setSubtitles(response.data.text);
  }

  return (
    <div>
      <ReactPlayer url={videoURL} controls />
      <input 
        type="file" 
        name="media" 
        onChange={changeHandler} />
      <button onClick={handleUpload}>Generate Subtitles</button>
      <Subtitles subtitles={subtitles} />
    </div>
  )
}

export default App