import React, { useState, useEffect, setState, createRef } from 'react';
import Upload from './components/home/uploader'
import FileNameList from './components/home/fileNames'
import pdfImage from './images/pdf.svg'



function App() {

  const [fileName, setFileName] = useState([]);
  const [uploading, setuploading] = useState(false);


  // useEffect(() => {

  //   const line =fileName.filter((file) => {
  //     return (!file.name.endsWith('.pdf'))  
  //   })

  //   console.log(line)

    
    
    
  // })

const inputRef = createRef();

const onButtonClick = () => {

  inputRef.current.click()
  // console.log(inputRef.current.files)
}


const onChangeFiles = (e) => {
   
  e.stopPropagation();
  e.preventDefault();

  setFileName(Array.from(e.target.files))
  console.log(e.target.files)

  
}

const warningRef = fileName.map(() => createRef());

  return (
    <div>
      
      <Upload
      ref={inputRef}
      img={ pdfImage } 
      onClick={ onButtonClick }
      onChange={ onChangeFiles }
      />

      {
        fileName.map((file) => {

        
          return <FileNameList
          key={ file.lastModified }
          ref={ warningRef }
          name={ file.name}
           />
        })
      }

      {}
      
    </div>
  );
}

export default App;
