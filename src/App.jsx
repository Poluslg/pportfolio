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
color: white;
background: url("./imgs/bg.jpeg");

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
