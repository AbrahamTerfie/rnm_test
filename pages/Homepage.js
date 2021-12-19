import React from "react";
import { Row, Button, Col } from "reactstrap";
import SearchBar from "../Components/SearchBar";
import ThemeToggle from "../Components/ThemeToggle";
export default function Homepage() {
  return (
    <div>
      <Row className="justify-content-center  align-items-center headerRow ">
        <Col sm={12} lg={3}>
          {/* display image */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/320px-Rick_and_Morty.svg.png"
            alt="rnm_logo"
            className="logo"
          />
        </Col>
        <Col sm={12} lg={6}>
          <SearchBar />
        </Col>
        <Col sm={12} lg={3}>
          <ThemeToggle />
        </Col>
      </Row>
      <Row>main component</Row>
    </div>
  );
}
