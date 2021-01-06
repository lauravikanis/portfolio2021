import React from "react";
import Page from "./Page";

export default {
  title: "Pages/Page",
  component: Page,
};

export const home = (args) => <Page {...args} />;
