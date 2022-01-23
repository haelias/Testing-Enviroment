import styled from 'styled-components'
import React, {useState} from 'react'
import { Context } from './Context'
const Wrapper = styled.div`
position:absolute;
top:0;
left:0;
width:25vw;
height:100vh;
background:rgb(19,19,19);
color:white;
`

const TopWrapper = styled.div`
height:25vh;
/* background:red; */
border-bottom:solid 1px white;
`
const BottomWrapper = styled.div`
background:rgb(14,14,14);
position:absolute;
top:25vh;
height:75vh;
width:100%;
overflow-y:scroll;
overflow-x:hidden;
border-top:solid 1px white;
`

const TopOptions = styled.h1`
font-size:24px;
margin:0;
/* background:green; */
text-align: center;
/* background:green; */
padding:3.33%;
cursor:pointer;
width:fit-content;
margin:0 auto;
position: relative;
&::after {
    content:'';
    position:absolute;
    bottom:0;
    left:0;
    width:0;
    height:1px;
    background:white;
    transition:all 250ms;
    font-weight:1000;
}
&:hover::after {
    width:100%;
}
&:hover {
    /* font-weight:100; */
}
`


const topOptions = {
    name:['Nothing', 'Names', 'Nothing part 2']
}

const getOptions = topOptions.name.map(items => {
    return <TopOptions key = {items.value} onClick={() => {console.log('bruh')}}>{items}</TopOptions>
} )



export default function NavBar() {
    const [amount, setAmount] = useState(10)

    let elmntArray = []

    for (let i = 0; i < amount; i++) {
        let test = 'yeet'
        elmntArray.push(test + i)
    }
    const getElmnts = elmntArray.map(items => {
        return <p>{items}</p>
    })

    return(
        <Wrapper>
            <TopWrapper>
                {getOptions}
            </TopWrapper>
            <BottomWrapper>
            <input type='number' placeholder={amount} onChange={(e) => {setAmount(e.target.value)}}/>
            
            {getElmnts}
            </BottomWrapper>
        </Wrapper>
    )
}