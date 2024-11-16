import {useRef} from 'react';
import './App.css';

function App() {
  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  const fileInputRef = useRef();

  const onClickUpload = ()=>{
    fileInputRef.current.click();
  }

  return (
  <div className='container'>
    <img src={logo} alt="banner" />
    <div className='wrapper'>
      <h1>File Upload</h1>
      <p>Upload and Share</p>
      <button onClick={()=>onClickUpload()}>Upload</button>
      <input type="file"
        ref={fileInputRef}
      />
    </div>
  </div>
  );
}

export default App;
