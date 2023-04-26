import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div>
      <input 
        type="file" 
        name="media" 
        onChange={changeHandler} />
      <button>Generate Subtitles</button>
    </div>
  )
}

export default App