import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    width:"300px",
    margin: 20
  },
  media: {
    height: 400,
  },
});

export const Name=styled.h1`
    text-align:center;
    font-size: 18px;
    line-height:0.4rem;
`
export const Tagline=styled.p`
    text-align:center;
    font-size:20px;
`

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
              <CardMedia
             className={classes.media}
            image={props.image}
            title={props.name}

        />
        <CardContent>
          <Name>{props.name}</Name>
          <Tagline>{props.tagline}</Tagline>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}