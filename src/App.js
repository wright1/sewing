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
  // console.log(e.currentTarget.current)
  // console.log(warningRef.current)

  
}

const removeFile = (e) => {
  console.log(e.target.textContent)

  let str = e.target.textContent
  let amendedstr = str.replace('This is not a pdf File', '');

  let newFileArr = fileName.filter((file) => file.name !== amendedstr)
  console.log(newFileArr)
  setFileName(newFileArr)

}


  return (
    <div>
      
      <Upload
      ref={inputRef}
      img={ pdfImage } 
      onClick={ onButtonClick }
      onChange={ onChangeFiles }
      />

      {
        fileName.map((file, i) => {

        
          return <FileNameList
          key={ file.lastModified }
          name={ file.name}
          onClick={ removeFile }
           />
        })
      }

      {}
      
    </div>
  );
}

export default App;
