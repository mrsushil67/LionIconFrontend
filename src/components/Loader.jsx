import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 8px solid #fff; /* Customize circle color */
  border-top-color: transparent;
  animation: ${rotate} 1.5s linear infinite; /* Adjust speed */
  
  &:nth-child(1) {
    width: 160px;
    height: 160px;
    animation-direction: normal;
  }
  
  &:nth-child(2) {
    width: 120px;
    height: 120px;
    animation-direction: reverse;
    animation-delay: 0.2s; /* Stagger animation */
  }
  
  &:nth-child(3) {
    width: 80px;
    height: 80px;
    animation-direction: normal;
    animation-delay: 0.4s; /* Stagger animation */
  }
`;

const Loader = ({ size = 200, color = "#fff" }) => {
    return (
      <LoaderContainer style={{ width: `${size+60}px`, height: `${size+60}px`,overflow:"hidden",marginLeft:"45px" }}>
        <Circle
          style={{
            borderColor: color,
            borderTopColor: "transparent",
            width: `${size * 1.6}px`,
            height: `${size * 1.6}px`,
            borderWidth: size * 0.06, // Scales border size
            margin: "10px"
          }}
        />
        <Circle
          style={{
            borderColor: color,
            borderTopColor: "transparent",
            width: `${size * 1.2}px`,
            height: `${size * 1.2}px`,
            borderWidth: size * 0.06,
          }}
        />
        <Circle
          style={{
            borderColor: color,
            borderTopColor: "transparent",
            width: `${size * 0.8}px`,
            height: `${size * 0.8}px`,
            borderWidth: size * 0.06,
          }}
        />
      </LoaderContainer>
    );
  };
  

export default Loader;