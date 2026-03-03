import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import ProfileModels from "../ProfileModels";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { headContentAnimation, headTextAnimation } from "../../utils/motion";
import Typewriter from "typewriter-effect";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px 40px;
  position: relative; /* Ensure stacking context is preserved */

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 70px;
  padding-top: 30px;

  @media (max-width: 960px) {
    align-items: center;
    text-align: center;
    padding-left: 0;
    padding-top: 0;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;

  @media (max-width: 960px) {
    font-size: 40px;
  }
`;

const Roles = styled.div`
  font-weight: 600;
  font-size: 32px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;

  @media (max-width: 960px) {
    font-size: 24px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  margin-bottom: 30px;

  @media (max-width: 960px) {
    text-align: center;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  z-index: 10; /* Ensure the button is above other elements */

  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
  color: white;
  position: relative; /* Ensure button's position context is preserved */
`;

const ModelContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BioModel = () => {
  return (
    <Container id="About">
      <TextContainer>
        <motion.div {...headTextAnimation}>
          <Title>Hi, I am {Bio.name}</Title>
        </motion.div>
        <motion.div {...headContentAnimation}>
          <Roles>
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </Roles>
          <SubTitle>{Bio.description}</SubTitle>
          <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
            Check Resume
          </ResumeButton>
        </motion.div>
      </TextContainer>
      <ModelContainer>
        <motion.div {...headContentAnimation}>
          <Tilt>
            <ProfileModels />
          </Tilt>
        </motion.div>
      </ModelContainer>
    </Container>
  );
};

export default BioModel;
