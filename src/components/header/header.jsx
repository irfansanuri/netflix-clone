import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import ProfileDropdown from "../dropdown/ProfileDropdown/ProfileDropdown";
import NotiDropdown from "../dropdown/NotiDropdown/NotiDropdown";
import SearchBar from "../searchBar/Search";
import styles from "./header.module.css";

const navBarList = [
  { name: "Home", url: "/" },
  { name: "TV Shows", url: "/" },
  { name: "Movies", url: "/" },
  { name: "New & Popular", url: "/" },
  { name: "My List", url: "/" },
  { name: "Browse by Languages", url: "/test" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.leftHeader}>
        <Link href="#">
          <Image
            className={styles.img}
            src="netflix.svg"
            alt="netflix logo"
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
              <li
                key={index}
                className={index === activeIndex ? styles.active : ""}
                onClick={() => setActiveIndex(index)}
              >
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
        <div className={styles.icon}>
          <SearchBar />
        </div>
        <div className={styles.icon}>
          <NotiDropdown />
        </div>

        <div className={styles.icon}>
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}

export default Header;
