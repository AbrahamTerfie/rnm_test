import React, { useContext, useState } from "react";
import { Row, Button, Col } from "reactstrap";
import SearchBar from "../Components/SearchBar";
import { BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../Context/themeContext";
export default function Homepage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={theme} >
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
          <div className="themeToggle">
            <Button onClick={ toggleTheme} outline>
              <BsFillMoonFill className="m-2 " size="2em" />
              darkmode
            </Button>
          </div>
        </Col>
      </Row>
      <Row>main component</Row>
    </div>
  );
}
