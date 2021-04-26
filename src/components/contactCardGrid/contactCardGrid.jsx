import { Grid } from "@material-ui/core";
import contactData from "./contactData";
import ContactCard from "./contactCard";

const ContactCardGrid = () => {
  return (
    <Grid
      container
      spacing={4}
      justify="center"
      style={{ margin: "0 auto 20px auto" }}
    >
      {/* map through the contact data objects
    pass through data points as props */}
      {contactData.map((data) => (
        <Grid item xs={11} sm={5} lg={3}>
          <ContactCard
            icon={data.icon}
            title={data.title}
            subtitles={data.subtitles}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactCardGrid;
