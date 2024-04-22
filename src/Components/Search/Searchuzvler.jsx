import React from "react";
import "./searchuzvler.css";
import { Container } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const Searchuzvler = () => {
  return (
    <div className="search-category">
      <Container>
        <div className="filter-category">
          <button>
            Hamısı <IoMdArrowDropdown />
          </button>
        </div>
        <div>
          <input type="text" id="search" name="search" placeholder="Axtar..." />
          <button type="submit">
            <IoIosSearch />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Searchuzvler;
