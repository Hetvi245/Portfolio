import React from "react";
import styled from "styled-components";
import headerImg from "../assets/header-img.svg"; // Ensure the path to the image is correct
import "animate.css"; // Import animate.css for animations
import TrackVisibility from "react-on-screen";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 600px; /* Optional: Adjust size */
  margin: auto; /* Center the image */
`;

const ProfileModels = () => {
  return (
    <ImageContainer>
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <img
              src={headerImg}
              alt="Profile Header"
              style={{
                width: "100%", // Make the image responsive
                maxWidth: "400px", // Set a maximum width
                height: "auto", // Maintain aspect ratio
              }}
            />
          </div>
        )}
      </TrackVisibility>
    </ImageContainer>
  );
};

export default ProfileModels;
