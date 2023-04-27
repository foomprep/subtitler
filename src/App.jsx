import axios from "axios";
import { useEffect, useState } from "react";
import Subtitles from './components/Subtitles'

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [videoURL, setVideoURL] = useState();
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [subtitles, setSubtitles] = useState({});

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleUpload = async () => {
    setDisplayedSubtitle('');
    setVideoURL(URL.createObjectURL(selectedFile));
    const formData = new FormData();
    formData.append('file', selectedFile);
    const response = await axios.post('http://localhost:5001/transcribe', formData)
    setSubtitles(response.data);
  }

  useEffect(() => {
    if (subtitles.start) {
      const interval = setInterval(() => {
        const currentTime = document.getElementById('video').currentTime;
        for (let i=0; i<subtitles.start.length; i++) {
          if (currentTime > subtitles.start[i] && currentTime < subtitles.end[i]) {
            setDisplayedSubtitle(subtitles.text[i]);
            break;
          }
        }
      }, 100)

      return () => clearInterval(interval);
    }
  }, [subtitles])

  return (
    <div>
      <video id='video' height="400" src={videoURL} controls />
      <input 
        type="file" 
        name="media" 
        onChange={changeHandler} />
      <button onClick={handleUpload}>Generate Subtitles</button>
      <Subtitles subtitles={displayedSubtitle} />
    </div>
  )
}

export default App