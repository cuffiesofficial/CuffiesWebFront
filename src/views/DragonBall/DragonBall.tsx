import React, { useRef, useMemo,useCallback, useState,MouseEvent} from 'react';
import Container from 'src/components/Container';
import Page from 'src/components/Page';
import styled ,{ keyframes, DefaultTheme } from 'styled-components';
import HowItWorks from './components/HowItWorks';
import { BigNumber } from '@ethersproject/bignumber';
import theme from 'src/theme';
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import cute from 'src/assets/img/pepe.gif';
import cute1 from 'src/assets/img/cute1.png';


const DragonBall: React.FC = () => {
  const [mouse,setmouse]=useState<boolean>(false);
  const [active,setactive]=useState<boolean>(false);
  const [xy,setxy]=useState<any>(0);
  const [y,setscroll]=useState<number>(0);
  const [z,setscrolltop]=useState<number>(0);







  const handleMouseEvent = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();

    setmouse(!mouse);

  };

  const handlescroll = (e: React.UIEvent<HTMLDivElement>) => {

    setscrolltop(getYPosition);
    console.log(z);

    setscroll(y+1);


  };

  function getYPosition(){
    const top  = window.pageYOffset || document.documentElement.scrollTop
    return top;
  }
  function getMousePos(e:any) {
    return {x:e.clientX,y:e.clientY};
}
document.onscroll=function(e) {
  setscrolltop(getYPosition);
  if(z>200){

    setactive(true);
  }
  else{setactive(false);}

};

document.onmousemove=function(e) {
  const mousecoords = getMousePos(e);
  setxy(mousecoords);
};


  return (
    <Page >
      <Container size="lg" onScroll={handlescroll} >
        <TopCountdownBanner>


        <TopCountdownLeft className="left">
        <img  onMouseOver={handleMouseEvent} onMouseLeave={handleMouseEvent}src={mouse ?  cute : cute1} />
      </TopCountdownLeft>
          Welcome to My little Baby Pony

          </TopCountdownBanner>

        <Separator />
        <StyledDoubleCol>
          <CardsBig>
          <ul>
            rato y: {xy.y} {' '}rato y: {xy.x}{' '}scroll z: {z}
            </ul>
          </CardsBig>

          <StyledDiv  onScroll={handlescroll} >

          <Cards>yo </Cards>

          <Cards>yo </Cards>
          <Cards>yo </Cards>
          <Cards>yo </Cards>


          </StyledDiv>





        </StyledDoubleCol>
        <Separator />
<Fade active={active}  z={z/1000}>
        <HowItWorks costPerTicket={BigNumber.from("100000000000000")}/>
        </Fade>
        <Separator />

      </Container>
    </Page>
  );
};


const rotate = keyframes`
0% { transform: rotate(0deg); }
40% { transform: rotate(3deg); }
75% { transform: rotate(5deg); }
95% { transform: rotate(-5deg); }
100% { transform: rotate(0deg); }
`;
const appear = keyframes`

from { transform: translate(35px);opacity:0 }

to {transform: translate(75px);opacity:1 }

`;
const Fade = styled.div<{ active?: boolean , z: number }>`


animation: ${({ active }) => (active ? '1.2s' : '0s')}; ${appear} infinte;
`;




const TopCountdownLeft = styled.div`
  position: absolute;
  left: -15px;
  bottom: -10px;
  img {
    width: 180px;
  }

  &:hover{
    animation: 3.2s ${rotate} infinite;


    filter: brightness(1.01);}
  @media (max-width: 768px) {
    left: 5px;
    bottom: -10px;
    img {
      width: 50px;
    }
  }
`;
const StyledDoubleCol = styled.div`
  margin-top: 40px;
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  width: 100%;

  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    display: block;
    margin-top: 12px;
  }
`;

const StyledDiv = styled.div`
overflow:scroll;
height:600px;
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  width: 100%;

`;


const Cards = styled.div`
  position: relative;
  background-color: #a3212a;
  border-radius: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border: solid 2px #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(1800deg, ${theme.color.primary.one}, ${theme.color.primary.main});
  padding: 10px 0;
  text-transform: uppercase;
  font-size: 16px;
  width: 100%;
 height: 200px;
`;
const CardsBig = styled.div`
  position: relative;
  background-color: #a3212a;
  border-radius: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border: solid 2px #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(1800deg, ${theme.color.primary.one}, ${theme.color.primary.main});
  padding: 10px 0;
  text-transform: uppercase;
  font-size: 16px;
  width: 100%;
 height: 600px;
`;


const TopCountdownBanner = styled.div`
  position: relative;
  background-color: #a3212a;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border: solid 2px #303030;
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(270deg, ${theme.color.secondary}, ${theme.color.primary.light});
  padding: 10px 0;
  text-transform: uppercase;
  font-size: 16px;
  height: 100px;
  @media (max-width: 768px) {
    height: 55px;
  }
`;

const StyledCol = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Separator = styled.div`
  height: 1px;
  border-top: dashed 3px #303030;
  margin: 30px 0;
`;

export default DragonBall;
