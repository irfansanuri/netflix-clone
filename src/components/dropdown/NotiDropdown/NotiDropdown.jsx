import React, { useState } from "react";
import Link from "next/link";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DropdownItem from "../DropdownItem/DropdownItem";
// import styles from "./NotiDropdown.module.css";

const content = <div style={{ margin: "100px" }}>Notification</div>;

const NotiDropdown = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      onMouseEnter={() => setDropDown(true)}
      onMouseLeave={() => setDropDown(false)}
    >
      <Link href="#">
        <NotificationsNoneIcon sx={{ fontSize: 28 }} />
      </Link>
      {dropDown && <DropdownItem trigger={dropDown} content={content} />}
    </div>
  );
};

export default NotiDropdown;
