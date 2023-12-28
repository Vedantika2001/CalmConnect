import React from "react";
import { Container } from "react-bootstrap";

import backgroundImage from "../images/home3.png"; // Adjust the path based on your project structure
import logoImage from "../images/lo1.png"; // Adjust the path for your logo

export function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };
  const logoStyle = {
    maxWidth: "500px", // Adjust the size of your logo as needed
    marginRight: "500px", // Adjust the margin as needed
  };

  return (
    <>
      <div style={backgroundImageStyle}>
        <Container>
          <img src={logoImage} alt="Logo" style={logoStyle} />
          {/* Your page content goes here */}
          <h1>Mental Health Matters</h1>
          <p>
            "Discover Calm, Forge Connections: Your Journey to Mental Wellness
            Starts Here."
          </p>
        </Container>
      </div>
      <div style={backgroundImageStyle}>
        <Container>
          <h1>his</h1>
        </Container>
      </div>
    </>
  );
}
