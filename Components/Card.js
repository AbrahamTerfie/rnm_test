import React, { useState, useContext } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { ThemeContext } from "../Context/themeContext";
export default function Card() {
  const { theme } = useContext(ThemeContext);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <Button className="close" onClick={toggle}>
      &times;
    </Button>
  );
  return (
    <div
      onClick={() => {
        console.log("clicked");
      }}
    >
      <Row style={theme} className="card">
        <Col lg="3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/320px-Rick_and_Morty.svg.png"
            alt="rnm_logo"
            className="logo"
          />
        </Col>
        <Col className="p-3" lg="9">
          <div className="cardHeader">
            <h5>Rick sanchez</h5>
            <AiOutlineHeart className="heart" size="2em" />
          </div>
          <div className="cardBody">
            <div>
              <small>origin</small>
              <p>species</p>
            </div>
            <div>
              <small>origin</small>
              <p>species</p>
            </div>
          </div>
          <div className="cardFooter">
            <Button onClick={toggle} outline size="sm" color="warning">
              see episodes
            </Button>
          </div>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader style={theme}   toggle={toggle} close={closeBtn}>
          <div className="modaltitleContainer">
            <div className="modalTitle">
              <img
                style={{
                  height: "2em",
                  width: "2em",
                  borderRadius: "50%",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/320px-Rick_and_Morty.svg.png"
                alt="rnm_logo"
                className="logo"
              />
              <h5 className="m-3">Rick sanchez</h5>
            </div>

              <Button 
              className="p-2"
              size="sm"
              color="warning"
              >  40 episodes</Button>

          </div>
        </ModalHeader>
        <ModalBody style={theme}  >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    </div>
  );
}
