import React from 'react'
import styled from 'styled-components'


function Detail15() {
  return (
    <Container>
        <Background>
            <img src='https://gobookmart.com/wp-content/uploads/2021/07/8-Best-Books-by-Indian-Authors-in-2021-so-far-1.jpg'/>
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
                <span>$780</span>
            </ShareButton>
        </Controls>
        <SubTitle>
                2021 - The Last Queen- Chitra Banerjee Divakaruni
        </SubTitle>
        <Description>
           'I am Rani Jindan, Mother of the Khalsa. That is my identity. That is my fate.'While we have all heard tales of Rani Lakshmi Bai and Padmavati, not many of us are familiar with another Indian queen.Daughter of the royal kennel keeper, the beautiful Jindan Kaur went on to become Maharaja Ranjit Singh's youngest and last queen; his favourite. She became regent when her son Dalip, barely six years old, unexpectedly inherited the throne. Sharp-eyed, stubborn, passionate, and dedicated to protecting her son's heritage, Jindan distrusted the British and fought hard to keep them from annexing Punjab. Defying tradition, she stepped out of the zenana, cast aside the veil and conducted state business in public. 
        </Description>
    </Container>
  )
}

export default Detail15
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