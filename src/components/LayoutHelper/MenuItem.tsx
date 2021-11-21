import classes from "./MenuItem.module.scss";

interface MenuItemProps {
  id: string;
}

export const MenuItem = ({ id }: MenuItemProps) => {
  return (
    <div className={classes.MenuItem} id={id}>
      <h2>{id}</h2>
    </div>
  );
};
