import React, { useState} from 'react'
import styled from 'styled-components'


const Upload = React.forwardRef(({ onClick, onChange, img },ref) => {

   const Wrapper = styled.div`
   display:flex;
   >input{
       display: none;
   }
   `

    return(
        <Wrapper>
            <input type='file'
            name='files' 
            ref={ ref } 
            accept='.pdf' 
            multiple={ true }
            onChange={ (e) => onChange(e)}
            />

            <button onClick={() => onClick() }>
                <img src={ img } alt='pdf icon' /> Select Files
            </button>
        </Wrapper>


    )
})

export default Upload