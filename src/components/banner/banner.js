import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button } from "@mui/material";
import styles from "./banner.module.css";

const Banner = (props) => {
  const { title, subTitle, imgUrl } = props;

  const handleOnPlay = () => {
    console.log("handleOnPlay");
  };

  return (
    <>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      <div className={styles.descContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subTitle}</p>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.primaryButton}
            onClick={handleOnPlay}
            variant="contained"
          >
            <PlayArrowIcon className={styles.icon} />
            Play
          </Button>
          <Button className={styles.secondaryButton} variant="contained">
            <InfoOutlinedIcon className={styles.icon} />
            More Info
          </Button>
        </div>
      </div>
    </>
  );
};

export default Banner;
