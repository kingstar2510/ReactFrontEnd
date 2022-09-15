import React from 'react'
import styled from 'styled-components'


function Detailfour() {
  return (
    <Container>
        <Background>
            <img src='https://m.media-amazon.com/images/I/51UZurRCX4L.jpg'/>
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
                <span>$980</span>
            </ShareButton>
        </Controls>
        <SubTitle>
                2019 - NO EXCUSES - BOB STOOPS
        </SubTitle>
        <Description>
            From the legendary Oklahoma coach, a candid and inspiring memoir.
            When Bob Stoops took over as football coach in 1999, the Oklahoma Sooners were in disarray with back-to-back losing seasons.But in just two years' time, Stoops achieved the seemingly impossible: winning a national championship and returning the struggling Sooners to their powerhouse status, churning out NFL talent, Heisman Trophy winners and conference championships, bowl wins and national title runs on a regular basis.
        </Description>
    </Container>
  )
}

export default Detailfour
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
`
const Description = styled.div`
    position: fixed;
    font-size: 20px;
    margin-top: 16px;
    line-height: 1.4;
`