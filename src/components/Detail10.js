import React from 'react'
import styled from 'styled-components'


function Detail10() {
  return (
    <Container>
        <Background>
            <img src='https://img.theculturetrip.com/wp-content/uploads/2017/08/great-indian-novel-shashi-tharoor-viking-press.jpg'/>
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
                <span>$500</span>
            </ShareButton>
        </Controls>
        <SubTitle>
                2014 - The Great Indian Novel - Shashi Tharoor
        </SubTitle>
        <Description>
            In this award-winning, internationally acclaimed novel, Tharoor has masterfully recast the 2,000 year-old epic, The Mahabharata, with fictional but highly recognizable events and characters from twentieth-century Indian politics. Chronicling the Indian struggle for freedom and independence from Great Britain, Tharoor directs his hilarious satire as much against Indian foibles as the bumbling of the British rulers.
        </Description>
    </Container>
  )
}

export default Detail10
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
        max-height:350px;
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
    margin-top: 350px;
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