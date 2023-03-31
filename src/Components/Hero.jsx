import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Sections = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Container = styled.div`
 height: 100%;
 scroll-snap-align: center;
 width: 1400px;
 display: flex;
 justify-content: space-between;
 @media only screen and (max-width: 768px) {
  width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
 
`;
const Left = styled.div`

flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
@media only screen and (max-width: 768px) {
   flex: 1;
   align-items: center;
  }
`;

const Title = styled.h1`
font-size: 74px;
@media only screen and (max-width: 768px) {
  text-align: center;
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
    padding: 20px;
    text-align: center;
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

const Right = styled.div`
flex: 3;
position: relative;
@media only screen and (max-width: 768px) {
   flex: 1;
   width: 100%;
  }

`;
const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom:0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;
@media only screen and (max-width: 768px) {
   width: 300px;
   height: 300px;
  }

 @keyframes animate {
  to{
    transform: translateY(20px);
  }
 }
`;

function Hero() {
  return (
    <Sections>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solv.</Title>
          <WhatWeDo>
            <Line src="./imgs/line.png" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>Showcasing creativity through code.</Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
        
          <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
           
          </Canvas>
          <Img src="./imgs/moon.png" />
        </Right>
      </Container>
    </Sections>
  )
}

export default Hero