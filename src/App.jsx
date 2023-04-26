import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleUpload = () => {
    console.log(selectedFile);
  }

  return (
    <div>
      <input 
        type="file" 
        name="media" 
        onChange={changeHandler} />
      <button onClick={handleUpload}>Generate Subtitles</button>
    </div>
  )
}

export default App