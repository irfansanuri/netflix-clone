import React from "react";
import Link from "next/link";
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Link href="#">
      <SearchIcon
        sx={{
          fontSize: "28px",
          display: {
            xs: "none",
            sm: "inline",
            visibility: { xs: "hidden", sm: "visible" },
          },
        }}
      />
    </Link>
  );
};

export default SearchBar;
