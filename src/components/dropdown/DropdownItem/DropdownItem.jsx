import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Grow from "@mui/material/Grow";
import styles from "./DropdownItem.module.css";

function DropdownItem(props) {
  const { trigger, content } = props;

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownItem}>
        <Grow in={trigger}>
          <div className={styles.dropdownContent}>
            <div className={styles.arrowContainer}>
              <ArrowDropUpIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.content}>{content}</div>
          </div>
        </Grow>
      </div>
    </div>
  );
}

export default DropdownItem;
