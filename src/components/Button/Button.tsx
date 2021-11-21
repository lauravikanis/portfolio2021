import React from "react";
import classes from "./Button.module.scss";

interface MailProps {
  mailTo: string;
  text: string;
}

export const MailButton = ({ mailTo, text }: MailProps) => {
  return (
    <a href={mailTo} className={classes.Button}>
      {text}
    </a>
  );
};
