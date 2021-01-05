import React from "react";
import Menueitem from "./Menueitem";

export default {
  title: "Example/Menueitem",
  component: Menueitem,
};

const Template = (args) => <Menueitem {...args} />;

export const Item = Template.bind({});
Item.args = {
  secondary: false,
  children: (
    <>
      <h2>About</h2>
    </>
  ),
};

export const ItemSecondary = Template.bind({});
ItemSecondary.args = {
  secondary: true,
  children: (
    <>
      <h2>Contact</h2>
    </>
  ),
};
