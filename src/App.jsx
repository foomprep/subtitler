import axios from "axios";
import { useEffect, useState } from "react";
import Subtitles from './components/Subtitles'
import './App.css';
import { Box, Button, CircularProgress } from "@mui/material";

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [videoURL, setVideoURL] = useState();
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [subtitles, setSubtitles] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const getSubtitleText = (subtitleData) => {
    const textArray = subtitleData['text'];
    let text = "";
    textArray.forEach(segment => text += segment);
    return text;
  }

  const handleUpload = async () => {
    setDisplayedSubtitle('');
    setVideoURL(URL.createObjectURL(selectedFile));
    const formData = new FormData();
    formData.append('file', selectedFile);
    setLoading(true);
    const response = await axios.post('http://localhost:5001/transcribe', formData)
    const fullText = getSubtitleText(response.data);
    setSubtitles(fullText);
    setLoading(false);
  }

  // useEffect(() => {
  //   if (subtitles && !isLoading) {
  //     const interval = setInterval(() => {
  //       const currentTime = document.getElementById('video').currentTime;
  //       for (let i=0; i<subtitles.start.length; i++) {
  //         if (currentTime > subtitles.start[i] && currentTime < subtitles.end[i]) {
  //           updateSubtitle(subtitles.text[i]);
  //           // setDisplayedSubtitle(displayedSubtitle + subtitles.text[i]);
  //           break;
  //         }
  //       }
  //     }, 100)

  //     return () => clearInterval(interval);
  //   }
  // }, [subtitles, isLoading])

  return (
    <Box 
      display='flex'
      height='100vh'
      width='100vw'
    >
      <Box 
        display='flex'
        flexDirection='column'
        flex={2}
        alignItems='center'
        justifyContent='center'
        gap={2}
      >
        {isLoading ? <CircularProgress size={40} /> : <video id='video' height="400" src={videoURL} controls />}
        <input 
          type="file" 
          name="media" 
          onChange={changeHandler} />
        <Button variant="contained" onClick={handleUpload}>Generate Subtitles</Button>
      </Box>
      <Box 
        flex={1} 
        borderLeft='2px solid black'
      >
        { subtitles && <Subtitles subtitles={subtitles} />}
      </Box>
    </Box>
  )
}

export default App
