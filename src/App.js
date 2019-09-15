import React, { useState, useEffect, setState, createRef } from 'react';
import Upload from './components/home/uploader'
import FileNameList from './components/home/fileNames'
import UploadBtn from './components/home/upload'
import filenameCheck from './utils/filenameCheck'
import pdfImage from './images/pdf.svg'



function App() {

  const [fileName, setFileName] = useState([]);
  const [uploading, setuploading] = useState(false);




const inputRef = createRef();

const onButtonClick = () => {

  inputRef.current.click()

}


const onChangeFiles = (e) => {
   
  e.stopPropagation();
  e.preventDefault();

  setFileName(Array.from(e.target.files))  
}


const removeFile = (e) => {
  console.log(e.target.textContent)

  let str = e.target.textContent
  let amendedstr = str.replace('This is not a pdf File', '');

  let newFileArr = fileName.filter((file) => file.name !== amendedstr)
  console.log(newFileArr)
  setFileName(newFileArr)

}

const fileUpload = () => {
  console.log(filenameCheck(fileName))
}


  return (
    <>
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
          name={ file.name}
          onClick={ removeFile }
           />
        })
      }      
    </div>
    <UploadBtn
    disabled={ filenameCheck(fileName) !== fileName.length}
    onClick={ fileUpload }
    />
    </>
  );
}

export default App;
