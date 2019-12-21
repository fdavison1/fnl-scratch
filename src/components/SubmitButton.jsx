import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
font-size: 3rem;
background: red;`

const SubmitButton = props => {
    return (



    <Button
    onClick={()=>props.addScore()}
    >{props.title}</Button>



    )
}

export default SubmitButton