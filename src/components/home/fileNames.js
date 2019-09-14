import React from 'react'
import styled from 'styled-components'




const FileNameList = React.forwardRef(({name, key, onClick}, ref) => {
    const Item = styled.li`
    display:flex;
    width: 100vw;
    padding: 0.7vh;
    border-radius: 3px;
    >div{
        width: 100vw;
        >span{
            color: red;
            margin-left: 15em;        
        }
        
    button{
        display:none;
        position: fixed;
        right: 0.3vw;

        }
    }
    
    >div:hover{
        background-color:rgba(173,216,230,0.3);
        >button{
            display:initial;
            border: none;
            background-color: transparent;
        }
        
    }
    `

    const showSpan = !name.endsWith('.pdf')

    return(
        <Item>
            <div key={ key }>{ name }   
             {showSpan && <span >This is not a pdf File</span>}
            <button onClick={ ()=> onClick() }>&#215;</button>
            </div>
        </Item>
        
    
    )
})

export default FileNameList