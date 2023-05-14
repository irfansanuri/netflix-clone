import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";

const navBarList = [
  { name: "Home", url: "#" },
  { name: "TV Shows", url: "#" },
  { name: "Movies", url: "#" },
  { name: "New & Popular", url: "#" },
  { name: "My List", url: "#" },
  { name: "Browse by Languages", url: "#" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.leftHeader}>
        <Link href="#">
          <Image
            className={styles.img}
            src="netflix.svg"
            width="100"
            height="25"
          />
        </Link>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "inline",
              visibility: {
                xs: "hidden",
                sm: "hidden",
                md: "hidden",
                lg: "visible",
              },
            },
          }}
        >
          <ul className={styles.menu}>
            {navBarList.map((navBar, index) => (
              <li key={index}>
                <Link href={navBar.url}>{navBar.name}</Link>
              </li>
            ))}
          </ul>
        </Box>
        <Box
          sx={{
            display: {
              xs: "inline",
              sm: "inline",
              md: "inline",
              lg: "none",
            },
            visibility: {
              xs: "visible",
              sm: "visible",
              md: "visible",
              lg: "hidden",
            },
          }}
        >
          <Link href="" className={styles.browse}>
            Browse
            <ArrowDropDownIcon className={styles.arrowIcon} />
          </Link>
        </Box>
      </div>
      <div className={styles.rightHeader}>
        <Link href="#" className={styles.icon}>
          <SearchIcon
            sx={{
              display: {
                xs: "none",
                sm: "inline",
                visibility: { xs: "hidden", sm: "visible" },
              },
            }}
          />
        </Link>
        <Link href="#" className={styles.icon}>
          <NotificationsNoneIcon />
        </Link>
        <Link
          href="#"
          className={styles.avatarContainer}
          style={{ marginLeft: "0 !important" }}
        >
          <div
            className={styles.icon}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Box className={styles.avatar} />
            <ArrowDropDownIcon
              className={styles.arrowIcon}
              sx={{
                display: {
                  xs: "none",
                  sm: "inline",
                  visibility: { xs: "hidden", sm: "visible" },
                },
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
