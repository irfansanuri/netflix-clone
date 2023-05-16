import React, { useState } from "react";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";
import DropdownItem from "../DropdownItem/DropdownItem";
import styles from "./ProfileDropdown.module.css";

const content = <div style={{ margin: "100px" }}>Profile Dropdown</div>;

const ProfileDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  const avatarIcon = (
    <div className={styles.icon}>
      <Box className={styles.avatar} />
      <ArrowDropDownIcon
        className={`${dropdown ? styles.rotate : styles["re-rotate"]}`}
        sx={{
          display: {
            xs: "none",
            sm: "inline",
          },
          visibility: { xs: "hidden", sm: "visible" },
        }}
      />
    </div>
  );

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href="#">{avatarIcon}</Link>
      {dropdown && <DropdownItem trigger={dropdown} content={content} />}
    </div>
  );
};

export default ProfileDropdown;
