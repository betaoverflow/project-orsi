import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid royalblue;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
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
          <Link href="/events">Events</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/education">Education</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/contact">Contact Us</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
