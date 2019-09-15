import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
width: 15vw;
height: 10vh;
background-color: transparent;
`

const UploadBtn = ({ onClick, disabled }) => {
    return(
        
        <Button 
        onClick={ () => onClick() }
        disabled={ disabled }
        >
            UPLOAD
        </Button>
    )
}

export default UploadBtn