import React from 'react'
import styled from 'styled-components'


function Detail13() {
  return (
    <Container>
        <Background>
            <img src='https://image.scoopwhoop.com/q30/s3.scoopwhoop.com/bk1/bk2.jpg'/>
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
                <span>$900</span>
            </ShareButton>
        </Controls>
        <SubTitle>
                1964 - Autobiography of an Unknown Indian  - Nirad C. Chaudhuri
        </SubTitle>
        <Description>
            About the BookWritten by a self-confessed Anglophile, Autobiography of An Unknown Indian is a witty and endearing account of Nirad C. Chaudhuri's life. The book delves into the mind of the author as he takes his readers down memory lane to a pre-independence India. Written in a sarcastic manner that takes potshots at both Indian as well as British cultures, this book is one of the early works of Indian literature written in English. The book offers an authentic peek into the way India functioned during the last days of British rule. It draws various incidents from the author's life and lets us understand his views on life gained from his different experiences. Born into an educated Bengali household, the author led a life where the majority of his influences were from the western part of the world. The book starts off with a dedication to the British rule meant in a witty and sarcastic way.
        </Description>
    </Container>
  )
}

export default Detail13
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