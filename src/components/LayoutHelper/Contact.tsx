import { MailButton } from "components/Button/Button";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import classes from "./Contact.module.scss";

export const Contact = () => {
  return (
    <>
      <h3>Want to get in touch?</h3>
      <div className={classes.Details}>
        <a href="https://github.com/lauravikanis" target="_blank:">
          <GitHub />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/lauravikanis/" target="_blank:">
          <LinkedIn />
          LinkedIn
        </a>
      </div>
      <div className={classes.Details}>
        <a href="https://www.facebook.com/laura.vikanis/" target="_blank:">
          <Facebook />
          Facebook
        </a>
        <a href="https://www.instagram.com/loeremoehre/" target="_blank:">
          <Instagram />
          Instagram
        </a>
        <a href="https://twitter.com/loeremoehre" target="_blank:">
          <Twitter />
          Twitter
        </a>
      </div>
      <h3>Send me a message</h3>
      <MailButton mailTo={"mailto:info@lauravikanis.de"} text={"Send Email"} />
    </>
  );
};
