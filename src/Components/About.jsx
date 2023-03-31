import React from 'react'
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

const Sections = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 display: flex;
 justify-content: center;
`;
const Container = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 width: 1400px;
 display: flex;
 justify-content: space-between;
 
 
`;
const Left = styled.div`
flex: 1;
@media only screen and (max-width: 768px) {
   display: none;
  }
`;


const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;

@media only screen and (max-width: 768px) {
   align-items: center;
   text-align: center;
  }

`;
const Title = styled.h1`
font-size: 74px;

@media only screen and (max-width: 768px) {
   font-size: 60px;
  }
`;
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 20px;

`;
const Line = styled.img`
height: 5px;
`;

const Subtitle = styled.h2`
 color: #b9374c;
`;

const Desc = styled.p`
  font-size: 35px;
  @media only screen and (max-width: 768px) {
   font-size: 25px;
  }
`;

const Button = styled.button`
margin-top: 10px;
 background-color: #bb0e2b;
 width: 100px;
 color: white;
 font-weight: 50;
 border: none;
 padding: 10px;
 cursor: pointer;
 border-radius: 5px;
`;


function About() {
  return (
    <Sections>
      <Container>
        <Left>
          {/* 3d model */}
          <Canvas camera={{fov:25, position:[5,5,5]}}>
                <OrbitControls enableZoom={false} autoRotate={true} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Cube/>
            </Canvas>
        </Left>
        <Right>
          <Title>About Me</Title>
          <WhatWeDo>
            <Line src="./imgs/line.png" />
            <Subtitle>Who Am I</Subtitle>
          </WhatWeDo>
          <Desc>Hi, I'm Prahlad Biswas, a student, coder, geek, and gamer."</Desc>
          <Button>Show more</Button>
        </Right>
      </Container>
    </Sections>
  )
}

export default About
