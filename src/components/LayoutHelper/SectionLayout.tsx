import classes from "./SectionLayout.module.scss";

export const LayoutSection = (children: any) => {
  return <div className={classes.container}>{children}</div>;
};
