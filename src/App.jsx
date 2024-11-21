import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

// Dynamic imports for lazy loading components
const BioWithModels = React.lazy(() => import("./components/sections/BioModel"));
const Skills = React.lazy(() => import("./components/sections/Skills"));
const Experience = React.lazy(() => import("./components/sections/Experience"));
const Projects = React.lazy(() => import("./components/sections/Projects"));
const Contact = React.lazy(() => import("./components/sections/Contact"));
const Footer = React.lazy(() => import("./components/sections/Footer"));
const StartCanvas = React.lazy(() => import("./components/canvas/Stars"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          {/* Use Suspense to lazy load components */}
          <Suspense fallback={<div>Loading...</div>}>
            <StartCanvas />
            <div>
              <BioWithModels />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects />
              <Wrapper>
                <Contact />
              </Wrapper>
              <Footer />
            </div>
          </Suspense>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
