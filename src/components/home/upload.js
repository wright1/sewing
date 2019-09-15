import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
width: 15vw;
height: 10vh;
background-color: transparent;
`

const UploadBtn = ({ onClick, disabled }) => {
    return(
        // <form 
        // encType="multipart/form-data"
        // method='post'
        //  >
        <Button
        type='button' 
        onClick={ () => onClick() }
        disabled={ disabled }
        >
            UPLOAD
        </Button>
        // </form>
    )
}

export default UploadBtn