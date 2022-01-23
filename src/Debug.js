import React, {useState} from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

const Wrapper = styled.div`
background:rgba(255,0,0,0.2);
position:absolute;
width:30vw;
height:100vh;
bottom: ${props => props.theme.bottom};
right: ${props => props.theme.right};
transition:all 250ms;
transition-timing-function: cubic-bezier(.24,-0.1,.12,1.54);
/* transition-timing-function: cubic-bezier(1, -0.04, 0.12, 1.07); */
font-family:inherit;
`
const enabled = {
    bottom:'0vw',
    right:'0vw'
}
const disabled = {
    bottom:'0vw',
    right:'-30vw'
}

const Buttons = styled.button`
background:rgba(0,0,0,0.5);
color:white;
border:none;
cursor:pointer;
/* margin:0; */
width:33.33%;
font-family:inherit;
font-size:20px;
padding:4% 0%;
transition:all 250ms;
position: relative;;

&::after {
    content:'';
    height:1px;
    position:absolute;
    width:0%;
    bottom:0;
    left:0;
    background:white;
    transition:all 250ms;
}

&:hover {
    background:rgba(0,0,0,0.75);
}

&:hover::after {
        width:100%;
    }

`
const MainTitle = styled.h1`
background:rgba(255,0,0,0.2);
margin:0;
text-align: center;
color:white;
text-transform:uppercase;
transition:all 250ms;

&::after {
    content:' menu'
}
`

const OptionNames = styled.h1`
/* background:green; */
margin:2.5% 0;
font-weight:100;
color:white;
text-transform: uppercase;
font-size:24px;
text-align: center;
`

const OptionButtons = styled.button`
    display:block;
    background:transparent;
    width:80%;
    margin:1% auto;
    font-size:24px;
    border:none;
    border:solid white 1px;
    color:white;
    font-family:inherit;
    font-weight:100;
    text-transform: uppercase;
    cursor:pointer;
    transition:background 150ms;
    &:active {
        background:rgba(255,255,255,0.5);
    }
`
const DebugInput = styled.input`
    background:rgba(255,0,0,0.2);
    display:block;
    width:78%;
    margin:1% auto;
    border:1px solid white;
    font-size:24px;
    font-family:inherit;
    font-weight:100;
    color:white;
`

const LeftDiv = styled.div`
position:absolute;
/* background:red; */
margin:0;
width:50%;
`
const RightDiv = styled.div`
    position:absolute;
    /* background:blue; */
    width:50%;
    margin:0;
    right:0;
`

const OpenDebug = styled.button`
position:absolute;
bottom:4vh;
left:40vw;
opacity:0.4;
transition:all 250ms;
&:hover {
    opacity:1;
    cursor: pointer;
}
`


const menuOptions = {
    buttons: ['NavBar', 'MidArea','LeftArea']
}

let NavWidth;

const NavBar = () => {
    return (
        <div>
        <LeftDiv>
            <OptionNames>add element</OptionNames>
            <OptionNames>remove element</OptionNames>
            <OptionNames>do som shit</OptionNames>
            <OptionNames>again</OptionNames>
            <OptionNames>Nav Width</OptionNames>
        </LeftDiv>

        <RightDiv>
        <OptionButtons>elements:10</OptionButtons>
        <OptionButtons>elements:10</OptionButtons>
        <OptionButtons>shiet</OptionButtons>
        <OptionButtons>no pls</OptionButtons>

        <DebugInput placeholder={NavWidth}></DebugInput>
        </RightDiv>
        </div>
    )
}

const MidArea = () => {
    return (
        <h1>midArea menu</h1>
    )
}

const LeftArea = () => {
    return(
        <h1>leftArea spoopy</h1>
    )
}



 function Debug() {
    const [debug, setDebug] = useState(disabled)
    const [title, setTitle] = useState('Debug')
    const [active, setActive] = useState('')

    const DebugButtons = menuOptions.buttons.map(items => {
        return <Buttons key = {items}
        onClick={() => {
            setTitle(items)
            setActive(items)
            console.log(items)
            
        }}
        >{items}</Buttons>
    })


    return(
        <ThemeProvider theme= {debug}>
            <OpenDebug onClick={() =>
             {debug===disabled ? setDebug(enabled): setDebug(disabled)}}>
                 ye
                 </OpenDebug>
        <Wrapper>
                {DebugButtons}
                <MainTitle>{title}</MainTitle>
                {title === 'NavBar' ? <NavBar/> : null}
                {title === 'MidArea' ? <MidArea/> : null}
                {title === 'LeftArea' ? <LeftArea/> : null}
                
        </Wrapper>
        </ThemeProvider>
    )

}

export default Debug