import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
//storing the data separately for easy access
//will map through this data in the parent grid component to create the cards
export default [
  {
    icon: <LocationOnIcon fontSize='large'></LocationOnIcon>,
    title: "Our Location",
    //using arrays for the subtitles in case there are multiple data points
    subtitles: ["Durgapur, West Bengal, India"],
  },
  {
    icon: <PhoneIcon fontSize='large'></PhoneIcon>,
    title: "Call Us On",
    subtitles: ["+91 654654654", "+91 654321654"],
  },
  {
    icon: <EmailIcon fontSize='large'></EmailIcon>,
    title: "Email Us",
    subtitles: ["orsi@orsi.com", "orsi@orsi.com", "orsi@orsi.com"],
  },
];
