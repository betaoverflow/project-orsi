import { Card, Link, Avatar, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  avatar: {
    background: "rgb(152, 190, 231, 0.15)",
    borderRadius: "50%",
    padding: "30px",
    color: "rgb(65, 105, 225)",
    margin: "0 auto",
    border: "1px solid rgb(152, 190, 231, 0.5)",
  },
  card: {
    height: "100%",
    width: "90%",
    // border: "1px solid grey", not sure if it looks better with a border or not
    boxShadow: "3px 3px 10px 3px rgb(240,240,240)",
  },
  subtitle: {
    marginBottom: 0,
    fontSize: "16px",
    lineHeight: 1,
    color: "grey",
  },
});

const ContactCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Avatar className={classes.avatar}>{props.icon}</Avatar>
        <h1>{props.title}</h1>
        {/* map through the subtitles array
        if 'subtitle' is an email (includes '@') it will display as a link */}
        {props.subtitles.map((subtitle) =>
          subtitle.includes("@") ? (
            <Link display="block" href={"mailto:" + subtitle} target="_blank">
              {subtitle}
            </Link>
          ) : (
            <p className={classes.subtitle}>{subtitle}</p>
          )
        )}
      </CardContent>
    </Card>
  );
};

export default ContactCard;