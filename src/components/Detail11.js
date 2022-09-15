import React from 'react'
import styled from 'styled-components'


function Detail11() {
  return (
    <Container>
        <Background>
            <img src='https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Complete-Works-of-Swami-Vivekananda.jpg'/>
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
                2013 - The Complete Works of Swami Vivekanand - Swami Vivekananda
        </SubTitle>
        <Description>
            In these volumes we have not only a gospel to the world at large, but also, to its own children, the Charter of the Hindu faith. For the first time in history, Hinduism itself forms here the subject of generalization of a Hindu mind of the highest order. What Hinduism had needed was the organizing and consolidating of its own idea, a rock where she could lie at anchor, and an authoritative utterance in which she might recognize herself. What the world had needed was a faith that had no fear of truth. Both are found in the words and writings of Swami Vivekananda. It is the latest gospel of a modern Prophet of religion and spirituality to the mankind.' - Sister Nivedita
        </Description>
    </Container>
  )
}

export default Detail11
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
    margin-top: 325px;
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