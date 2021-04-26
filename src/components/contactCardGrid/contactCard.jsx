import { Card, Link, Avatar, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  avatar: {
    background: "rgb(152, 190, 231, 0.15)",
    borderRadius: "50%",
    padding: "30px",
    color: "rgb(0, 0, 246)",
    border: "1px solid rgb(152, 190, 231, 0.5)",
  },
  card: {
    height: "100%",
    width: "90%",
    // border: "1px solid grey", not sure if it looks better with a border or not
    boxShadow: "3px 3px 10px 3px rgb(230,230,230)",
    border: '0.5px solid rgb(230,230,230)',
    borderRadius: '10px',
    margin: '0 auto',
  },
  cardContent: {
    margin: '0 auto',
    padding: '10%',
    textAlign: 'left',
  },
  subtitle: {
    marginBottom: 0,
    fontSize: "16px",
    lineHeight: 1,
    color: "grey",
  },
  link: {
    marginBlockStart: '16px',
    lineHeight: 1,
    fontSize: '16px',
    lineHeight: 1,
  }
});

const ContactCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Avatar className={classes.avatar}>{props.icon}</Avatar>
        <h2 style={{marginBottom: 0}}>{props.title}</h2>
        {/* map through the subtitles array
        if 'subtitle' is an email (includes '@') it will display as a link */}
        <div>
        {props.subtitles.map((subtitle) =>
          subtitle.includes("@") ? (
            <Link className={classes.link} display="block" href={"mailto:" + subtitle} target="_blank">
              {subtitle}
            </Link>
          ) : (
            <p className={classes.subtitle}>{subtitle}</p>

          )
          
        )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;