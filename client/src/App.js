import {useRef , useState ,useEffect } from 'react';
import './App.css';
import {uploadFile} from './services/api';
// import fileCabinetImage from '../public/file-cabinet.png';
function App() {
  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  
  const fileInputRef = useRef();
  const [file,setFile] = useState('');
  const [res , setResult] = useState('');

  const onClickUpload = ()=>{
    fileInputRef.current.click();
  }

  useEffect(()=>{
    const onFileUpload = async ()=>{
      if(file){
        console.log(file);
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(data);
        console.log(response.path);
        setResult(response.path);
      }
    }
    onFileUpload();
  },[file]);

return (
  <div className='container'>
    <img src="/file.png" alt="banner" />
    <div className='wrapper'>
      <h1>File Upload</h1>
      <p>Upload and Share</p>
      <button className="button" onClick={onClickUpload}>Upload</button>
      <input type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      
      {/* Render the anchor tag conditionally */}
      {res && <a href={res} className="finalUrl" target="_blank" rel="noopener noreferrer">{res}</a>}
    </div>
  </div>
);
}

export default App;
