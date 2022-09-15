import React from 'react'
import styled from 'styled-components'


function Detail14() {
  return (
    <Container>
        <Background>
            <img src='https://qph.cf2.quoracdn.net/main-qimg-57146ad259302b5670db3ead598bfd62.webp'/>
        </Background>
        <Controls>
            {/* <AddButton>
                <span>+</span>
                <span>ADD</span>
            </AddButton> */}
            <AddButton>
                <span>+</span>
                <span>BUY</span>
            </AddButton>
            <ShareButton>
                {/* <img src='/images/group-icon.png' /> */}
                <span>$800</span>
            </ShareButton>
        </Controls>
        <SubTitle>
                2016 - One Indian Girl  -  Chetan Bhagat
        </SubTitle>
        <Description>
           The book begins with Radhika making arrangements regarding her marriage with Brijesh Gulati who works as a software engineer for Facebook in San Francisco. She later revealed her childhood and life in Delhi, as a studious, shy and nerdy girl who came from a middle-class family. Radhika has an elder sister, Aditi who was the more beautiful, outgoing, and popular one at their school. She also communicated her thoughts and decisions to her inner judgemental voice or "mini-me" as called.
While trying to engage in conversation with Brijesh, she was unexpectedly contacted by Debashish "Debu" Sen, her ex-boyfriend, who wished to meet her, to which she refused. 
        </Description>
    </Container>
  )
}

export default Detail14
const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    margin-left : 150px; 
    ${'' /* max-height: 350px; */}
    ${'' /* top: 0;
    left: 0;
    right: 0; */}
    ${'' /* bottom: 0.5px; */}
    z-index: -1;
    opacity:0.8;

    img{
        width: 100%;
        height: 100%;
        max-height:550px;
        object-fit: cover;
    }
`

const Controls = styled.div`
    display:flex;
    align-items: center;
    margin-left : 150px;
    ${'' /* position:fixed; */}

`
const AddButton = styled.button`
    ${'' /* position:fixed; */}
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 15px;
    margin-top: 250px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    border-radius: 7px;
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;
    background-color: rgba(0,0,0,0.6);
    color: white;

     &:hover {
            border: 4px solid white
        }

`

const ShareButton = styled(AddButton)`
`
const SubTitle = styled.div`
    font-size: 15px;   
    min-height: 20px;
    margin-top: 20px;
    text-transform: uppercase;
`
const Description = styled.div`
    position: fixed;
    font-size: 20px;
    margin-top: 16px;
    line-height: 1.4;

`