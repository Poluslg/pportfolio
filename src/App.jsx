import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Works from "./Components/Works";
import styled from "styled-components";
import "./index.css";


const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: #ffffff;
/* background: url("./imgs/bg.jpeg"); */
/* background-color:#5317dd; */
background: -webkit-linear-gradient(left, #7412f5,  #7a1ef3 30%, #4a2f5a);

&::-webkit-scrollbar {
  display: none;
}
`;

function App() {
 
  return (
    <Container>
      <Hero />
      <Works/>
      <About />
      <Contact />
    </Container>
  );
}

export default App;
