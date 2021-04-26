import { Grid } from "@material-ui/core";
import contactData from "./contactData";
import ContactCard from "./contactCard";

const ContactCardGrid = () => {
  return (
    <Grid
      justify="center"
      container
      spacing={2}
      style={{ margin: "20px auto 80px auto" }}
    >
      {/* map through the contact data objects
    pass through data points as props */}
      {contactData.map((data) => (
        <Grid
          item
          xs={11}
          sm={8}
          lg={4}
          style={{ maxWidth: "450px", minWidth: "300px", width: "30%" }}
        >
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
