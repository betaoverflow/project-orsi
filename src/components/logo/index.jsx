import React from "react";
import styled from "styled-components";
import orsiLogo from "../../assets/images/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 80px;
  height: 80px;

  img {
    width: 100%;
    height: 100%;
  }
`;


export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={orsiLogo} alt="Greenland logo" />
      </LogoImg>
    </LogoWrapper>
  );
}
