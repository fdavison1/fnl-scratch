import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import lights from '../assets/lights.png'

const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Bungee+Shade|Frijole&display=swap');
display: flex;
justify-content: center;
align-items: center
height: 100px;
box-sizing: border-box;
background: #262626;
.container {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    &:hover {
        color: purple;
    }
}
.logoLeft {
    display: flex;
    align-items: center;
}
.logoRight {
    display: flex;
    align-items: center;
    transform: scale(-1,1);
}
.lights {
    height: 75px;
    margin-top: 5px;
}
h1 {
    transition: all 1s ease;
    font-size: 5rem;
    font-family: 'Bungee Shade', cursive;
    color: red;
    &:hover {
        cursor: pointer;
    }
}
.buttons {
    position: absolute;
    right: 25px;
    display: flex;
    flex-direction: column;
}
button {
    transition: all 1s ease;
    font-size: 1.2rem;
    background: none;
    border: none;
    color: lightgray;
    border: solid 1px lightgray;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
        background: white;
        color: #262626;
    }
}`

const Link2 = styled(Link)`
text-decoration: none;`

const Header = () => {
    return (
        <Wrapper>
            <div className='container'>

            <div className='logoLeft'>
                <img className='lights' src={lights} alt="stadium lights"/>
            </div>
                <Link2 to='/'>
                    <h1>FRIDAY NIGHT LITE</h1>
                </Link2>
            
            <div className='logoRight lights'>
                <img className='lights' src={lights} alt="stadium lights"/>
            </div>

            
            
            </div>
            
            <div className='buttons'>
                {/* <Link2 to='/'><button>home</button></Link2> */}
                <button>login</button>
                </div>
        </Wrapper>
    )
}

export default Header