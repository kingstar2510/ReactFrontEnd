import React, { useState } from 'react'
import styled from 'styled-components'


function Detail12() {

    const [first, setfirst] = useState({
        id: "",
        name: "",
        price: "",
    })

  return (
    <Container>
        <Background>
            <img src='https://buzz.iloveindia.com/wp-content/uploads/2015/08/indian-books-40.jpg'/>
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
                1999 - WINGS OF FIRE: AUTOBIOGRAPHY OF ABDUL KALAM - A. P. J. Abdul Kalam
        </SubTitle>
        <Description>
            Every common man who by his sheer grit and hard work achieves success should share his story with the rest for they may find inspiration and strength to go on, in his story. The 'Wings of Fire' is one such autobiography by visionary scientist Dr. APJ Abdul Kalam, who from very humble beginnings rose to be the President of India. The book is full of insights, personal moments and life experiences of Dr. Kalam. It gives us an understanding on his journey of success. Dr. Kalam by narrating his life journey evokes the reader to identify with one’s inner fire and potential, for he was of the firm belief that each one of us was born with the strength and potential to make a tangible change in the world. How he inspired himself to achieve dreams and how he went about accomplishing so much is what the book captures nicely. 
        </Description>
    </Container>
  )
}

export default Detail12
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