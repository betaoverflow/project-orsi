import React from "react";
import Info from "../components/InfoSection/InfoSection";
import { ObjOne, ObjTwo } from "../components/InfoSection/data";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;
`;

const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 1.8;
  color: #1c2237;
  padding:5px;
`;

const List=styled.ul`
  margin-left:3%;
  margin-right:4%;
`

const ListItems=styled.li`
  font-size:15px;
  text-align:left !important;
  line-height:1.8;
`

const Content = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

const A=styled.a`

  color: royalblue;
  text-decoration: none;
  &:hover{
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid royalblue;
  }
`


function publications() {
  return (
    <div>
      <Info {...ObjOne} />
      <Info {...ObjTwo} />
      <Content>
      <Heading>For Authors</Heading>
      <Subtitle>
        OPSEARCH Is One Of The Leading Journals In The Field Of Operations
        Research And Quantitative Technique. Papers Submitted Should Conform To
        Following Guidelines In Order To Be Considered For Review.
      </Subtitle>
      <List>
        <ListItems>
          Each paper will be classified into any one of the following
          categories: (1)Theory and Methodology, (2) OR in practice, (3) Case
          Study, (4) Invited Papers (5) Short Communications/Technical Notes,
          and (6) Book Reviews.
        </ListItems>
        <ListItems>
          Submission of Manuscripts: Submission of a manuscript implies that the
          work described has not been published before; that it is not under
          consideration for publication anywhere else; that its publication has
          been approved by all co-authors, if any, as well as by the responsible
          authorities – tacitly or explicitly – at the institute where the work
          has been carried out. The publisher will not be held legally
          responsible should there be any claims for compensation.
        </ListItems>
        <ListItems>
          Permissions : Authors wishing to include figures, tables, or text
          passages that have already been published elsewhere are required to
          obtain permission from the copyright owner(s) for both the print and
          online format and to include evidence that such permission has been
          granted when submitting their papers. Any material received without
          such evidence will be assumed to originate from the authors.
        </ListItems>
        <ListItems>
          Online Submission : Authors should submit their manuscripts online.
          Electronic submission substantially reduces the editorial processing
          and reviewing times and shortens overall publication times. Please
          follow the hyperlink “Submit online” on the right and upload all of
          your manuscript files following the instructions given on the screen.
        </ListItems>
        <ListItems>
          Copyright : Copyright of all material published in OPSEARCH is held by
          the Operational Research Society of India.
        </ListItems>
        <ListItems>
          Review : All submitted papers will be reviewed by two referees.
          Referees desicion on suitability of the paper for publication is final
        </ListItems>
      </List>
      <Subtitle>Visit <A href="//www.editorialmanager.com/opse" target="_blank">here</A> for further details.</Subtitle>
      </Content>
    </div>
  );
}

export default publications;
