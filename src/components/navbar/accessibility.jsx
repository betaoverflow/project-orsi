import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;


const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid royalblue;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: royalblue;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <Link to={{ pathname:'http://orsihq.in/application_form.html'}} target="_blank">
      <LoginButton>Join Us</LoginButton>
      </Link>

    </AccessibilityContainer>
  );
}
