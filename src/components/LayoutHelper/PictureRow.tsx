import classes from "./PictureRow.module.scss";

interface RowProps {
  pic1?: string;
  pic2?: string;
  pic3?: string;
}

export const PictureRow = ({ pic1, pic2, pic3 }: RowProps) => {
  return (
    <div className={classes.container}>
      {pic1 && (
        <div className={classes.picture}>
          <img src={pic1} alt="pic1" />
        </div>
      )}
      {pic2 && (
        <div className={classes.picture}>
          <img src={pic2} alt="pic2" />
        </div>
      )}
      {pic3 && (
        <div className={classes.picture}>
          <img src={pic3} alt="pic3" />
        </div>
      )}
    </div>
  );
};
