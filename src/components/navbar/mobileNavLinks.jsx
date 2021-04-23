import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  padding-top: 10px;
  color: #222;
  font-weight: 500;
  font-size: 18px;
  display: flex;


`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
    transition: all 0.2s ease-in-out;
      border-bottom: 2px solid royalblue;
  }
`;


const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
           <LinkItem>
            <Link href="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/members">Members</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/publications">Publications</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/education">Education</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/contact">Contact Us</Link>
          </LinkItem>
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
